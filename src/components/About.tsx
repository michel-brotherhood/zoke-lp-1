import { Waves, Heart, Sparkles } from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";

const features = [
  {
    icon: Waves,
    title: "Design Exclusivo",
    description: "Cada peça é cuidadosamente desenhada para realçar sua beleza natural",
  },
  {
    icon: Heart,
    title: "Conforto Premium",
    description: "Tecidos de alta qualidade que se adaptam perfeitamente ao seu corpo",
  },
  {
    icon: Sparkles,
    title: "Sustentabilidade",
    description: "Compromisso com o meio ambiente em cada etapa da produção",
  },
];

const About = () => {
  const { elementRef, isVisible } = useScrollFade();

  return (
    <section 
      id="about" 
      ref={elementRef}
      className={`py-12 md:py-20 bg-background scroll-fade-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground animate-fade-in">
            A Essência Zoke
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-in px-4">
            Somos mais do que uma marca de moda praia. Somos um estilo de vida que celebra a 
            liberdade, a beleza natural e o bem-estar. Com três lojas no Rio de Janeiro, oferecemos 
            peças exclusivas de moda praia e fitness, unindo design sofisticado ao conforto que você merece.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-4 animate-fade-in px-4">
            📦 <strong>Enviamos para todo o Brasil</strong> - Leve a Zoke para onde você estiver!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-lg bg-card hover:shadow-medium transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-ocean">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
