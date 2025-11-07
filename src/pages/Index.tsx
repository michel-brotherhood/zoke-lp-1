import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import StoresSection from "@/components/StoresSection";
import ContactForm from "@/components/ContactForm";
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
      <Testimonials />
      <StoresSection />
      <ContactForm />
      <Newsletter />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
