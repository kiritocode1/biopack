import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight, Filter, SlidersHorizontal } from 'lucide-react';

const allProducts = [
  {
    id: 1,
    name: "Compostable Mailers",
    price: "$24.00",
    category: "Shipping",
    gradient: "from-bio-deep to-bio-primary",
    description: "Durable, water-resistant, and 100% compostable mailers for all your shipping needs."
  },
  {
    id: 2,
    name: "Plant-Based Tape",
    price: "$12.50",
    category: "Accessories",
    gradient: "from-bio-primary to-bio-accent",
    description: "Strong adhesive tape made from renewable plant resources. Fully biodegradable."
  },
  {
    id: 3,
    name: "Recycled Boxes",
    price: "$36.00",
    category: "Shipping",
    gradient: "from-bio-dark to-bio-deep",
    description: "Sturdy shipping boxes made from 100% post-consumer recycled materials."
  },
  {
    id: 4,
    name: "Biodegradable Peanuts",
    price: "$18.00",
    category: "Fillers",
    gradient: "from-bio-accent to-bio-light",
    description: "Dissolvable packing peanuts made from cornstarch. Safe for the environment."
  },
  {
    id: 5,
    name: "Hemp Twine",
    price: "$8.00",
    category: "Accessories",
    gradient: "from-bio-deep to-bio-accent",
    description: "Natural hemp fiber twine for secure and eco-friendly bundling."
  },
  {
    id: 6,
    name: "Kraft Paper Roll",
    price: "$45.00",
    category: "Wrapping",
    gradient: "from-bio-primary to-bio-dark",
    description: "Heavy-duty kraft paper for wrapping and void fill. Recyclable and compostable."
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
              <span className="text-bio-accent text-sm font-medium tracking-wide uppercase">Our Collection</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-bio-light mb-6">Sustainable <span className="text-bio-primary">Essentials</span></h1>
            <p className="text-xl text-bio-light/60 max-w-2xl">
              Everything you need to package your products responsibly. No plastic, no waste, just nature-backed solutions.
            </p>
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
              <div key={product.id} className="group relative cursor-pointer">
                <div className="aspect-square rounded-2xl overflow-hidden bg-bio-deep/10 border border-bio-deep/20 mb-6 relative">
                   <div className={`absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br ${product.gradient}`} />
                   
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-32 h-32 rounded-full bg-gradient-to-tr ${product.gradient} blur-2xl opacity-40 group-hover:scale-150 transition-transform duration-700`} />
                      <div className="relative z-10 w-48 h-48 bg-bio-deep/20 backdrop-blur-md rounded-xl border border-bio-light/10 flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-500 shadow-2xl">
                         <div className="text-bio-light/20 font-bold text-6xl">BP</div>
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
                    <span className="text-bio-accent font-medium">{product.price}</span>
                  </div>
                  <p className="text-bio-light/40 text-sm line-clamp-2">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

