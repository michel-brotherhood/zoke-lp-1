import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Coleções", href: "#collections" },
    { name: "Sobre", href: "#about" },
    { name: "Lojas", href: "#stores" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center">
            <img src={logo} alt="Zoke Moda Praia e Fitness" className="h-12 md:h-14" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-accent transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            <Button variant="hero" size="default" asChild>
              <a href="https://api.whatsapp.com/send/?phone=5521971006480" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="md:hidden fixed inset-0 bg-foreground/95 backdrop-blur-md z-50 animate-fade-in"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <div className="md:hidden fixed inset-0 z-50 flex flex-col bg-gradient-ocean animate-slide-in-right">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-primary-foreground/20">
                <img src={logo} alt="Zoke" className="h-12" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-primary-foreground hover:bg-primary-foreground/10 rounded-full p-2 transition-colors"
                  aria-label="Fechar menu"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 flex flex-col justify-center px-8 gap-6">
                {navLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-primary-foreground text-2xl font-semibold hover:text-accent-foreground hover:translate-x-2 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* CTA Buttons */}
              <div className="p-8 space-y-4 border-t border-primary-foreground/20">
                <Button 
                  variant="coral" 
                  size="lg" 
                  className="w-full text-lg animate-fade-in" 
                  style={{ animationDelay: "500ms" }}
                  asChild
                >
                  <a href="https://api.whatsapp.com/send/?phone=5521971006480" target="_blank" rel="noopener noreferrer">
                    <Phone className="w-5 h-5 mr-2" />
                    Fale Conosco
                  </a>
                </Button>
                
                <div className="text-center text-primary-foreground/80 text-sm animate-fade-in" style={{ animationDelay: "600ms" }}>
                  <p>📦 Enviamos para todo Brasil</p>
                  <a 
                    href="https://www.instagram.com/usezoke/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    @usezoke
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
