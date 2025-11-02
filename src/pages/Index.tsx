import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import About from "@/components/About";
import StoresSection from "@/components/StoresSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <Navbar />
      <Hero />
      <Collections />
      <About />
      <StoresSection />
      <Newsletter />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
