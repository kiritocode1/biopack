"use client";

import { ArrowRight, Leaf, Globe, Recycle } from "lucide-react";
import Link from "next/link";
import GenerativeArtBackground from "./GenerativeArtBackground";
import GenerativeArtCard from "./GenerativeArtCard";

export default function Hero() {
	return (
		<section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 selection:bg-bio-accent selection:text-bio-dark">
			{/* Generative Art Background */}
			<GenerativeArtBackground />

			{/* Additional animated layers */}
			<div className="absolute inset-0 w-full h-full pointer-events-none">
				<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-bio-deep/20 rounded-full blur-[120px] animate-pulse" />
				<div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-bio-primary/10 rounded-full blur-[120px] animate-pulse delay-1000" />
			</div>

			<div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
				{/* Text Content */}
				<div className="text-left order-2 lg:order-1">
					<div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-bio-light/10 bg-bio-light/5 backdrop-blur-md">
						<span className="relative flex h-2 w-2">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bio-primary opacity-75"></span>
							<span className="relative inline-flex rounded-full h-2 w-2 bg-bio-primary"></span>
						</span>
						<span className="text-bio-light/80 text-xs font-medium tracking-widest uppercase">The Future of Packaging</span>
					</div>

					<h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-bio-light leading-[0.9]">
						BIOPACK 
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-bio-primary via-bio-accent to-bio-primary bg-[length:200%_auto] animate-bg-pan">.</span>
					</h1>

					<p className="text-xl md:text-2xl font-light text-bio-light/60 mb-10 max-w-xl leading-relaxed">
						&quot;Green choice for better future.&quot; <br />
						<span className="text-base text-bio-light/40 mt-2 block">
							Bio-engineered materials that return to the earth. 100% compostable, zero waste, and designed for the modern world.
						</span>
					</p>

					<div className="flex flex-wrap gap-4">
						<Link
							href="/products"
							className="group relative px-8 py-4 rounded-full bg-bio-primary text-bio-dark font-bold text-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(53,140,132,0.5)] hover:shadow-[0_0_60px_-15px_rgba(53,140,132,0.7)]"
						>
							<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
							<span className="relative flex items-center gap-2">
								Start Packaging <ArrowRight size={20} />
							</span>
						</Link>
						<Link
							href="/about"
							className="px-8 py-4 rounded-full border border-bio-light/20 hover:border-bio-primary/50 text-bio-light font-medium text-lg hover:bg-bio-light/5 transition-all backdrop-blur-sm"
						>
							Our Story
						</Link>
					</div>

					<div className="mt-16 flex flex-wrap items-center gap-8 text-bio-light/40 border-t border-bio-light/10 pt-8">
						<div className="flex items-center gap-3">
							<div className="p-2 rounded-full bg-bio-light/5">
								<Leaf size={16} />
							</div>
							<span className="text-sm font-mono">100% Organic</span>
						</div>
						<div className="flex items-center gap-3">
							<div className="p-2 rounded-full bg-bio-light/5">
								<Recycle size={16} />
							</div>
							<span className="text-sm font-mono">Biodegradable</span>
						</div>
						<div className="flex items-center gap-3">
							<div className="p-2 rounded-full bg-bio-light/5">
								<Globe size={16} />
							</div>
							<span className="text-sm font-mono">Global Shipping</span>
						</div>
					</div>
				</div>

				{/* Visual Element (Generative Art) */}
				<div className="relative h-[500px] lg:h-[600px] w-full order-1 lg:order-2 perspective-1000">
					<div className="absolute inset-0 p-1 transform transition-transform hover:scale-[1.02] duration-500">
						<GenerativeArtCard />
					</div>
				</div>
			</div>
		</section>
	);
}
