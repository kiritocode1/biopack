"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

const FooterBackground = dynamic(() => import("./FooterBackground"), { ssr: false });

export default function Footer() {
	return (
		<footer className="bg-bio-dark pt-24 pb-0 border-t border-bio-deep/20 relative overflow-hidden flex flex-col">
			<FooterBackground />
			<div className="max-w-7xl mx-auto px-6 w-full relative z-10 mb-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
					<div className="col-span-1 md:col-span-1">
						<h3 className="text-xl font-bold text-bio-light mb-6">
							BIOPACK<span className="text-bio-primary">.</span>
						</h3>
						<p className="text-bio-light/60 mb-6">Reimagining packaging for a sustainable world. Zero waste, 100% compostable.</p>
					</div>

					<div>
						<h4 className="font-medium text-bio-light mb-6">Platform</h4>
						<ul className="space-y-4 text-sm text-bio-light/60">
							<li>
								<Link
									href="#"
									className="hover:text-bio-accent transition-colors"
								>
									Marketplace
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="hover:text-bio-accent transition-colors"
								>
									Solutions
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="hover:text-bio-accent transition-colors"
								>
									Enterprise
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="hover:text-bio-accent transition-colors"
								>
									Pricing
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-medium text-bio-light mb-6">Company</h4>
						<ul className="space-y-4 text-sm text-bio-light/60">
							<li>
								<Link
									href="#"
									className="hover:text-bio-accent transition-colors"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="hover:text-bio-accent transition-colors"
								>
									Sustainability Report
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="hover:text-bio-accent transition-colors"
								>
									Careers
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="hover:text-bio-accent transition-colors"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-medium text-bio-light mb-6">Connect</h4>
						<ul className="space-y-4 text-sm text-bio-light/60">
							<li>
								<Link
									href="#"
									className="hover:text-bio-accent transition-colors"
								>
									Twitter / X
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="hover:text-bio-accent transition-colors"
								>
									Instagram
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="hover:text-bio-accent transition-colors"
								>
									LinkedIn
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-bio-deep/20">
					<p className="text-sm text-bio-light/40">© 2025 BIOPACK Inc. All rights reserved.</p>
					<div className="flex gap-6 mt-4 md:mt-0 text-sm text-bio-light/40">
						<Link
							href="#"
							className="hover:text-bio-light"
						>
							Privacy
						</Link>
						<Link
							href="#"
							className="hover:text-bio-light"
						>
							Terms
						</Link>
					</div>
				</div>
			</div>

			{/* Huge Animated Nature Typography */}
			<div className="w-full overflow-hidden relative -mb-4 sm:-mb-8 md:-mb-12">
				<h1 className="text-[18vw] font-black leading-[0.8] text-center tracking-tighter select-none">
					<span className="bg-[url('/nature.png')] bg-cover text-transparent bg-clip-text animate-bg-pan bg-center opacity-100 block pb-4">BIOPACK</span>
				</h1>
			</div>
		</footer>
	);
}
