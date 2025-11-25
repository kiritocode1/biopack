import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Leaf, Recycle, Droplets, Sun, ShieldCheck, FileCheck, Globe } from 'lucide-react';

export default function SustainabilityPage() {
  return (
    <main className="bg-bio-dark min-h-screen selection:bg-bio-primary selection:text-bio-dark">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
         {/* Abstract Background */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-bio-deep/20 rounded-full blur-[150px] -z-10" />
         
         <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-bio-accent/30 bg-bio-accent/10 backdrop-blur-sm">
              <span className="text-bio-accent text-sm font-medium tracking-wide uppercase">Our Mission</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-bio-light mb-8 leading-tight">
              Leaving no trace <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-bio-primary to-bio-accent">behind.</span>
            </h1>
            <p className="text-xl md:text-2xl text-bio-light/60 max-w-3xl mx-auto leading-relaxed">
              We believe in a circular economy where packaging returns to the earth, nourishing it rather than polluting it.
            </p>
         </div>
      </section>

      {/* Contribution to Environment */}
      <section className="py-24 px-6 bg-bio-light/5">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-bio-light mb-6">Positive <span className="text-bio-primary">Impact</span></h2>
                <p className="text-bio-light/60 max-w-2xl mx-auto">How our products contribute to a healthier environment.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-bio-dark p-8 rounded-3xl border border-bio-light/10 hover:border-bio-primary/50 transition-all group">
                    <div className="w-12 h-12 bg-bio-primary/10 rounded-full flex items-center justify-center text-bio-primary mb-6 group-hover:scale-110 transition-transform">
                        <Leaf size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-bio-light mb-4">Reduces Plastic Pollution</h3>
                    <p className="text-bio-light/60">Compostable bags decompose within 90–180 days in composting conditions, unlike centuries for plastic.</p>
                </div>

                <div className="bg-bio-dark p-8 rounded-3xl border border-bio-light/10 hover:border-bio-primary/50 transition-all group">
                    <div className="w-12 h-12 bg-bio-accent/10 rounded-full flex items-center justify-center text-bio-accent mb-6 group-hover:scale-110 transition-transform">
                        <Droplets size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-bio-light mb-4">No Toxic Residue</h3>
                    <p className="text-bio-light/60">They leave behind biomass, water, and CO₂ — absolutely no microplastics or toxic chemicals.</p>
                </div>

                <div className="bg-bio-dark p-8 rounded-3xl border border-bio-light/10 hover:border-bio-primary/50 transition-all group">
                    <div className="w-12 h-12 bg-bio-deep/30 rounded-full flex items-center justify-center text-bio-light mb-6 group-hover:scale-110 transition-transform">
                        <Sun size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-bio-light mb-4">Renewable Resources</h3>
                    <p className="text-bio-light/60">Made from plant-based raw materials like corn starch, reducing reliance on fossil fuels.</p>
                </div>

                <div className="bg-bio-dark p-8 rounded-3xl border border-bio-light/10 hover:border-bio-primary/50 transition-all group">
                    <div className="w-12 h-12 bg-bio-light/10 rounded-full flex items-center justify-center text-bio-light mb-6 group-hover:scale-110 transition-transform">
                        <Recycle size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-bio-light mb-4">Supports Waste Segregation</h3>
                    <p className="text-bio-light/60">Green compostable bags are ideal for wet waste, improving compost quality and waste management efficiency.</p>
                </div>

                <div className="bg-bio-dark p-8 rounded-3xl border border-bio-light/10 hover:border-bio-primary/50 transition-all group">
                    <div className="w-12 h-12 bg-bio-primary/10 rounded-full flex items-center justify-center text-bio-primary mb-6 group-hover:scale-110 transition-transform">
                        <Globe size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-bio-light mb-4">Lower Carbon Footprint</h3>
                    <p className="text-bio-light/60">Production and disposal contribute significantly less CO₂ emissions compared to conventional plastic.</p>
                </div>

                 <div className="bg-bio-deep/10 p-8 rounded-3xl border border-bio-deep/20 flex flex-col justify-center items-center text-center">
                    <h3 className="text-2xl font-bold text-bio-light mb-2">Ready to Switch?</h3>
                    <p className="text-bio-light/60 mb-6 text-sm">Join the movement towards a sustainable future.</p>
                    <button className="px-6 py-2 rounded-full bg-bio-primary text-bio-dark font-bold hover:bg-bio-accent transition-all w-full">Get Certified Bags</button>
                </div>
            </div>
         </div>
      </section>

      {/* Certifications */}
      <section className="py-24 px-6 border-t border-bio-deep/20">
         <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                 <div>
                     <h2 className="text-4xl font-bold text-bio-light mb-6">Certified <span className="text-bio-primary">Excellence</span></h2>
                     <p className="text-bio-light/60 text-lg mb-8">
                         Our commitment to quality is backed by the highest industry standards. Every product we manufacture is rigorously tested and approved.
                     </p>
                     <div className="space-y-6">
                         <div className="flex gap-4 items-start">
                             <div className="mt-1">
                                 <ShieldCheck className="text-bio-accent" size={24} />
                             </div>
                             <div>
                                 <h4 className="text-xl font-bold text-bio-light">CPCB Approved</h4>
                                 <p className="text-bio-light/60">Authorized by the Central Pollution Control Board of India.</p>
                             </div>
                         </div>
                         <div className="flex gap-4 items-start">
                             <div className="mt-1">
                                 <FileCheck className="text-bio-accent" size={24} />
                             </div>
                             <div>
                                 <h4 className="text-xl font-bold text-bio-light">IS/ISO 17088 Compliant</h4>
                                 <p className="text-bio-light/60">Meets international standards for compostable plastics.</p>
                             </div>
                         </div>
                     </div>
                 </div>
                 
                 <div className="relative h-[400px] bg-bio-deep/5 rounded-3xl border border-bio-deep/20 flex items-center justify-center overflow-hidden p-8">
                      {/* Certificate Visual Placeholder */}
                      <div className="absolute inset-0 bg-gradient-to-br from-bio-deep/10 to-transparent opacity-50" />
                      <div className="relative z-10 bg-bio-light p-8 rounded-xl shadow-2xl max-w-sm w-full transform rotate-3 hover:rotate-0 transition-transform duration-500">
                          <div className="border-2 border-bio-deep/20 p-4 h-full flex flex-col items-center text-center">
                              <ShieldCheck size={48} className="text-bio-deep mb-4" />
                              <h3 className="text-bio-deep font-bold text-xl mb-2">Certificate of Compliance</h3>
                              <p className="text-bio-deep/60 text-xs mb-4">This certifies that BIOPACK products meet IS/ISO 17088 standards.</p>
                              <div className="w-full h-1 bg-bio-deep/10 rounded-full" />
                              <div className="mt-auto text-bio-deep/40 text-[10px] font-mono">LIC: BP-2025-CERT</div>
                          </div>
                      </div>
                 </div>
             </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
