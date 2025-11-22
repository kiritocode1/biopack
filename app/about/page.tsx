import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-bio-dark min-h-screen selection:bg-bio-primary selection:text-bio-dark">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-bio-deep/20 via-bio-dark to-bio-dark -z-10" />
        
        <h1 className="text-6xl md:text-9xl font-black text-bio-light tracking-tighter mb-8 opacity-90">
          BIO<span className="text-bio-primary">PACK</span>
        </h1>
        <p className="text-2xl text-bio-light/60 max-w-2xl mx-auto">
          We are a collective of designers, engineers, and environmentalists obsessed with solving the packaging problem.
        </p>
      </section>

      {/* Story */}
      <section className="py-24 px-6 bg-bio-light/5">
        <div className="max-w-4xl mx-auto">
           <h2 className="text-3xl font-bold text-bio-light mb-8 border-l-4 border-bio-primary pl-6">The Story</h2>
           <div className="prose prose-invert prose-lg max-w-none text-bio-light/70">
             <p className="mb-6">
               It started with a simple observation: why does a product used for 3 days last for 300 years in a landfill? The disconnect between the lifespan of packaging and its material durability was a design flaw we couldn't ignore.
             </p>
             <p className="mb-6">
               In 2023, we set out to engineer materials that perform like plastic but behave like plants. After years of R&D, we developed our proprietary bio-polymers derived from agricultural waste.
             </p>
             <p>
               Today, BIOPACK is trusted by over 10,000 brands worldwide who share our vision. We're not just selling boxes; we're selling a promise to the future. A promise that convenience doesn't have to cost the Earth.
             </p>
           </div>
        </div>
      </section>

      {/* Team / Values */}
      <section className="py-32 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
               <div>
                 <h2 className="text-4xl font-bold text-bio-light mb-12">Our Values</h2>
                 <div className="space-y-12">
                    <div>
                       <h3 className="text-2xl font-bold text-bio-primary mb-2">01. Radical Transparency</h3>
                       <p className="text-bio-light/60">We share everything. Our supply chain, our ingredients, and our impact reports are open for all to see.</p>
                    </div>
                    <div>
                       <h3 className="text-2xl font-bold text-bio-accent mb-2">02. Design First</h3>
                       <p className="text-bio-light/60">Sustainability shouldn't be ugly. We prioritize aesthetics and user experience in every product we create.</p>
                    </div>
                    <div>
                       <h3 className="text-2xl font-bold text-bio-light mb-2">03. Nature as Mentor</h3>
                       <p className="text-bio-light/60">We look to biology for design solutions. Nature has had 3.8 billion years of R&D; we're just catching up.</p>
                    </div>
                 </div>
               </div>
               
               <div className="bg-bio-deep/10 rounded-3xl p-12 border border-bio-deep/20 flex flex-col justify-center items-center text-center">
                  <h3 className="text-3xl font-bold text-bio-light mb-6">Join the movement</h3>
                  <p className="text-bio-light/60 mb-8 max-w-md">
                    Ready to switch your business to sustainable packaging? Let's talk about custom solutions for your brand.
                  </p>
                  <button className="px-8 py-4 rounded-full bg-bio-primary text-bio-dark font-bold text-lg hover:bg-bio-accent transition-all w-full sm:w-auto">
                    Get in Touch
                  </button>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}

