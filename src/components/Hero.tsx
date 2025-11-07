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
        
        {/* Decorative shapes */}
        <div className="absolute top-20 left-8 w-32 h-32 rounded-full border-8 border-hero-coral opacity-30" 
             style={{ borderStyle: 'dashed', borderSpacing: '4px' }}></div>
        <div className="absolute top-32 left-12 w-24 h-24 rounded-full border-8 border-hero-teal opacity-50"></div>
        
        <div className="absolute top-1/4 left-4">
          <Star className="w-8 h-8 text-foreground fill-foreground" />
        </div>
        <div className="absolute top-1/3 left-4">
          <Star className="w-6 h-6 text-foreground fill-foreground" />
        </div>
        <div className="absolute top-1/2 left-4">
          <Star className="w-8 h-8 text-foreground fill-foreground" />
        </div>
        
        <div className="absolute top-40 left-8 w-16 h-24 bg-hero-coral opacity-40"></div>
        <div className="absolute bottom-1/3 left-20 w-24 h-16 bg-hero-pink opacity-30"></div>
        
        <Sparkles className="absolute top-1/3 left-1/4 w-16 h-16 text-white opacity-40" />
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

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button variant="hero" size="lg" className="text-base font-medium" asChild>
              <a href="#collections">
                Explorar Coleções
              </a>
            </Button>
            <GradientButton variant="pink" asChild>
              <a href="https://api.whatsapp.com/send/?phone=5521971006480" target="_blank" rel="noopener noreferrer">
                Falar com Representante
              </a>
            </GradientButton>
          </div>
        </div>

        {/* Decorative elements on right side */}
        <div className="absolute top-1/4 right-8">
          <Star className="w-6 h-6 text-hero-coral fill-hero-coral" />
        </div>
        <div className="absolute top-1/3 right-8">
          <Star className="w-4 h-4 text-hero-coral fill-hero-coral" />
        </div>
        <div className="absolute top-1/2 right-8">
          <Star className="w-6 h-6 text-hero-coral fill-hero-coral" />
        </div>
        <div className="absolute top-2/3 right-12">
          <Star className="w-5 h-5 text-foreground fill-foreground" />
        </div>
        <div className="absolute bottom-1/4 right-8">
          <Star className="w-4 h-4 text-foreground fill-foreground" />
        </div>
        <div className="absolute bottom-1/3 right-8">
          <Star className="w-6 h-6 text-foreground fill-foreground" />
        </div>

        {/* Dot pattern */}
        <div className="absolute right-24 top-1/3 h-64 flex flex-col gap-3 opacity-40">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex gap-3">
              {[...Array(3)].map((_, j) => (
                <div key={j} className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
              ))}
            </div>
          ))}
        </div>

        {/* Circle decoration */}
        <div className="absolute bottom-20 right-32 w-32 h-32 rounded-full border-2 border-foreground/20 flex items-center justify-center">
          <Star className="w-12 h-12 text-foreground fill-foreground" />
        </div>
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
