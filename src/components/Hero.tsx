import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/logo-white.svg";
import logoColor from "@/assets/logo-color.svg";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoModalOpen, setLogoModalOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Video - Fullscreen */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>

      {/* Navigation - Overlay */}
      <nav className="relative z-50 pt-6 md:pt-8 px-6 md:px-12">
        <div className="flex items-center justify-between mb-8">
          <img src={logo} alt="Zoke Logo" className="h-10 brightness-0 invert md:hidden" />
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:opacity-70 transition-opacity"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Desktop menu */}
        <div className="hidden md:flex gap-8 text-white font-medium tracking-[0.2em] text-sm">
          <a href="#home" className="hover:opacity-70 transition-opacity">INÍCIO</a>
          <a href="#about" className="hover:opacity-70 transition-opacity">SOBRE</a>
          <a href="#collections" className="hover:opacity-70 transition-opacity">GALERIA</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity">CONTATO</a>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm">
            <div className="flex flex-col gap-4 p-6">
              <a 
                href="#home" 
                className="text-white font-medium tracking-wide hover:opacity-70 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                INÍCIO
              </a>
              <a 
                href="#about" 
                className="text-white font-medium tracking-wide hover:opacity-70 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                SOBRE
              </a>
              <a 
                href="#collections" 
                className="text-white font-medium tracking-wide hover:opacity-70 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                GALERIA
              </a>
              <a 
                href="#contact" 
                className="text-white font-medium tracking-wide hover:opacity-70 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTATO
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content - Centered Overlay */}
      <div className="relative z-40 flex-1 flex flex-col justify-center items-start px-6 md:px-16 lg:px-24 py-12 md:py-0 max-w-7xl">
        <button 
          onClick={() => setLogoModalOpen(true)}
          className="mb-6 md:mb-8 transition-transform hover:scale-105 duration-300 cursor-pointer"
          aria-label="Ver logo em tela cheia"
        >
          <img 
            src={logoColor} 
            alt="Zoke Logo" 
            className="h-16 sm:h-20 md:h-24 lg:h-28 brightness-0 invert drop-shadow-lg" 
          />
        </button>
        
        <p className="text-sm md:text-base tracking-[0.4em] text-white/90 mb-4 uppercase font-light">
          MODA PRAIA
        </p>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-10 text-white leading-none tracking-tight">
          VERÃO<span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">25</span>
        </h1>

        <button className="bg-desert-sand hover:bg-orange-wheel text-foreground font-bold tracking-[0.3em] px-8 md:px-12 py-3 md:py-4 text-xs md:text-base uppercase transition-all duration-300 hover:scale-105 shadow-strong">
          <a href="https://api.whatsapp.com/send/?phone=5521971006480" target="_blank" rel="noopener noreferrer">
            CONHEÇA
          </a>
        </button>
      </div>

      {/* Logo Modal - Fullscreen Modern */}
      <Dialog open={logoModalOpen} onOpenChange={setLogoModalOpen}>
        <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 bg-gradient-to-br from-background via-background to-primary/5 border-2 border-primary/20">
          <DialogTitle className="sr-only">Logo Zoke</DialogTitle>
          <div className="flex flex-col items-center justify-center h-full p-8 md:p-12 gap-8">
            <div className="flex-1 flex items-center justify-center w-full">
              <img 
                src={logoColor} 
                alt="Zoke - Moda Praia" 
                className="max-w-full max-h-full object-contain drop-shadow-2xl animate-scale-in"
              />
            </div>
            
            <div className="text-center space-y-6 max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
                ZOKE MODA PRAIA
              </h2>
              <p className="text-base md:text-lg text-muted-foreground tracking-wide">
                Descubra a coleção Verão 25 com estilo, conforto e qualidade.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button 
                  onClick={() => {
                    setLogoModalOpen(false);
                    window.open('https://api.whatsapp.com/send/?phone=5521971006480', '_blank');
                  }}
                  className="bg-desert-sand hover:bg-orange-wheel text-foreground font-bold tracking-[0.3em] px-10 py-4 text-sm uppercase transition-all duration-300 hover:scale-105 shadow-strong"
                >
                  FALE CONOSCO
                </button>
                <a 
                  href="#collections"
                  onClick={() => setLogoModalOpen(false)}
                  className="bg-transparent border-2 border-primary hover:bg-primary/10 text-foreground font-bold tracking-[0.3em] px-10 py-4 text-sm uppercase transition-all duration-300 hover:scale-105 inline-block"
                >
                  VER GALERIA
                </a>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Scroll Indicator */}
      <a
        href="#collections"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce drop-shadow-lg z-40"
        aria-label="Scroll para coleções"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;
