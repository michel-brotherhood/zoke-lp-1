import { Button } from "@/components/ui/button";
import { ShoppingBag, Instagram } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-orange-wheel to-desert-sand relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-robin-egg-blue/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-light-cyan/30 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white">
            Encontre Seu Look Perfeito
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 md:mb-12 max-w-2xl mx-auto">
            Visite nossas lojas ou nos siga no Instagram para descobrir as últimas tendências em moda praia e fitness
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#stores"
              className="w-full sm:w-auto"
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-white text-orange-wheel hover:bg-antiflash-white transition-all duration-300 text-lg px-8 py-6 shadow-lg hover:shadow-xl"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Nossas Lojas
              </Button>
            </a>
            <a 
              href="https://www.instagram.com/usezoke/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-wheel transition-all duration-300 text-lg px-8 py-6 shadow-lg hover:shadow-xl"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Siga @usezoke
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
