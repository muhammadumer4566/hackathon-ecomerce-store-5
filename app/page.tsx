import BestsellerProducts from "@/components/BestsellerProducts";
import EditorsPick from "@/components/EditorsPick";
import FeaturedPosts from "@/components/FeaturedPosts";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NeuralUniverse from "@/components/NeuralUniverse";
import ProductHero from "@/components/ProductHero";
import TopHeader from "@/components/TopHeader";

export default function Home() {
  return (
    <div className="relative">

      {/* Header Section */}
      <TopHeader />

      {/* Hero Section */}
      <Hero />

      {/* Editor's Pick Section */}
      <EditorsPick />

      {/* Bestseller Products Section */}
      <BestsellerProducts />

      {/* Product Hero Section */}
      <ProductHero />

      {/* Neural Universe Section */}
      <NeuralUniverse />

      {/* Featured Posts Section */}
      <FeaturedPosts />

      {/* Bestseller Products Section */}
      <Footer />
    </div>
  );
}
