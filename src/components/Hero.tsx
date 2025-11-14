import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { ChevronDown, Sparkles, Star, Menu, X } from "lucide-react";
import logo from "@/assets/logo.svg";

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Left Side - Video */}
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen bg-hero-teal overflow-hidden order-1 md:order-1">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Right Side - Content with gradient */}
      <div className="relative w-full md:w-1/2 min-h-[60vh] md:h-screen bg-gradient-hero-right flex flex-col order-2 md:order-2">
        {/* Navigation - integrated into hero */}
        <nav className="relative z-50 pt-4 md:pt-6 px-4 md:px-8">
          <div className="flex items-center justify-between mb-4 md:mb-8">
            <img src={logo} alt="Zoke Logo" className="h-10 md:h-12" />
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-foreground hover:opacity-70 transition-opacity"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex gap-8 text-foreground font-medium tracking-wide text-sm">
            <a href="#home" className="hover:opacity-70 transition-opacity">INÍCIO</a>
            <a href="#about" className="hover:opacity-70 transition-opacity">SOBRE</a>
            <a href="#collections" className="hover:opacity-70 transition-opacity">GALERIA</a>
            <a href="#contact" className="hover:opacity-70 transition-opacity">CONTATO</a>
          </div>
          
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border shadow-lg">
              <div className="flex flex-col gap-4 p-4">
                <a 
                  href="#home" 
                  className="text-foreground font-medium hover:opacity-70 transition-opacity"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  INÍCIO
                </a>
                <a 
                  href="#about" 
                  className="text-foreground font-medium hover:opacity-70 transition-opacity"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  SOBRE
                </a>
                <a 
                  href="#collections" 
                  className="text-foreground font-medium hover:opacity-70 transition-opacity"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  GALERIA
                </a>
                <a 
                  href="#contact" 
                  className="text-foreground font-medium hover:opacity-70 transition-opacity"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CONTATO
                </a>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center px-4 md:px-8 lg:px-16 py-8 md:py-12">
          <p className="text-xs md:text-sm tracking-[0.3em] text-foreground mb-3 md:mb-4 uppercase font-light">
            Coleção 2025
          </p>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 text-foreground leading-tight">
            Seja Você,<br />
            Seja Bonita,<br />
            <span className="font-light">Seja Zoke</span>
          </h1>
          
          <p className="text-sm md:text-base lg:text-lg text-foreground/80 mb-2 md:mb-3 tracking-wide uppercase font-light">
            Moda praia e fitness
          </p>
          
          <p className="text-xs md:text-sm lg:text-base text-foreground font-normal mb-6 md:mb-8">
            Entrega para todo o Brasil 🇧🇷
          </p>

          <div className="flex justify-start">
            <GradientButton variant="pink" asChild>
              <a href="https://api.whatsapp.com/send/?phone=5521971006480" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base">
                Falar com Representante
              </a>
            </GradientButton>
          </div>
        </div>

        {/* Decorative elements on right side - responsive */}
        <div className="absolute top-[18%] right-3 md:right-6">
          <Star className="w-4 h-4 md:w-5 md:h-5 text-hero-coral fill-hero-coral" />
        </div>
        <div className="absolute top-[26%] right-3 md:right-6">
          <Star className="w-3 h-3 md:w-4 md:h-4 text-hero-coral fill-hero-coral" />
        </div>
        <div className="absolute top-[40%] right-3 md:right-6">
          <Star className="w-4 h-4 md:w-5 md:h-5 text-hero-coral fill-hero-coral" />
        </div>
        <div className="absolute top-[58%] right-6 md:right-10 hidden md:block">
          <Star className="w-4 h-4 text-foreground fill-foreground" />
        </div>
        <div className="absolute bottom-[28%] right-3 md:right-6">
          <Star className="w-3 h-3 md:w-4 md:h-4 text-foreground fill-foreground" />
        </div>
        <div className="absolute bottom-[35%] right-3 md:right-6">
          <Star className="w-4 h-4 md:w-5 md:h-5 text-foreground fill-foreground" />
        </div>

        {/* Dot pattern - responsive */}
        <div className="hidden lg:flex absolute right-16 xl:right-20 top-[32%] flex-col gap-1.5 md:gap-2 opacity-50">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex gap-1.5 md:gap-2">
              {[...Array(3)].map((_, j) => (
                <div key={j} className="w-0.5 h-0.5 md:w-1 md:h-1 rounded-full bg-foreground"></div>
              ))}
            </div>
          ))}
        </div>

        {/* Circle decoration bottom right - responsive */}
        <div className="absolute bottom-12 md:bottom-16 right-16 md:right-28 w-24 h-24 md:w-36 md:h-36 rounded-full border-2 border-foreground/30 hidden md:flex items-center justify-center">
          <Star className="w-10 h-10 md:w-14 md:h-14 text-foreground fill-foreground" />
        </div>

        {/* Sparkle bottom right - responsive */}
        <Sparkles className="hidden lg:block absolute bottom-[42%] right-[18%] w-8 h-8 md:w-12 md:h-12 text-white opacity-40" />
      </div>

      {/* Scroll Indicator */}
      <a
        href="#collections"
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-foreground animate-bounce drop-shadow-lg z-10"
        aria-label="Scroll para coleções"
      >
        <ChevronDown className="w-6 h-6 md:w-8 md:h-8" />
      </a>
    </section>
  );
};

export default Hero;
