import Link from "next/link";
import { ShoppingBag, Menu } from "lucide-react";

export default function Navbar() {
	return (
		<nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-bio-deep/20 bg-bio-dark/50">
			<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
				<Link
					href="/"
					className="text-2xl font-bold tracking-tighter text-bio-light"
				>
					BIOPACK<span className="text-bio-primary">.</span>
				</Link>

				<div className="hidden md:flex gap-8 items-center text-sm font-medium text-bio-light/80 uppercase tracking-wider">
					<Link
						href="/products"
						className="hover:text-bio-accent transition-colors"
					>
						Products
					</Link>
					<Link
						href="/sustainability"
						className="hover:text-bio-accent transition-colors"
					>
						Sustainability
					</Link>
					<Link
						href="/about"
						className="hover:text-bio-accent transition-colors"
					>
						About
					</Link>
					<button className="bg-bio-primary/10 hover:bg-bio-primary/20 text-bio-primary px-4 py-2 rounded-full transition-all flex items-center gap-2 normal-case tracking-normal">
						<ShoppingBag size={18} />
						<span>Cart (0)</span>
					</button>
				</div>

				<button className="md:hidden text-bio-light">
					<Menu size={24} />
				</button>
			</div>
		</nav>
	);
}
