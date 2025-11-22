import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";

// Types for the component
interface FooterBackgroundProps {
	className?: string;
}

export default function FooterBackground({ className }: FooterBackgroundProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const mouseRef = useRef({ x: 0, y: 0 });

	useEffect(() => {
		if (!containerRef.current) return;

		const container = containerRef.current;

		// Global variables managed within the effect scope
		const mousePosition = new THREE.Vector2(0.5, 0.5);
		let lastMouseMoveTime = Date.now();
		let isMouseMoving = false;

		// Device detection
		const pixelRatio = Math.min(window.devicePixelRatio, 2);

		// Configuration for Digital Storm (Effect 5 from reference)
		const config = {
			trailLength: 20,
			inertia: 0.9,
			bloom: { strength: 1.2, radius: 0.3, threshold: 0.7 },
			grainIntensity: 0.12,
		};

		// Setup Renderer
		const renderer = new THREE.WebGLRenderer({
			antialias: false,
			alpha: true,
			powerPreference: "high-performance",
		});
		renderer.setPixelRatio(pixelRatio);
		renderer.setClearColor(0x050e05, 1); // Match bio-dark background
		container.appendChild(renderer.domElement);

		const scene = new THREE.Scene();
		const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

		// Shader Definitions
		const baseVertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

		const shaderPrologue = `
      uniform float iTime;
      uniform vec3 iResolution;
      uniform vec2 iMouse;
      uniform vec2 iPrevMouse[MAX_TRAIL_LENGTH];
      uniform float iOpacity;
      uniform float iScale;
      varying vec2 vUv;
      
      float hash(vec2 p) { return fract(sin(dot(p,vec2(127.1,311.7))) * 43758.5453123); }
      float hash1(float n) { return fract(sin(n) * 43758.5453); }
    `;

		const digitalShader = `
      float blob_channel(vec2 p, vec2 mousePos, float intensity, float activity, float timeOffset) {
        vec2 grid_p = floor(p * vec2(50.0, 25.0) * iScale);
        float col_hash = hash(vec2(grid_p.x, 0.0));
        float time_component = (iTime + timeOffset) * (0.5 + col_hash * 0.5) * 2.0;
        time_component += col_hash * 100.0;
        float scroll_p = fract(grid_p.y * 0.1 + time_component);
        float leader = smoothstep(0.99, 1.0, scroll_p);
        float tail = smoothstep(0.0, 0.9, scroll_p) * (1.0 - leader);
        float glyph = leader * 2.0 + tail * 0.8;
        glyph *= hash1(floor(grid_p.y * 0.1 + time_component) + grid_p.x);
        float radius = 0.25 + 0.15 * (1.0 / iScale);
        float dist_mask = pow(1.0 - smoothstep(0.0, radius * activity, length(p - mousePos)), 3.0);
        return glyph * dist_mask * intensity;
      }
      vec3 blob(vec2 p, vec2 mousePos, float intensity, float activity) {
          float r = blob_channel(p + vec2(0.005, 0.0), mousePos, intensity, activity, 0.0);
          float g = blob_channel(p, mousePos, intensity, activity, 1.0);
          float b = blob_channel(p - vec2(0.005, 0.0), mousePos, intensity, activity, 2.0);
          // Using the green color from the reference: vec3(0.3, 1.0, 0.4)
          return vec3(r, g, b) * vec3(0.3, 1.0, 0.4);
      }
    `;

		const shaderEpilogue = `
      void main() {
        vec2 uv = (vUv * 2.0 - 1.0) * vec2(iResolution.x / iResolution.y, 1.0);
        vec2 mouse = (iMouse * 2.0 - 1.0) * vec2(iResolution.x / iResolution.y, 1.0);
        
        vec3 color = vec3(0.0);
        color += blob(uv, mouse, 1.0, iOpacity);
        
        for (int i = 0; i < MAX_TRAIL_LENGTH; i++) {
          vec2 prevMouse = (iPrevMouse[i] * 2.0 - 1.0) * vec2(iResolution.x / iResolution.y, 1.0);
          float trailIntensity = 1.0 - float(i) / float(MAX_TRAIL_LENGTH);
          trailIntensity = pow(trailIntensity, 2.0);
          if (trailIntensity > 0.01) {
            color += blob(uv, prevMouse, trailIntensity * 0.8, iOpacity);
          }
        }
        
        gl_FragColor = vec4(color * iOpacity, 1.0);
      }
    `;

		const FilmGrainShader = {
			uniforms: {
				tDiffuse: { value: null },
				iTime: { value: 0 },
				intensity: { value: 0.075 },
			},
			vertexShader: baseVertexShader,
			fragmentShader: `
        uniform sampler2D tDiffuse; 
        uniform float iTime; 
        uniform float intensity; 
        varying vec2 vUv;
        float hash1(float n) { return fract(sin(n)*43758.5453); }
        void main() {
          vec4 color = texture2D(tDiffuse, vUv);
          float noise = hash1(vUv.x*1000.0 + vUv.y*2000.0 + iTime) * 2.0 - 1.0;
          color.rgb += noise * intensity * color.rgb;
          gl_FragColor = color;
        }
      `,
		};

		// Trail Setup
		const adjustedTrailLength = config.trailLength;
		const prevMousePositions = Array(adjustedTrailLength)
			.fill(0)
			.map(() => new THREE.Vector2(0.5, 0.5));

		const fluidMaterial = new THREE.ShaderMaterial({
			defines: {
				MAX_TRAIL_LENGTH: adjustedTrailLength,
			},
			uniforms: {
				iTime: { value: 0 },
				iResolution: { value: new THREE.Vector3() },
				iMouse: { value: new THREE.Vector2(0.5, 0.5) },
				iPrevMouse: { value: prevMousePositions.map((p) => p.clone()) },
				iOpacity: { value: 1.0 },
				iScale: { value: 1.0 },
			},
			vertexShader: baseVertexShader,
			fragmentShader: shaderPrologue + digitalShader + shaderEpilogue,
		});

		scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), fluidMaterial));

		// Post Processing
		const composer = new EffectComposer(renderer);
		composer.addPass(new RenderPass(scene, camera));

		const bloomPass = new UnrealBloomPass(new THREE.Vector2(), config.bloom.strength, config.bloom.radius, config.bloom.threshold);
		composer.addPass(bloomPass);

		const filmGrainPass = new ShaderPass(FilmGrainShader);
		filmGrainPass.uniforms.intensity.value = config.grainIntensity;
		composer.addPass(filmGrainPass);

		// Handlers
		const currentMouse = new THREE.Vector2(0.5, 0.5);
		const mouseVelocity = new THREE.Vector2(0, 0);
		let fadeOpacity = 1.0;

		const updateMousePosition = (clientX: number, clientY: number) => {
			const rect = container.getBoundingClientRect();
			// Map mouse relative to container
			const x = (clientX - rect.left) / rect.width;
			const y = 1.0 - (clientY - rect.top) / rect.height;

			mousePosition.set(x, y);
			isMouseMoving = true;
			lastMouseMoveTime = Date.now();
		};

		const onMouseMove = (e: MouseEvent) => {
			mouseRef.current = { x: e.clientX, y: e.clientY };
			updateMousePosition(e.clientX, e.clientY);
		};

		const onScroll = () => {
			if (mouseRef.current.x !== 0 && mouseRef.current.y !== 0) {
				updateMousePosition(mouseRef.current.x, mouseRef.current.y);
			}
		};

		// Attach event listener to window to track mouse outside the footer too,
		// or just container? The request says "track mouse moments".
		// Usually looks better if it reacts to mouse over the whole page but localized to footer coordinates,
		// or just mouse over footer.
		// Let's attach to window but calculate relative to container for the effect.
		window.addEventListener("mousemove", onMouseMove);
		window.addEventListener("scroll", onScroll);

		const resize = () => {
			const rect = container.getBoundingClientRect();
			const width = rect.width;
			const height = rect.height;

			renderer.setSize(width, height);
			// Account for pixel ratio in composer and uniforms to match screen
			composer.setSize(width * pixelRatio, height * pixelRatio);
			fluidMaterial.uniforms.iResolution.value.set(width * pixelRatio, height * pixelRatio, 1);
			bloomPass.resolution.set(width * pixelRatio, height * pixelRatio);

			// Calculate scale similar to reference
			const baseSize = 600;
			const currentSize = Math.min(width, height);
			fluidMaterial.uniforms.iScale.value = Math.max(0.5, Math.min(2.0, currentSize / baseSize));
		};

		window.addEventListener("resize", resize);
		resize();

		// Animation Loop
		let animationId: number;
		const animate = () => {
			animationId = requestAnimationFrame(animate);

			const now = performance.now();
			const elapsedTime = now / 1000;
			const timeSinceLastMove = Date.now() - lastMouseMoveTime;

			// Mouse Physics
			if (isMouseMoving) {
				mouseVelocity.set(mousePosition.x - currentMouse.x, mousePosition.y - currentMouse.y);
				currentMouse.copy(mousePosition);
				fadeOpacity = 1.0;
			} else {
				mouseVelocity.multiplyScalar(config.inertia);
				if (mouseVelocity.lengthSq() > 0.000001) {
					currentMouse.add(mouseVelocity);
				}

				// Fade logic
				if (timeSinceLastMove > 500) {
					// Slow fade out if idle
					fadeOpacity = Math.max(0.2, fadeOpacity * 0.95); // Don't fade completely, keep it alive
				}
			}

			// Update Trails
			prevMousePositions.pop();
			prevMousePositions.unshift(currentMouse.clone());

			for (let i = 0; i < config.trailLength; i++) {
				if (fluidMaterial.uniforms.iPrevMouse.value[i]) {
					fluidMaterial.uniforms.iPrevMouse.value[i].copy(prevMousePositions[i]);
				}
			}

			// Update Uniforms
			fluidMaterial.uniforms.iMouse.value.copy(currentMouse);
			fluidMaterial.uniforms.iOpacity.value = fadeOpacity;
			fluidMaterial.uniforms.iTime.value = elapsedTime;
			filmGrainPass.uniforms.iTime.value = elapsedTime;

			composer.render();
			isMouseMoving = false;
		};
		animate();

		return () => {
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", resize);
			cancelAnimationFrame(animationId);

			if (container && renderer.domElement) {
				container.removeChild(renderer.domElement);
			}

			// Cleanup Three.js resources
			renderer.dispose();
			fluidMaterial.dispose();
			scene.clear();
		};
	}, []);

	return (
		<div
			ref={containerRef}
			className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
			style={{ zIndex: 0 }}
		/>
	);
}
