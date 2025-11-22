import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Leaf, Recycle, Droplets, Sun } from 'lucide-react';

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

      {/* Stats / Impact */}
      <section className="py-24 bg-bio-deep/5 border-y border-bio-deep/20">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
               <div>
                  <h3 className="text-6xl font-bold text-bio-primary mb-2">100%</h3>
                  <p className="text-bio-light text-lg font-medium">Compostable Materials</p>
                  <p className="text-bio-light/40 mt-2 text-sm">Certified home and industrial compostable</p>
               </div>
               <div>
                  <h3 className="text-6xl font-bold text-bio-accent mb-2">0%</h3>
                  <p className="text-bio-light text-lg font-medium">Virgin Plastic</p>
                  <p className="text-bio-light/40 mt-2 text-sm">We never use petroleum-based plastics</p>
               </div>
               <div>
                  <h3 className="text-6xl font-bold text-bio-light mb-2">50k+</h3>
                  <p className="text-bio-light text-lg font-medium">Trees Planted</p>
                  <p className="text-bio-light/40 mt-2 text-sm">One tree for every order placed</p>
               </div>
            </div>
         </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-bio-light mb-6">Designed to <span className="text-bio-primary">Disappear</span></h2>
                  <p className="text-bio-light/60 text-lg mb-8 leading-relaxed">
                     Crafted from 100% natural plant fibers, our products offer an eco-friendly solution for everyday needs. By utilizing renewable materials like corn, beets, and wood pulp, we ensure every package returns to the earth, turning into nutrient-rich soil.
                  </p>
                  
                  <div className="space-y-6">
                     <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-bio-primary/10 flex items-center justify-center text-bio-primary shrink-0">
                           <Leaf size={24} />
                        </div>
                        <div>
                           <h4 className="text-bio-light font-bold text-lg">Plant-Based</h4>
                           <p className="text-bio-light/50 text-sm">Made from rapidly renewable resources</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-bio-accent/10 flex items-center justify-center text-bio-accent shrink-0">
                           <Recycle size={24} />
                        </div>
                        <div>
                           <h4 className="text-bio-light font-bold text-lg">Circular Design</h4>
                           <p className="text-bio-light/50 text-sm">Closed-loop production lifecycle</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-bio-deep/30 flex items-center justify-center text-bio-light shrink-0">
                           <Droplets size={24} />
                        </div>
                        <div>
                           <h4 className="text-bio-light font-bold text-lg">Non-Toxic Inks</h4>
                           <p className="text-bio-light/50 text-sm">Water/soy-based inks that are safe for soil</p>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="relative h-[600px] rounded-3xl overflow-hidden bg-bio-deep/10 border border-bio-deep/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-bio-deep to-bio-dark opacity-50" />
                  {/* Abstract visualization of nature */}
                  <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-bio-primary/30 rounded-full blur-[80px]" />
                  <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-bio-accent/20 rounded-full blur-[100px]" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="text-center p-8 backdrop-blur-md bg-bio-dark/30 rounded-2xl border border-bio-light/10 max-w-xs">
                        <Sun size={48} className="text-bio-light mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-bio-light mb-2">Solar Powered</h3>
                        <p className="text-bio-light/60 text-sm">Our manufacturing facilities run on 100% renewable solar energy.</p>
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

