import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import bikiniClassic from "@/assets/bikini-classic.jpg";
import bikiniSummer from "@/assets/bikini-summer.jpg";
import bikiniNeutral from "@/assets/bikini-neutral.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type ProductLine = {
  category: string;
  subcategories: string[];
  image: string;
  description: string;
};

const productLines: ProductLine[] = [
  {
    category: "Argola",
    subcategories: ["Borboleta", "Sunguini"],
    image: bikiniClassic,
    description: "Biquínis com detalhes de argola e amarrações elegantes"
  },
  {
    category: "Bojo",
    subcategories: ["AsaDelta", "Borboleta", "Borboleta_Chemise_EstampaCoqueiro", "Borboleta_EstampaCoqueiro", "Sunguini", "Sunguini_EstampaFloral"],
    image: bikiniSummer,
    description: "Tops com bojo estruturado para mais sustentação e conforto"
  },
  {
    category: "Cortininha",
    subcategories: ["Borboleta_EstampaOnça", "Laço"],
    image: bikiniNeutral,
    description: "O clássico cortininha com acabamentos modernos"
  },
  {
    category: "Cortinão",
    subcategories: ["Borboleta_EstampaZebra", "HotPant"],
    image: bikiniClassic,
    description: "Mais cobertura com estilo e personalidade"
  },
  {
    category: "Fixo",
    subcategories: ["TiraFina"],
    image: bikiniSummer,
    description: "Modelos fixos práticos e elegantes"
  },
  {
    category: "Linha LUX",
    subcategories: ["Borboleta_Peça", "Calça_Cortininha", "Cortininha_Lacinho", "Cortininhas_Borboletas", "TopFixo_TiraFina"],
    image: bikiniNeutral,
    description: "Nossa linha premium com acabamento luxuoso e exclusivo"
  },
  {
    category: "Maiô Gota / Recorte",
    subcategories: ["MaiôGota", "MaiôGota_EstampaFloral", "MaiôGota_Estampado_Dupla", "MaiôRecorte"],
    image: bikiniClassic,
    description: "Maiôs com recortes estratégicos e design moderno"
  },
  {
    category: "Meia Taça",
    subcategories: ["Laço_EstampaColorida", "Sunguine_Trilobal", "Sunguini", "TiraFina_EstampaFloral"],
    image: bikiniSummer,
    description: "Meia taça para quem busca elegância e conforto"
  },
  {
    category: "Linha TQC",
    subcategories: ["Amarração_EstampaFloral", "AsaDelta", "Borboleta", "Sunguini", "TiraFina", "TiraFina_EstampaColorida"],
    image: bikiniNeutral,
    description: "Tudo Que Cê precisa para arrasar na praia"
  },
  {
    category: "Top Ombro",
    subcategories: ["AsaDelta_Chemise_EstampaFloral", "Borboleta_Trilobal", "Laço"],
    image: bikiniClassic,
    description: "Tops com alça de ombro para mais segurança"
  }
];

const SummerCollection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const filteredLines = selectedCategory
    ? productLines.filter((line) => line.category === selectedCategory)
    : productLines;

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 md:py-24 bg-gradient-soft relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Decorative elements with parallax */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-coral/10 rounded-full blur-3xl parallax-slow" />
      <div className="absolute bottom-40 right-10 w-64 h-64 bg-robin-egg-blue/10 rounded-full blur-3xl parallax-slower" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 parallax-text">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Coleção Verão Zoke
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-sunset bg-clip-text text-transparent">
            biquínis pra todos os seus dias de sol
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mt-6">
            A coleção de verão da Zoke foi criada pra acompanhar todos os moods da estação: o dia de praia lotada com a galera, o pôr do sol mais reservado, a viagem de fim de semana... e aquela foto que você já sabe qual vai ser o close.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-5xl mx-auto">
          <Badge
            variant={selectedCategory === null ? "default" : "outline"}
            className="cursor-pointer px-4 py-2 text-sm transition-all duration-300 hover:scale-105"
            onClick={() => setSelectedCategory(null)}
          >
            Todos
          </Badge>
          {productLines.map((line) => (
            <Badge
              key={line.category}
              variant={selectedCategory === line.category ? "default" : "outline"}
              className="cursor-pointer px-4 py-2 text-sm transition-all duration-300 hover:scale-105"
              onClick={() => setSelectedCategory(line.category)}
            >
              {line.category}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12">
          {filteredLines.map((line, index) => (
            <div
              key={line.category}
              className="relative overflow-hidden rounded-2xl shadow-medium hover:shadow-strong transition-all duration-500 hover:-translate-y-2 animate-fade-in group bg-card border border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 md:h-56 overflow-hidden">
                <img 
                  src={line.image} 
                  alt={line.category}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    {line.category}
                  </h3>
                  <Badge className="bg-gradient-sunset text-white border-0">
                    {line.subcategories.length}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {line.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {line.subcategories.slice(0, 3).map((sub) => (
                    <Badge key={sub} variant="secondary" className="text-xs">
                      {sub.replace(/_/g, ' ')}
                    </Badge>
                  ))}
                  {line.subcategories.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{line.subcategories.length - 3}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#collections">
            <Button 
              size="lg" 
              className="bg-gradient-sunset hover:shadow-glow text-white text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-full shadow-medium hover:shadow-strong transition-all duration-500 hover:scale-105"
            >
              VER TODOS OS MODELOS DE BIQUÍNI
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SummerCollection;
