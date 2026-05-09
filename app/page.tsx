import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-background text-white">
      <Navbar />
      <Hero />
    </main>
  );
}
