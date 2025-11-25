import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Factory, Users, TrendingUp, Globe, Award, Leaf, ShieldCheck, Recycle } from "lucide-react";

export default function AboutPage() {
  return (
		<main className="bg-bio-dark min-h-screen selection:bg-bio-primary selection:text-bio-dark">
			<Navbar />

			{/* Header & Vision */}
			<section className="pt-40 pb-20 px-6 text-center relative overflow-hidden">
				<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-bio-deep/20 via-bio-dark to-bio-dark -z-10" />

				<div className="mb-12 flex justify-center">
					<Image 
						src="/logo.png" 
						alt="Biopack Logo" 
						width={600} 
						height={200} 
						className="h-32 md:h-64 w-auto object-contain"
						priority
					/>
				</div>
				
                <div className="max-w-4xl mx-auto mt-12 p-8 bg-bio-light/5 rounded-3xl border border-bio-light/10 backdrop-blur-sm">
                    <h2 className="text-bio-accent text-sm font-bold tracking-widest uppercase mb-4">Our Vision</h2>
                    <p className="text-2xl md:text-3xl font-medium text-bio-light leading-relaxed">
                        &quot;To create a cleaner, greener, and plastic-free future through high-quality, certified compostable products that protect the planet and support sustainable living.&quot;
                    </p>
                </div>
			</section>

			{/* Economy Contribution */}
			<section className="py-24 px-6">
				<div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-bio-light mb-8">Powering the <span className="text-bio-primary">Indian Economy</span></h2>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-bio-primary/10 flex items-center justify-center text-bio-primary shrink-0">
                                        <Factory size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-bio-light mb-2">Supports Make in India</h3>
                                        <p className="text-bio-light/60">We manufacture bags using Indian labour, machinery, and technology, fostering local industrial growth.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-bio-accent/10 flex items-center justify-center text-bio-accent shrink-0">
                                        <Users size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-bio-light mb-2">Creates Employment</h3>
                                        <p className="text-bio-light/60">Generating jobs across manufacturing, packaging, sales, and distribution sectors.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-bio-deep/30 flex items-center justify-center text-bio-light shrink-0">
                                        <TrendingUp size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-bio-light mb-2">Boosts MSME Growth</h3>
                                        <p className="text-bio-light/60">Helping expand the MSME sector across many states through compostable bag manufacturing units.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-bio-light/10 flex items-center justify-center text-bio-light shrink-0">
                                        <Globe size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-bio-light mb-2">Reduces Plastic Import</h3>
                                        <p className="text-bio-light/60">Compostable bags reduce India’s dependency on conventional plastic materials.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[600px] bg-bio-deep/5 rounded-3xl border border-bio-deep/20 overflow-hidden p-8 flex flex-col justify-center">
                             <div className="absolute inset-0 bg-gradient-to-br from-bio-deep/20 to-transparent opacity-50" />
                             <h3 className="relative z-10 text-2xl font-bold text-bio-light mb-6">Supporting Government Policies</h3>
                             <ul className="relative z-10 space-y-4">
                                <li className="flex items-center gap-3 text-bio-light/80 bg-bio-dark/40 p-4 rounded-xl border border-bio-light/5">
                                    <ShieldCheck className="text-bio-primary" size={20} /> Swachh Bharat Abhiyan
                                </li>
                                <li className="flex items-center gap-3 text-bio-light/80 bg-bio-dark/40 p-4 rounded-xl border border-bio-light/5">
                                    <ShieldCheck className="text-bio-primary" size={20} /> Plastic Ban Initiatives
                                </li>
                                <li className="flex items-center gap-3 text-bio-light/80 bg-bio-dark/40 p-4 rounded-xl border border-bio-light/5">
                                    <ShieldCheck className="text-bio-primary" size={20} /> Sustainable Development Goals
                                </li>
                             </ul>
                        </div>
                    </div>
				</div>
			</section>

            {/* Environmental Impact */}
            <section className="py-24 px-6 bg-bio-light/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-bio-light mb-6">Contribution to the <span className="text-bio-accent">Environment</span></h2>
                        <p className="text-xl text-bio-light/60 max-w-3xl mx-auto">
                            Our products are designed to return to the earth, leaving no trace behind.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-bio-dark p-8 rounded-3xl border border-bio-light/10 hover:border-bio-primary/50 transition-all group">
                            <div className="w-14 h-14 bg-bio-primary/10 rounded-full flex items-center justify-center text-bio-primary mb-6 group-hover:scale-110 transition-transform">
                                <Leaf size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-bio-light mb-4">Reduces Plastic Pollution</h3>
                            <p className="text-bio-light/60">Compostable bags decompose within 90–180 days in composting conditions.</p>
                        </div>
                        <div className="bg-bio-dark p-8 rounded-3xl border border-bio-light/10 hover:border-bio-primary/50 transition-all group">
                             <div className="w-14 h-14 bg-bio-accent/10 rounded-full flex items-center justify-center text-bio-accent mb-6 group-hover:scale-110 transition-transform">
                                <Recycle size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-bio-light mb-4">No Toxic Residue</h3>
                            <p className="text-bio-light/60">They leave behind biomass + water + CO₂, not microplastics.</p>
                        </div>
                        <div className="bg-bio-dark p-8 rounded-3xl border border-bio-light/10 hover:border-bio-primary/50 transition-all group">
                             <div className="w-14 h-14 bg-bio-deep/30 rounded-full flex items-center justify-center text-bio-light mb-6 group-hover:scale-110 transition-transform">
                                <Factory size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-bio-light mb-4">Lower Carbon Footprint</h3>
                            <p className="text-bio-light/60">Production and disposal contribute less CO₂ compared to conventional plastic.</p>
                        </div>
                         <div className="bg-bio-dark p-8 rounded-3xl border border-bio-light/10 hover:border-bio-primary/50 transition-all group">
                             <div className="w-14 h-14 bg-bio-light/10 rounded-full flex items-center justify-center text-bio-light mb-6 group-hover:scale-110 transition-transform">
                                <Leaf size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-bio-light mb-4">Renewable Resources</h3>
                            <p className="text-bio-light/60">Plant-based raw materials reduce use of fossil fuels.</p>
                        </div>
                         <div className="bg-bio-dark p-8 rounded-3xl border border-bio-light/10 hover:border-bio-primary/50 transition-all group">
                             <div className="w-14 h-14 bg-bio-primary/10 rounded-full flex items-center justify-center text-bio-primary mb-6 group-hover:scale-110 transition-transform">
                                <Recycle size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-bio-light mb-4">Supports Waste Segregation</h3>
                            <p className="text-bio-light/60">Green compostable bags are ideal for wet waste, improving compost quality.</p>
                        </div>
                        <div className="bg-bio-dark p-8 rounded-3xl border border-bio-light/10 hover:border-bio-primary/50 transition-all group flex flex-col justify-center items-center text-center">
                             <Award size={48} className="text-bio-accent mb-4" />
                             <h3 className="text-xl font-bold text-bio-light mb-2">Certified Quality</h3>
                             <p className="text-bio-light/60">IS/ISO 17088 & CPCB Approved</p>
                        </div>
                    </div>
                </div>
            </section>

			<Footer />
		</main>
  );
}
