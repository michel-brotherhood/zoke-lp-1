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

      {/* Right Side - Content with modern gradient */}
      <div className="relative w-full md:w-1/2 min-h-[60vh] md:h-screen bg-gradient-to-br from-seashell via-almond to-desert-sand flex flex-col order-2 md:order-2 overflow-hidden">
        {/* Modern decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-hero-coral/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-hero-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-orange-wheel/5 rounded-full blur-2xl parallax-slow"></div>
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

        {/* Modern floating decorative elements */}
        <div className="absolute top-[20%] right-8 md:right-12">
          <div className="relative">
            <Star className="w-6 h-6 md:w-8 md:h-8 text-hero-coral fill-hero-coral drop-shadow-lg parallax-text" />
            <div className="absolute inset-0 w-6 h-6 md:w-8 md:h-8 bg-hero-coral/30 blur-md rounded-full"></div>
          </div>
        </div>
        
        <div className="absolute top-[45%] right-6 md:right-10">
          <div className="relative">
            <Star className="w-5 h-5 md:w-7 md:h-7 text-orange-wheel fill-orange-wheel drop-shadow-lg parallax-slow" />
            <div className="absolute inset-0 w-5 h-5 md:w-7 md:h-7 bg-orange-wheel/30 blur-md rounded-full"></div>
          </div>
        </div>

        <div className="absolute bottom-[30%] right-12 md:right-16">
          <div className="relative">
            <Sparkles className="w-7 h-7 md:w-10 md:h-10 text-hero-teal drop-shadow-lg parallax-slower" />
            <div className="absolute inset-0 w-7 h-7 md:w-10 md:h-10 bg-hero-teal/20 blur-lg rounded-full"></div>
          </div>
        </div>

        {/* Modern geometric shapes */}
        <div className="hidden lg:block absolute bottom-16 right-20 w-32 h-32 border-2 border-hero-coral/30 rounded-full backdrop-blur-sm bg-background/5">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 border border-hero-coral/50 rounded-full"></div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute top-[35%] right-[25%] w-2 h-2 bg-hero-coral rounded-full opacity-60 parallax-text"></div>
        <div className="absolute top-[55%] right-[15%] w-1.5 h-1.5 bg-orange-wheel rounded-full opacity-40 parallax-slow"></div>
        <div className="absolute bottom-[40%] right-[30%] w-1 h-1 bg-hero-teal rounded-full opacity-50 parallax-slower"></div>
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
