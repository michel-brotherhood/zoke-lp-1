import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { ChevronDown, Sparkles, Star } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex overflow-hidden">
      {/* Left Side - Video with decorative elements */}
      <div className="relative w-full md:w-1/2 bg-hero-teal overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Decorative shapes - matching reference */}
        {/* Semi-circle gauge top left */}
        <div className="absolute top-16 left-8 w-28 h-28">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 rounded-full border-[6px] border-hero-teal opacity-60" 
                 style={{ 
                   clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)',
                   borderStyle: 'dashed'
                 }}></div>
            <div className="absolute inset-2 rounded-full border-[6px] border-hero-coral opacity-50" 
                 style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}></div>
          </div>
        </div>
        
        {/* Stars on left side */}
        <div className="absolute top-[22%] left-6">
          <Star className="w-7 h-7 text-foreground fill-foreground" />
        </div>
        <div className="absolute top-[32%] left-6">
          <Star className="w-5 h-5 text-foreground fill-foreground" />
        </div>
        <div className="absolute top-[48%] left-6">
          <Star className="w-7 h-7 text-foreground fill-foreground" />
        </div>
        
        {/* Pink rectangles */}
        <div className="absolute top-36 left-12 w-12 h-20 bg-hero-pink opacity-60 rounded-sm"></div>
        <div className="absolute bottom-[35%] left-16 w-20 h-12 bg-hero-coral/50 opacity-70 rounded-sm"></div>
        
        {/* Large sparkle decoration */}
        <Sparkles className="absolute top-[38%] left-[28%] w-20 h-20 text-white opacity-50" />
      </div>

      {/* Right Side - Content with gradient */}
      <div className="relative w-full md:w-1/2 bg-gradient-hero-right flex flex-col">
        {/* Navigation - integrated into hero */}
        <nav className="relative z-50 pt-6 px-8">
          <div className="flex items-center justify-between mb-8">
            <img src={logo} alt="Zoke Logo" className="h-12" />
          </div>
          <div className="flex gap-8 text-foreground font-medium tracking-wide text-sm">
            <a href="#home" className="hover:opacity-70 transition-opacity">HOME</a>
            <a href="#about" className="hover:opacity-70 transition-opacity">ABOUT</a>
            <a href="#collections" className="hover:opacity-70 transition-opacity">GALLERY</a>
            <a href="#contact" className="hover:opacity-70 transition-opacity">CONTACT</a>
          </div>
        </nav>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-12">
          <p className="text-sm tracking-[0.3em] text-foreground mb-4 uppercase font-light">
            Coleção 2025
          </p>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
            Seja Você,<br />
            Seja Bonita,<br />
            <span className="font-light">Seja Zoke</span>
          </h1>
          
          <p className="text-base md:text-lg text-foreground/80 mb-3 tracking-wide uppercase font-light">
            Moda praia e fitness
          </p>
          
          <p className="text-sm md:text-base text-foreground font-normal mb-8">
            Entrega para todo o Brasil 🇧🇷
          </p>

          <div className="flex justify-start">
            <GradientButton variant="pink" asChild>
              <a href="https://api.whatsapp.com/send/?phone=5521971006480" target="_blank" rel="noopener noreferrer">
                Falar com Representante
              </a>
            </GradientButton>
          </div>
        </div>

        {/* Decorative elements on right side - more like reference */}
        <div className="absolute top-[18%] right-6">
          <Star className="w-5 h-5 text-hero-coral fill-hero-coral" />
        </div>
        <div className="absolute top-[26%] right-6">
          <Star className="w-4 h-4 text-hero-coral fill-hero-coral" />
        </div>
        <div className="absolute top-[40%] right-6">
          <Star className="w-5 h-5 text-hero-coral fill-hero-coral" />
        </div>
        <div className="absolute top-[58%] right-10">
          <Star className="w-4 h-4 text-foreground fill-foreground" />
        </div>
        <div className="absolute bottom-[28%] right-6">
          <Star className="w-4 h-4 text-foreground fill-foreground" />
        </div>
        <div className="absolute bottom-[35%] right-6">
          <Star className="w-5 h-5 text-foreground fill-foreground" />
        </div>

        {/* Dot pattern - vertical alignment like reference */}
        <div className="absolute right-20 top-[32%] flex flex-col gap-2 opacity-50">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex gap-2">
              {[...Array(3)].map((_, j) => (
                <div key={j} className="w-1 h-1 rounded-full bg-foreground"></div>
              ))}
            </div>
          ))}
        </div>

        {/* Circle decoration bottom right */}
        <div className="absolute bottom-16 right-28 w-36 h-36 rounded-full border-2 border-foreground/30 flex items-center justify-center">
          <Star className="w-14 h-14 text-foreground fill-foreground" />
        </div>

        {/* Sparkle bottom right */}
        <Sparkles className="absolute bottom-[42%] right-[18%] w-12 h-12 text-white opacity-40" />
      </div>

      {/* Scroll Indicator */}
      <a
        href="#collections"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground animate-bounce drop-shadow-lg z-10"
        aria-label="Scroll to collections"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
