import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">ZOKE</h3>
            <p className="text-primary-foreground/80">
              Moda praia e fitness com estilo e qualidade desde 2024
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#collections" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Coleções
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Sobre
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Lojas Físicas</h4>
            <ul className="space-y-3 text-primary-foreground/80 text-sm">
              <li>
                <p className="font-medium text-primary-foreground">Freguesia</p>
                <p>Estrada dos Três Rios, 200</p>
                <p>Seg-Sex: 10h-19h | Sáb: 10h-14h</p>
              </li>
              <li>
                <p className="font-medium text-primary-foreground">Barra - Praia Shopping</p>
                <p>Av. Olegário Maciel, 484</p>
              </li>
              <li>
                <p className="font-medium text-primary-foreground">Barra - Millennium</p>
                <p>Av. das Américas, 7707</p>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>📦 Enviamos para todo Brasil</li>
              <li>
                <a href="https://api.whatsapp.com/send/?phone=5521971006480" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                  📱 WhatsApp: (21) 97100-6480
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/usezoke/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                  📸 Instagram: @usezoke
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/usezoke/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram Zoke"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=5521971006480"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp Zoke"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 md:pt-8 text-center text-primary-foreground/60 text-sm">
          <p>&copy; 2024 Zoke Moda Praia e Fitness. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
