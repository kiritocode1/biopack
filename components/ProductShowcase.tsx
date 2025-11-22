import { ArrowUpRight, Package, Truck, ShieldCheck } from "lucide-react";
import Link from "next/link";

const products = [
	{
		id: 1,
		name: "Compostable Mailers",
		price: "$24.00",
		tag: "Best Seller",
		gradient: "from-bio-deep to-bio-primary",
		span: "col-span-1 md:col-span-2 lg:col-span-1",
		height: "h-[400px]",
	},
	{
		id: 2,
		name: "Plant-Based Tape",
		price: "$12.50",
		tag: "New",
		gradient: "from-bio-primary to-bio-accent",
		span: "col-span-1",
		height: "h-[400px]",
	},
	{
		id: 3,
		name: "Recycled Boxes",
		price: "$36.00",
		tag: "Essential",
		gradient: "from-bio-dark to-bio-deep",
		span: "col-span-1",
		height: "h-[400px]",
	},
	// Bento Grid items below
	{
		id: 4,
		name: "Biodegradable Peanuts",
		price: "$18.00",
		tag: "Eco-Fill",
		gradient: "from-bio-accent/20 to-bio-primary/20",
		span: "col-span-1 md:col-span-2",
		height: "h-[300px]",
		icon: (
			<Package
				className="text-bio-primary"
				size={32}
			/>
		),
	},
	{
		id: 5,
		name: "Hemp Twine",
		price: "$8.00",
		tag: "Accessory",
		gradient: "from-bio-deep/40 to-bio-dark",
		span: "col-span-1",
		height: "h-[300px]",
		icon: (
			<ShieldCheck
				className="text-bio-accent"
				size={32}
			/>
		),
	},
	{
		id: 6,
		name: "Custom Branding",
		price: "Custom",
		tag: "Service",
		gradient: "from-bio-primary/30 to-bio-light/10",
		span: "col-span-1 md:col-span-3",
		height: "h-[250px]",
		isSpecial: true,
		icon: (
			<Truck
				className="text-bio-light"
				size={32}
			/>
		),
	},
];

export default function ProductShowcase() {
	return (
		<section className="py-32 bg-bio-dark relative selection:bg-bio-primary selection:text-bio-dark">
			<div className="max-w-7xl mx-auto px-6">
				<div className="flex justify-between items-end mb-16">
					<div>
						<h2 className="text-4xl md:text-5xl font-bold text-bio-light mb-4">
							Featured <span className="text-bio-primary">Solutions</span>
						</h2>
						<p className="text-bio-light/60 max-w-md">
							Crafted from 100% natural plant fibers. Our eco-friendly solutions are designed for the modern commerce era, utilizing renewable materials to meet your everyday needs.
						</p>
					</div>
					<button className="hidden md:flex items-center gap-2 text-bio-accent hover:text-bio-light transition-colors">
						View Catalog <ArrowUpRight size={20} />
					</button>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{products.map((product) => (
						<Link
							href={`/products/${product.id}`}
							key={product.id}
							className={`group relative cursor-pointer rounded-3xl overflow-hidden border border-bio-light/10 bg-bio-light/5 backdrop-blur-sm transition-all hover:border-bio-primary/30 hover:shadow-[0_0_30px_-10px_rgba(53,140,132,0.3)] ${product.span} ${product.height}`}
						>
							{/* Background Gradient/Image */}
							<div className={`absolute inset-0 bg-linear-to-br ${product.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

							{/* Content Layout */}
							<div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
								<div className="flex justify-between items-start">
									<span className="px-3 py-1 rounded-full text-xs font-medium bg-bio-light/10 text-bio-light backdrop-blur-sm border border-bio-light/10">{product.tag}</span>

									{product.isSpecial ? (
										<div className="flex items-center gap-2 text-bio-light/60 text-sm">
											<span>Learn more</span> <ArrowUpRight size={16} />
										</div>
									) : (
										<button className="w-10 h-10 rounded-full bg-bio-light/10 border border-bio-light/10 flex items-center justify-center text-bio-light group-hover:bg-bio-primary group-hover:text-bio-dark transition-all">
											<ArrowUpRight size={18} />
										</button>
									)}
								</div>

								{/* Center Visual for Bento items */}
								{product.id > 3 && (
									<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 group-hover:scale-110 transition-transform duration-500">{product.icon}</div>
								)}

								{/* Bottom Info */}
								<div className={`${product.isSpecial ? "flex items-end justify-between w-full" : ""}`}>
									<div>
										<h3 className={`font-bold text-bio-light mb-1 group-hover:text-bio-primary transition-colors ${product.isSpecial ? "text-3xl" : "text-xl"}`}>{product.name}</h3>
										<p className="text-bio-light/60">{product.isSpecial ? "Tailored packaging for your unique brand identity." : `Starting at ${product.price}`}</p>
									</div>

									{product.isSpecial && <button className="px-6 py-3 rounded-full bg-bio-primary text-bio-dark font-bold hover:bg-bio-accent transition-colors">Get a Quote</button>}
								</div>
							</div>

							{/* Decorative Elements for first 3 items */}
							{product.id <= 3 && (
								<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
									<div className={`w-32 h-32 rounded-full bg-linear-to-tr ${product.gradient} blur-2xl opacity-20 group-hover:scale-150 transition-transform duration-700`} />
								</div>
							)}
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
