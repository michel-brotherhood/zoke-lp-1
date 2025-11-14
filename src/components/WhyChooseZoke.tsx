import { CheckCircle2, TrendingUp, Palette, Droplet, Layers, MapPin } from "lucide-react";

const features = [
  {
    icon: CheckCircle2,
    title: "Qualidade Premium",
    description: "Tecidos nobres com resistência ao cloro, água salgada e proteção UV 50+",
  },
  {
    icon: TrendingUp,
    title: "Fit Perfeito",
    description: "Modelagem exclusiva que valoriza todos os tipos de corpo com muito conforto",
  },
  {
    icon: Palette,
    title: "Design Único",
    description: "Estampas autorais e cores vibrantes desenvolvidas por nosso time criativo",
  },
  {
    icon: Droplet,
    title: "Secagem Rápida",
    description: "Tecnologia de tecido que seca rapidamente, perfeito para o dia a dia na praia",
  },
  {
    icon: Layers,
    title: "Mix & Match",
    description: "Tops e calcinhas vendidos separadamente para você montar o biquíni ideal",
  },
  {
    icon: MapPin,
    title: "100% Nacional",
    description: "Produção brasileira com valorização da mão de obra local e sustentável",
  },
];

const WhyChooseZoke = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-soft relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl parallax-slow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl parallax-slower" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 parallax-text">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Por que escolher Zoke?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Cada peça Zoke é pensada para você se sentir confiante, confortável e linda em todos os momentos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-2 border border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-sunset flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-medium">
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseZoke;
