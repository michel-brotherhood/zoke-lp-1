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
    subcategories: ["Argola_Borboleta", "Argola_Sunguini"],
    image: bikiniClassic,
    description: "Biquínis com detalhes de argola e amarrações elegantes"
  },
  {
    category: "Bojo",
    subcategories: ["Bojo_AsaDelta", "Bojo_Borboleta", "Bojo_Borboleta_Chemise_EstampaCoqueiro", "Bojo_Borboleta_EstampaCoqueiro", "Bojo_Sunguini", "Bojo_Sunguini_EstampaFloral"],
    image: bikiniSummer,
    description: "Tops com bojo estruturado para mais sustentação e conforto"
  },
  {
    category: "Cortininha",
    subcategories: ["Cortininha_Borboleta_EstampaOnça", "Cortininha_Laço"],
    image: bikiniNeutral,
    description: "O clássico cortininha com acabamentos modernos"
  },
  {
    category: "Cortinão",
    subcategories: ["Cortinão_Borboleta_EstampaZebra", "Cortinão_HotPant"],
    image: bikiniClassic,
    description: "Mais cobertura com estilo e personalidade"
  },
  {
    category: "Fixo",
    subcategories: ["Fixo_TiraFina"],
    image: bikiniSummer,
    description: "Modelos fixos práticos e elegantes"
  },
  {
    category: "Linha LUX",
    subcategories: ["LUX_Borboleta_Peça", "LUX_Calça_Cortininha", "LUX_Cortininha_Lacinho", "LUX_Cortininhas_Borboletas", "LUX_TopFixo_TiraFina"],
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
    subcategories: ["MeiaTaça_Laço_EstampaColorida", "MeiaTaça_Sunguine_Trilobal", "MeiaTaça_Sunguini", "MeiaTaça_TiraFina_EstampaFloral"],
    image: bikiniSummer,
    description: "Meia taça para quem busca elegância e conforto"
  },
  {
    category: "Linha TQC",
    subcategories: ["TQC_Amarração_EstampaFloral", "TQC_AsaDelta", "TQC_Borboleta", "TQC_Sunguini", "TQC_TiraFina", "TQC_TiraFina_EstampaColorida"],
    image: bikiniNeutral,
    description: "Tudo Que Cê precisa para arrasar na praia"
  },
  {
    category: "Top Ombro",
    subcategories: ["TopOmbro_AsaDelta_Chemise_EstampaFloral", "TopOmbro_Borboleta_Trilobal", "TopOmbro_Laço"],
    image: bikiniClassic,
    description: "Tops com alça de ombro para mais segurança"
  }
];

const SummerCollection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  const filteredLines = selectedCategory
    ? productLines.filter((line) => line.category === selectedCategory)
    : productLines;

  const displayedLines = showAll ? filteredLines : filteredLines.slice(0, 6);

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
        <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-6xl mx-auto">
          <Badge
            variant={selectedCategory === null ? "default" : "outline"}
            className="cursor-pointer px-6 py-3 text-sm md:text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-medium rounded-full"
            onClick={() => {
              setSelectedCategory(null);
              setShowAll(false);
            }}
          >
            Todos
          </Badge>
          {productLines.map((line) => (
            <Badge
              key={line.category}
              variant={selectedCategory === line.category ? "default" : "outline"}
              className="cursor-pointer px-6 py-3 text-sm md:text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-medium rounded-full"
              onClick={() => {
                setSelectedCategory(line.category);
                setShowAll(false);
              }}
            >
              {line.category}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mb-12">
          {displayedLines.map((line, index) => (
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

        {filteredLines.length > 6 && !showAll && (
          <div className="text-center">
            <Button 
              size="lg" 
              onClick={() => setShowAll(true)}
              className="bg-gradient-sunset hover:shadow-glow text-white text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-full shadow-medium hover:shadow-strong transition-all duration-500 hover:scale-105"
            >
              VER MAIS MODELOS
            </Button>
          </div>
        )}
        
        {showAll && (
          <div className="text-center">
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => {
                setShowAll(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-full transition-all duration-500 hover:scale-105"
            >
              VER MENOS
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SummerCollection;
