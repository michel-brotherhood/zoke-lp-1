import { Button } from "@/components/ui/button";
import { ChevronDown, Play } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-poppins text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-4 md:mb-6 text-white drop-shadow-2xl animate-fade-in leading-tight tracking-wide">
          Seja Você, Seja Bonita, <span className="text-white font-normal">Seja Zoke</span>
        </h1>
        <p className="font-poppins text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-white/95 drop-shadow-lg px-4 font-light">
          Moda praia e fitness que valoriza sua beleza natural.<br className="hidden sm:block" />
          <span className="font-normal">Entrega para todo o Brasil 🇧🇷</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <Button variant="coral" size="lg" className="w-full sm:w-auto text-lg shadow-2xl font-medium" asChild>
            <a href="#collections">
              Explorar Coleções
            </a>
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg shadow-2xl bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-medium" asChild>
            <a href="https://api.whatsapp.com/send/?phone=5521971006480" target="_blank" rel="noopener noreferrer">
              Falar com Representante
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#collections"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce drop-shadow-lg"
        aria-label="Scroll to collections"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
