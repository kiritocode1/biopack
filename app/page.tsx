import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<main className="bg-bio-dark min-h-screen selection:bg-bio-primary selection:text-bio-dark">
			<Navbar />
			<Hero />
			<ProductShowcase />
			<Footer />
		</main>
	);
}
