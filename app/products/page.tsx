import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowUpRight, Filter, SlidersHorizontal, CheckCircle, ShieldCheck, Star, Zap, Truck, Package, Sprout } from 'lucide-react';

const allProducts = [
  {
    id: 1,
    name: "Grocery Bags",
    price: "Custom Quote",
    category: "Retail",
    gradient: "from-bio-deep to-bio-primary",
    description: "Certified compostable grocery bags. Strong, durable, and perfect for daily use. CPCB approved."
  },
  {
    id: 2,
    name: "Carry Bags",
    price: "Custom Quote",
    category: "Everyday",
    gradient: "from-bio-primary to-bio-accent",
    description: "Eco-friendly carry bags made from plant-based materials. Tear-resistant and reliable."
  },
  {
    id: 3,
    name: "Garbage Bags",
    price: "Custom Quote",
    category: "Waste Management",
    gradient: "from-bio-dark to-bio-deep",
    description: "Green waste collection bags. Ideal for wet waste and home composting. 100% biodegradable."
  },
  {
    id: 4,
    name: "E-commerce Mailers",
    price: "Custom Quote",
    category: "Shipping",
    gradient: "from-bio-accent to-bio-light",
    description: "Durable packaging bags for online retail. Secure, waterproof, and compostable."
  },
  {
    id: 5,
    name: "Shopping Bags",
    price: "Custom Quote",
    category: "Retail",
    gradient: "from-bio-deep to-bio-accent",
    description: "Premium shopping bags for brands. Customizable with your logo and certificate number."
  },
  {
    id: 6,
    name: "Mulch Films",
    price: "Custom Quote",
    category: "Agriculture",
    gradient: "from-bio-primary to-bio-dark",
    description: "Biodegradable mulch films for agriculture. Decomposes in soil, enriching it."
  },
  {
    id: 7,
    name: "Food Packaging Liners",
    price: "Custom Quote",
    category: "Food Service",
    gradient: "from-bio-accent to-bio-primary",
    description: "Safe, non-toxic liners for food packaging. Made from corn starch and PLA."
  }
];

export default function ProductsPage() {
  return (
    <main className="bg-bio-dark min-h-screen selection:bg-bio-primary selection:text-bio-dark">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-12 px-6 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bio-primary/10 rounded-full blur-[120px] -z-10" />
         <div className="max-w-7xl mx-auto">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-bio-primary/30 bg-bio-primary/10 backdrop-blur-sm">
              <span className="text-bio-accent text-sm font-medium tracking-wide uppercase">Our Product</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-bio-light mb-6">Plant-Based <span className="text-bio-primary">Solutions</span></h1>
            <p className="text-xl text-bio-light/60 max-w-3xl mb-8">
              Our company manufactures certified compostable bags, made from plant-based materials such as 
              <span className="text-bio-accent font-medium"> Corn starch, PLA + PBAT, and other biodegradable biopolymers.</span>
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-bio-light/80">
                <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-bio-light/5 border border-bio-light/10">
                    <CheckCircle size={14} className="text-bio-primary" /> IS/ISO 17088 Compliant
                </span>
                <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-bio-light/5 border border-bio-light/10">
                    <CheckCircle size={14} className="text-bio-primary" /> CPCB Approved
                </span>
            </div>
         </div>
      </section>

      {/* Filters & Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Toolbar */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 py-6 border-y border-bio-deep/20">
             <div className="flex gap-4 mb-4 md:mb-0">
                <button className="flex items-center gap-2 text-bio-light bg-bio-deep/20 px-4 py-2 rounded-full border border-bio-deep/30 hover:bg-bio-deep/40 transition-all">
                   <Filter size={16} /> Filter
                </button>
                <button className="flex items-center gap-2 text-bio-light bg-bio-deep/20 px-4 py-2 rounded-full border border-bio-deep/30 hover:bg-bio-deep/40 transition-all">
                   <SlidersHorizontal size={16} /> Sort
                </button>
             </div>
             <p className="text-bio-light/40 text-sm">Showing {allProducts.length} products</p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((product) => (
              <Link href={`/products/${product.id}`} key={product.id} className="group relative cursor-pointer">
                <div className="aspect-square rounded-2xl overflow-hidden bg-bio-deep/10 border border-bio-deep/20 mb-6 relative">
                   <div className={`absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br ${product.gradient}`} />
                   
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-32 h-32 rounded-full bg-gradient-to-tr ${product.gradient} blur-2xl opacity-40 group-hover:scale-150 transition-transform duration-700`} />
                      <div className="relative z-10 w-48 h-48 bg-bio-deep/20 backdrop-blur-md rounded-xl border border-bio-light/10 flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-500 shadow-2xl">
                         {/* Placeholder Icon based on category if needed, keeping generic BP for now or use Package icon */}
                         <Package size={64} className="text-bio-light/40" />
                      </div>
                   </div>

                   <div className="absolute top-4 left-4">
                     <span className="px-3 py-1 rounded-full text-xs font-medium bg-bio-light/10 text-bio-light backdrop-blur-sm border border-bio-light/10">
                       {product.category}
                     </span>
                   </div>
                   
                   <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-bio-primary text-bio-dark flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                      <ArrowUpRight size={20} />
                   </button>
                </div>
                
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-medium text-bio-light group-hover:text-bio-primary transition-colors">{product.name}</h3>
                    <span className="text-bio-accent font-medium text-sm">{product.price}</span>
                  </div>
                  <p className="text-bio-light/40 text-sm line-clamp-2">{product.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Product is the Best */}
      <section className="py-24 px-6 bg-bio-deep/5 border-t border-bio-deep/20">
          <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold text-bio-light mb-6">Why Choose <span className="text-bio-primary">Biopack?</span></h2>
                  <p className="text-bio-light/60 max-w-2xl mx-auto">We don&apos;t just make bags; we engineer trust, quality, and sustainability into every product.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* High Quality */}
                  <div className="bg-bio-dark p-8 rounded-3xl border border-bio-light/10 hover:border-bio-primary/50 transition-all">
                      <div className="w-12 h-12 bg-bio-primary/10 rounded-xl flex items-center justify-center text-bio-primary mb-6">
                          <Star size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-bio-light mb-4">Unmatched Quality</h3>
                      <ul className="space-y-2 text-bio-light/60 text-sm">
                          <li className="flex gap-2"><CheckCircle size={16} className="text-bio-primary shrink-0" /> Strong, durable, tear-resistant</li>
                          <li className="flex gap-2"><CheckCircle size={16} className="text-bio-primary shrink-0" /> Premium-grade raw materials</li>
                      </ul>
                  </div>

                  {/* Certifications */}
                  <div className="bg-bio-dark p-8 rounded-3xl border border-bio-light/10 hover:border-bio-primary/50 transition-all">
                      <div className="w-12 h-12 bg-bio-accent/10 rounded-xl flex items-center justify-center text-bio-accent mb-6">
                          <ShieldCheck size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-bio-light mb-4">Certified Trust</h3>
                      <ul className="space-y-2 text-bio-light/60 text-sm">
                          <li className="flex gap-2"><CheckCircle size={16} className="text-bio-accent shrink-0" /> CPCB Approved</li>
                          <li className="flex gap-2"><CheckCircle size={16} className="text-bio-accent shrink-0" /> IS/ISO 17088 Standard</li>
                      </ul>
                  </div>

                  {/* Branding */}
                  <div className="bg-bio-dark p-8 rounded-3xl border border-bio-light/10 hover:border-bio-primary/50 transition-all">
                      <div className="w-12 h-12 bg-bio-deep/30 rounded-xl flex items-center justify-center text-bio-light mb-6">
                          <Package size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-bio-light mb-4">Professional Branding</h3>
                      <ul className="space-y-2 text-bio-light/60 text-sm">
                          <li className="flex gap-2"><CheckCircle size={16} className="text-bio-light shrink-0" /> Proper printing with certificate #</li>
                          <li className="flex gap-2"><CheckCircle size={16} className="text-bio-light shrink-0" /> Eco-friendly design & packaging</li>
                      </ul>
                  </div>

                  {/* Customer Trust */}
                  <div className="bg-bio-dark p-8 rounded-3xl border border-bio-light/10 hover:border-bio-primary/50 transition-all">
                      <div className="w-12 h-12 bg-bio-light/10 rounded-xl flex items-center justify-center text-bio-light mb-6">
                          <Truck size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-bio-light mb-4">Customer First</h3>
                      <ul className="space-y-2 text-bio-light/60 text-sm">
                          <li className="flex gap-2"><CheckCircle size={16} className="text-bio-light shrink-0" /> Consistent supply chain</li>
                          <li className="flex gap-2"><CheckCircle size={16} className="text-bio-light shrink-0" /> Competitive pricing</li>
                          <li className="flex gap-2"><CheckCircle size={16} className="text-bio-light shrink-0" /> Reliable after-sales service</li>
                      </ul>
                  </div>

                   {/* Innovation */}
                   <div className="bg-bio-dark p-8 rounded-3xl border border-bio-light/10 hover:border-bio-primary/50 transition-all md:col-span-2 lg:col-span-2">
                      <div className="w-12 h-12 bg-bio-primary/10 rounded-xl flex items-center justify-center text-bio-primary mb-6">
                          <Zap size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-bio-light mb-4">Constant Innovation</h3>
                      <p className="text-bio-light/60 mb-4">We work across diverse industries including retail, hotels, agriculture, and waste management to develop new eco-friendly solutions.</p>
                      <div className="flex flex-wrap gap-3">
                          <span className="px-3 py-1 rounded-full bg-bio-light/5 border border-bio-light/10 text-xs text-bio-light/80">Retail</span>
                          <span className="px-3 py-1 rounded-full bg-bio-light/5 border border-bio-light/10 text-xs text-bio-light/80">Hospitality</span>
                          <span className="px-3 py-1 rounded-full bg-bio-light/5 border border-bio-light/10 text-xs text-bio-light/80">Agriculture</span>
                          <span className="px-3 py-1 rounded-full bg-bio-light/5 border border-bio-light/10 text-xs text-bio-light/80">Waste Management</span>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <Footer />
    </main>
  );
}
