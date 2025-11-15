import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { ChevronDown, Menu, X } from "lucide-react";
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

      {/* Right Side - Content - revamped modern design */}
      <div className="relative w-full md:w-1/2 min-h-[60vh] md:h-screen bg-gradient-to-br from-seashell via-almond to-desert-sand flex flex-col order-2 md:order-2 overflow-hidden isolate">
        {/* Accent gradient bar on the edge */}
        <div className="absolute top-0 right-0 h-full w-2 md:w-3 bg-gradient-to-b from-hero-coral via-orange-wheel to-hero-teal drop-shadow-lg"></div>
        {/* Subtle dot grid overlay */}
        <svg className="absolute inset-0 opacity-20 text-hero-teal" aria-hidden>
          <defs>
            <pattern id="dotGrid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotGrid)" />
        </svg>
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
          <div className="hidden md:flex gap-6 text-foreground font-medium tracking-wide text-sm bg-background/40 backdrop-blur-md border border-border/50 rounded-full px-5 py-2 shadow-sm">
            <a href="#home" className="hover:opacity-70 transition-opacity">INÍCIO</a>
            <a href="#about" className="hover:opacity-70 transition-opacity">SOBRE</a>
            <a href="#collections" className="hover:opacity-70 transition-opacity">GALERIA</a>
            <a href="#contact" className="hover:opacity-70 transition-opacity">CONTATO</a>
          </div>
          
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-background/90 backdrop-blur-md border-b border-border shadow-lg rounded-b-xl">
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

        <div className="flex-1 flex flex-col justify-center px-4 md:px-8 lg:px-16 py-8 md:py-12">
          <div className="relative max-w-xl md:max-w-2xl bg-background/50 backdrop-blur-md border border-border/50 rounded-3xl shadow-xl p-6 md:p-8 animate-enter">
            {/* subtle light flare */}
            <div className="pointer-events-none absolute -top-6 -right-6 w-24 h-24 rounded-full bg-hero-coral/20 blur-2xl"></div>

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
        </div>

        {/* Modern decorative shapes - new style */}
        <div className="pointer-events-none absolute inset-0">
          {/* Soft gradient orbs */}
          <div className="absolute -top-10 -right-8 w-72 h-72 bg-hero-coral/25 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-[-80px] right-24 w-80 h-80 bg-hero-teal/20 blur-3xl rounded-full" />
          {/* Fine ring */}
          <div className="hidden lg:block absolute bottom-20 right-24 w-44 h-44 rounded-full border border-orange-wheel/40 backdrop-blur-sm" />
        </div>
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
