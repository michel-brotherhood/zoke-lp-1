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
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 text-primary-foreground drop-shadow-lg animate-fade-in leading-tight">
          Seja Você, Seja Bonita, <span className="text-accent">Seja Zoke</span>
        </h1>
        <p className="text-base sm:text-xl md:text-2xl mb-6 md:mb-8 text-primary-foreground/95 drop-shadow-md px-4">
          Moda praia e fitness que valoriza sua beleza natural.<br className="hidden sm:block" />
          <span className="text-accent font-semibold">Entrega para todo o Brasil 🇧🇷</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <Button variant="coral" size="lg" className="w-full sm:w-auto text-lg shadow-elegant" asChild>
            <a href="#collections">
              Explorar Coleções
            </a>
          </Button>
          <Button variant="hero" size="lg" className="w-full sm:w-auto text-lg shadow-elegant" asChild>
            <a href="https://api.whatsapp.com/send/?phone=5521971006480" target="_blank" rel="noopener noreferrer">
              Atendimento WhatsApp
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#collections"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground animate-bounce"
        aria-label="Scroll to collections"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
