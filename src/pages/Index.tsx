import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseZoke from "@/components/WhyChooseZoke";
import SummerCollection from "@/components/SummerCollection";
import ProductCarousel from "@/components/ProductCarousel";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import StoresSection from "@/components/StoresSection";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <Navbar />
      <Hero />
      <WhyChooseZoke />
      <SummerCollection />
      <ProductCarousel />
      <About />
      <FAQ />
      <Testimonials />
      <StoresSection />
      <ContactForm />
      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
