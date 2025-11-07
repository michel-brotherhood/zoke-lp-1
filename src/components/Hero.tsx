import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import logo from "@/assets/logo.png";
import heroImage from "@/assets/hero-summer.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-hero-yellow overflow-hidden flex items-center justify-center px-4 md:px-8 py-8">
      {/* Decorative yellow leaves - top left */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-40">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {[...Array(7)].map((_, i) => (
            <path
              key={i}
              d={`M ${100 - i * 15} 0 Q ${50 - i * 20} ${50 + i * 10} ${100 - i * 15} ${100 + i * 15}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="12"
              className="text-hero-yellow"
              style={{ opacity: 0.6 - i * 0.08 }}
            />
          ))}
        </svg>
      </div>

      {/* Decorative yellow leaves - bottom right */}
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-40">
        <svg viewBox="0 0 300 300" className="w-full h-full">
          {[...Array(9)].map((_, i) => (
            <path
              key={i}
              d={`M ${200 + i * 15} 300 Q ${250 + i * 10} ${250 - i * 10} ${200 + i * 15} ${200 - i * 15}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="14"
              className="text-hero-yellow"
              style={{ opacity: 0.7 - i * 0.07 }}
            />
          ))}
        </svg>
      </div>

      {/* Main white card */}
      <div className="relative w-full max-w-7xl bg-hero-white rounded-[3rem] shadow-2xl overflow-hidden">
        {/* Navigation */}
        <nav className="relative z-50 pt-8 px-6 md:px-12">
          <div className="flex items-center justify-between">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Menu size={28} className="text-foreground" />
            </button>
            
            <div className="hidden md:flex gap-8 lg:gap-12 text-foreground font-medium text-base">
              <a href="#collections" className="hover:opacity-70 transition-opacity">Shop</a>
              <a href="#collections" className="hover:opacity-70 transition-opacity">Collections</a>
              <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
            </div>
          </div>
        </nav>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 px-6 md:px-12 py-12 md:py-16">
          {/* Left Side - Text Content */}
          <div className="relative flex flex-col justify-center space-y-6 order-2 md:order-1">
            {/* Decorative pink leaves - left side */}
            <div className="absolute -left-8 top-0 w-32 h-32 opacity-30">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {[...Array(5)].map((_, i) => (
                  <path
                    key={i}
                    d={`M ${50 - i * 8} 0 Q ${20 - i * 5} ${30 + i * 5} ${50 - i * 8} ${60 + i * 8}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-hero-pink"
                    style={{ opacity: 0.5 - i * 0.08 }}
                  />
                ))}
              </svg>
            </div>

            {/* Pink dot pattern */}
            <div className="absolute left-8 top-20 grid grid-cols-3 gap-1.5 opacity-60">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-hero-pink"></div>
              ))}
            </div>

            <p className="text-hero-pink-dark font-script text-2xl md:text-3xl italic" style={{ fontFamily: 'cursive' }}>
              Season collection
            </p>
            
            <div className="space-y-2">
              <h1 className="font-heading font-extrabold text-6xl md:text-7xl lg:text-8xl text-hero-pink-dark leading-none tracking-tight">
                SUMMER
              </h1>
              <div className="h-1.5 w-64 bg-hero-pink-dark rounded-full"></div>
            </div>
            
            <p className="text-gray-400 text-sm md:text-base max-w-md leading-relaxed">
              Descubra a coleção de verão Zoke: moda praia exclusiva com design sofisticado, conforto premium e estilo único para você brilhar na praia.
            </p>

            <div className="pt-4">
              <Button 
                className="bg-hero-pink-dark hover:bg-hero-pink-dark/90 text-white px-8 py-6 text-base font-semibold rounded-lg uppercase tracking-wide"
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=5521971006480&text=Olá!%20Gostaria%20de%20conhecer%20a%20coleção%20de%20verão%20Zoke', '_blank')}
              >
                SHOP NOW
              </Button>
            </div>

            {/* Bottom left dots */}
            <div className="absolute left-8 bottom-12 grid grid-cols-3 gap-1.5 opacity-60">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-hero-pink"></div>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative order-1 md:order-2">
            {/* Decorative pink leaves - top right */}
            <div className="absolute -top-4 right-0 w-40 h-40 opacity-30">
              <svg viewBox="0 0 120 120" className="w-full h-full">
                {[...Array(6)].map((_, i) => (
                  <path
                    key={i}
                    d={`M ${70 + i * 8} 0 Q ${100 + i * 5} ${30 + i * 5} ${70 + i * 8} ${60 + i * 8}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-hero-pink"
                    style={{ opacity: 0.5 - i * 0.08 }}
                  />
                ))}
              </svg>
            </div>

            {/* Pink dot pattern - top right */}
            <div className="absolute top-16 right-12 grid grid-cols-3 gap-1.5 opacity-60">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-hero-pink"></div>
              ))}
            </div>

            {/* 25% off badge */}
            <div className="absolute top-8 right-8 text-white text-right z-10">
              <div className="text-6xl md:text-7xl font-bold leading-none">25<span className="text-4xl align-top">%</span></div>
              <div className="text-2xl md:text-3xl font-light italic">off</div>
            </div>

            {/* Yellow circle decoration - top */}
            <div className="absolute top-16 left-1/3 w-32 h-32 border-4 border-hero-yellow rounded-full opacity-70"></div>

            {/* Yellow circle decoration - bottom */}
            <div className="absolute bottom-16 left-1/4 w-40 h-40 border-4 border-hero-yellow rounded-full opacity-70"></div>

            {/* Main image with rotated frame effect */}
            <div className="relative transform rotate-2 mx-auto max-w-md">
              <div className="bg-gradient-to-br from-hero-pink/40 via-transparent to-hero-yellow/40 rounded-3xl p-1">
                <img 
                  src={heroImage} 
                  alt="Coleção de Verão Zoke" 
                  className="w-full h-auto rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#collections"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground animate-bounce z-10"
        aria-label="Scroll to collections"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
