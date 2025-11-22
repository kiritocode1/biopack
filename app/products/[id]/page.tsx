import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check, Star, Truck, ShieldCheck, Package } from "lucide-react";
import Link from "next/link";

// Simulated database
const allProducts = [
	{
		id: 1,
		name: "Compostable Mailers",
		price: "$24.00",
		category: "Shipping",
		tag: "Best Seller",
		gradient: "from-bio-deep to-bio-primary",
		description: "Durable, water-resistant, and 100% compostable mailers for all your shipping needs. Made from cornstarch and PLA (polylactic acid) from fermented plant starch.",
		features: ["Water-resistant", "Tear-proof", "180-day compostable", "Soy-based inks"],
		specs: {
			Material: "Cornstarch + PLA + PBAT",
			Thickness: "2.5 mil",
			"Shelf Life": "12 months",
			Certification: "ASTM D6400",
		},
	},
	{
		id: 2,
		name: "Plant-Based Tape",
		price: "$12.50",
		category: "Accessories",
		tag: "New",
		gradient: "from-bio-primary to-bio-accent",
		description: "Strong adhesive tape made from renewable plant resources. Fully biodegradable cellulose film with natural rubber adhesive.",
		features: ["High tensile strength", "Silent unwind", "Zero plastic", "Natural adhesive"],
		specs: {
			Material: "Cellulose film",
			Adhesive: "Natural rubber",
			Width: "48mm",
			Length: "50m",
		},
	},
	{
		id: 3,
		name: "Recycled Boxes",
		price: "$36.00",
		category: "Shipping",
		tag: "Essential",
		gradient: "from-bio-dark to-bio-deep",
		description: "Sturdy shipping boxes made from 100% post-consumer recycled materials. Unbleached and printed with algae-based black ink.",
		features: ["Double-wall strength", "Easy-fold design", "Curbside recyclable", "FSC Certified"],
		specs: {
			Material: "100% Recycled Corrugated",
			Flute: "B-Flute",
			ECT: "32 lbs",
			Print: "Algae Ink",
		},
	},
	{
		id: 4,
		name: "Biodegradable Peanuts",
		price: "$18.00",
		category: "Fillers",
		tag: "Eco-Fill",
		gradient: "from-bio-accent to-bio-light",
		description: "Dissolvable packing peanuts made from non-GMO cornstarch. Safe for the environment and washes away with water.",
		features: ["Static-free", "Non-toxic", "Dissolves in water", "Lightweight"],
		specs: {
			Material: "Non-GMO Cornstarch",
			Density: "0.8 lbs/ft³",
			Solubility: "Instant in water",
			Safety: "FDA Compliant",
		},
	},
	{
		id: 5,
		name: "Hemp Twine",
		price: "$8.00",
		category: "Accessories",
		tag: "Accessory",
		gradient: "from-bio-deep to-bio-accent",
		description: "Natural hemp fiber twine for secure and eco-friendly bundling. Strong, durable, and adds a rustic touch to your packages.",
		features: ["100% Natural Hemp", "Biodegradable", "High strength", "Polished finish"],
		specs: {
			Material: "Hemp Fiber",
			Diameter: "2mm",
			Load: "20 lbs break strength",
			Origin: "Sustainably farmed",
		},
	},
	{
		id: 6,
		name: "Kraft Paper Roll",
		price: "$45.00",
		category: "Wrapping",
		tag: "Service",
		gradient: "from-bio-primary to-bio-dark",
		description: "Heavy-duty kraft paper for wrapping and void fill. Recyclable and compostable, perfect for protecting fragile items.",
		features: ["Heavy-duty", "Recycled content", "Versatile use", "Paint-friendly"],
		specs: {
			Weight: "50# Kraft",
			"Recycled Content": "100%",
			Width: "24 inches",
			"Roll Length": "1000 ft",
		},
	},
];

// This is a Server Component
export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	const product = allProducts.find((p) => p.id === parseInt(id));

	if (!product) {
		return (
			<main className="bg-bio-dark min-h-screen flex flex-col items-center justify-center text-bio-light">
				<Navbar />
				<div className="text-center">
					<h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
					<Link
						href="/products"
						className="text-bio-primary hover:underline"
					>
						Back to Products
					</Link>
				</div>
			</main>
		);
	}

	return (
		<main className="bg-bio-dark min-h-screen selection:bg-bio-primary selection:text-bio-dark">
			<Navbar />

			<div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
				{/* Breadcrumb */}
				<div className="flex items-center gap-2 text-bio-light/40 text-sm mb-12">
					<Link
						href="/products"
						className="hover:text-bio-primary transition-colors"
					>
						Products
					</Link>
					<ArrowRight size={12} />
					<span className="text-bio-light">{product.name}</span>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
					{/* Product Image Area */}
					<div className="relative aspect-square rounded-3xl overflow-hidden bg-bio-deep/10 border border-bio-deep/20 group">
						<div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-20`} />

						<div className="absolute inset-0 flex items-center justify-center">
							<div className={`w-64 h-64 rounded-full bg-gradient-to-tr ${product.gradient} blur-3xl opacity-30 group-hover:scale-110 transition-transform duration-1000`} />
							<div className="relative z-10 w-80 h-80 bg-bio-deep/20 backdrop-blur-md rounded-2xl border border-bio-light/10 flex items-center justify-center shadow-2xl">
								<div className="text-bio-light/20 font-bold text-8xl select-none">BP</div>
							</div>
						</div>

						<div className="absolute top-6 left-6">
							<span className="px-4 py-2 rounded-full text-sm font-medium bg-bio-light/10 text-bio-light backdrop-blur-sm border border-bio-light/10">{product.tag}</span>
						</div>
					</div>

					{/* Product Details */}
					<div>
						<h1 className="text-5xl md:text-6xl font-bold text-bio-light mb-4 tracking-tight">{product.name}</h1>
						<div className="flex items-center gap-4 mb-8">
							<span className="text-3xl font-medium text-bio-primary">{product.price}</span>
							<div className="flex gap-1">
								{[1, 2, 3, 4, 5].map((i) => (
									<Star
										key={i}
										size={16}
										className="fill-bio-accent text-bio-accent"
									/>
								))}
								<span className="text-bio-light/40 text-sm ml-2">(128 Reviews)</span>
							</div>
						</div>

						<div className="prose prose-invert prose-lg text-bio-light/70 mb-10">
							<p>{product.description}</p>
						</div>

						{/* Features */}
						<div className="grid grid-cols-2 gap-4 mb-10">
							{product.features.map((feature, i) => (
								<div
									key={i}
									className="flex items-center gap-3 text-bio-light/80"
								>
									<div className="w-6 h-6 rounded-full bg-bio-primary/20 flex items-center justify-center text-bio-primary shrink-0">
										<Check
											size={12}
											strokeWidth={3}
										/>
									</div>
									<span className="text-sm font-medium">{feature}</span>
								</div>
							))}
						</div>

						{/* Specs */}
						<div className="bg-bio-light/5 rounded-2xl p-6 border border-bio-light/10 mb-10">
							<h3 className="text-bio-light font-bold mb-4">Technical Specifications</h3>
							<div className="space-y-3">
								{Object.entries(product.specs).map(([key, value]) => (
									<div
										key={key}
										className="flex justify-between text-sm border-b border-bio-light/5 pb-2 last:border-0 last:pb-0"
									>
										<span className="text-bio-light/40">{key}</span>
										<span className="text-bio-light">{value}</span>
									</div>
								))}
							</div>
						</div>

						{/* Actions */}
						<div className="flex gap-4">
							<button className="flex-1 bg-bio-primary text-bio-dark font-bold py-4 rounded-full hover:bg-bio-accent transition-all flex items-center justify-center gap-2">
								Add to Cart <Package size={20} />
							</button>
							<button className="px-6 py-4 rounded-full border border-bio-light/20 text-bio-light font-bold hover:bg-bio-light/5 transition-all">
								<Truck size={20} />
							</button>
							<button className="px-6 py-4 rounded-full border border-bio-light/20 text-bio-light font-bold hover:bg-bio-light/5 transition-all">
								<ShieldCheck size={20} />
							</button>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</main>
	);
}
