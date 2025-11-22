import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-bio-deep/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-bio-primary/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 text-center z-10">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-bio-primary/30 bg-bio-primary/10 backdrop-blur-sm">
          <span className="text-bio-accent text-sm font-medium tracking-wide uppercase">Eco-Friendly Packaging Solutions</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-bio-light to-bio-light/50">
          BIOPACK
        </h1>
        
        <p className="text-2xl md:text-4xl font-light text-bio-primary mb-12 max-w-3xl mx-auto leading-tight">
          "green choice for better future"
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 rounded-full bg-bio-primary text-bio-dark font-bold text-lg hover:bg-bio-accent transition-all hover:scale-105 flex items-center gap-2">
            Shop Collections <ArrowRight size={20} />
          </button>
          <button className="px-8 py-4 rounded-full border border-bio-deep/50 hover:border-bio-primary/50 text-bio-light font-medium text-lg hover:bg-bio-deep/10 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

