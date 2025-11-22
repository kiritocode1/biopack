import { ArrowUpRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Compostable Mailers",
    price: "$24.00",
    tag: "Best Seller",
    gradient: "from-bio-deep to-bio-primary"
  },
  {
    id: 2,
    name: "Plant-Based Tape",
    price: "$12.50",
    tag: "New",
    gradient: "from-bio-primary to-bio-accent"
  },
  {
    id: 3,
    name: "Recycled Boxes",
    price: "$36.00",
    tag: "Essential",
    gradient: "from-bio-dark to-bio-deep"
  }
];

export default function ProductShowcase() {
  return (
    <section className="py-32 bg-bio-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-bio-light mb-4">Featured <span className="text-bio-primary">Solutions</span></h2>
            <p className="text-bio-light/60 max-w-md">Sustainable packaging designed for the modern commerce era.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-bio-accent hover:text-bio-light transition-colors">
            View Catalog <ArrowUpRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative cursor-pointer">
              <div className="aspect-square rounded-2xl overflow-hidden bg-bio-deep/10 border border-bio-deep/20 mb-6 relative">
                 {/* Abstract Product Representation */}
                 <div className={`absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br ${product.gradient}`} />
                 
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-32 h-32 rounded-full bg-gradient-to-tr ${product.gradient} blur-2xl opacity-40 group-hover:scale-150 transition-transform duration-700`} />
                    <div className="relative z-10 w-48 h-48 bg-bio-deep/20 backdrop-blur-md rounded-xl border border-bio-light/10 flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-500 shadow-2xl">
                       <div className="text-bio-light/20 font-bold text-6xl">BP</div>
                    </div>
                 </div>

                 <div className="absolute top-4 left-4">
                   <span className="px-3 py-1 rounded-full text-xs font-medium bg-bio-light/10 text-bio-light backdrop-blur-sm border border-bio-light/10">
                     {product.tag}
                   </span>
                 </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-medium text-bio-light mb-1 group-hover:text-bio-primary transition-colors">{product.name}</h3>
                  <p className="text-bio-light/60">Starting at {product.price}</p>
                </div>
                <button className="w-10 h-10 rounded-full border border-bio-deep/30 flex items-center justify-center text-bio-light hover:bg-bio-primary hover:border-bio-primary hover:text-bio-dark transition-all">
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

