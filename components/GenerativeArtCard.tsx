import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import Sketch to disable SSR, as p5.js relies on window
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
	ssr: false,
});

export default function GenerativeArtCard() {
	// Theme colors converted to RGB for p5.js
	// Primary Green: #358C84 -> rgb(53, 140, 132)
	const primaryColor = [53, 140, 132];
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (containerRef.current) {
			setDimensions({
				width: containerRef.current.offsetWidth,
				height: containerRef.current.offsetHeight,
			});
		}

		const handleResize = () => {
			if (containerRef.current) {
				setDimensions({
					width: containerRef.current.offsetWidth,
					height: containerRef.current.offsetHeight,
				});
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const setup = (p5: any, canvasParentRef: Element) => {
		p5.createCanvas(dimensions.width || p5.windowWidth, dimensions.height || p5.windowHeight).parent(canvasParentRef);
		p5.background(5, 14, 5); // Matches bg-bio-dark (#050E05)
	};

	const draw = (p5: any) => {
		// Semi-transparent background for trail effect
		p5.background(5, 14, 5, 25);

		// Center drawing based on current canvas size
		p5.translate(p5.width / 2, p5.height / 2);

		p5.noFill();
		// Use our theme green with low opacity
		p5.stroke(primaryColor[0], primaryColor[1], primaryColor[2], 50); // Increased opacity slightly for visibility
		p5.strokeWeight(1);

		const time = p5.frameCount * 0.008;
		const numLines = 80;
		const numPoints = 200;

		for (let i = 0; i < numLines; i++) {
			const linePhase = (i / numLines) * p5.TWO_PI;

			// Draw Left Side
			p5.beginShape();
			for (let j = 0; j <= numPoints; j++) {
				const pointPhase = j / numPoints;
				// Scale height based on canvas height
				const y = p5.map(pointPhase, 0, 1, -p5.height / 2.5, p5.height / 2.5);

				const envelope = p5.sin(pointPhase * p5.PI);
				const wave1 = p5.sin(time + linePhase) * 60;
				const wave2 = p5.sin(pointPhase * 8 + time * 2) * 40;
				const centerComplexity = p5.pow(p5.cos(pointPhase * p5.PI - p5.HALF_PI), 2) * 100;
				const wave3 = p5.cos(linePhase * 4 - time) * centerComplexity;

				// Multiply by envelope to taper at ends
				const x = envelope * (wave1 + wave2 + wave3 + 60);

				p5.vertex(-x, y);
			}
			p5.endShape();

			// Draw Right Side (Mirrored)
			p5.beginShape();
			for (let j = 0; j <= numPoints; j++) {
				const pointPhase = j / numPoints;
				const y = p5.map(pointPhase, 0, 1, -p5.height / 2.5, p5.height / 2.5);

				const envelope = p5.sin(pointPhase * p5.PI);
				const wave1 = p5.sin(time + linePhase) * 60;
				const wave2 = p5.sin(pointPhase * 8 + time * 2) * 40;
				const centerComplexity = p5.pow(p5.cos(pointPhase * p5.PI - p5.HALF_PI), 2) * 100;
				const wave3 = p5.cos(linePhase * 4 - time) * centerComplexity;

				const x = envelope * (wave1 + wave2 + wave3 + 60);

				p5.vertex(x, y);
			}
			p5.endShape();
		}
	};

	const windowResized = (p5: any) => {
		if (containerRef.current) {
			p5.resizeCanvas(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
		}
	};

	return (
		<div
			ref={containerRef}
			className="w-full h-full overflow-hidden relative"
		>
			{/* P5 Sketch */}
			{dimensions.width > 0 && (
				<Sketch
					setup={setup}
					draw={draw}
					windowResized={windowResized}
				/>
			)}
		</div>
	);
}
