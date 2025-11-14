import { CheckCircle2, TrendingUp, Palette, Droplet, Layers, MapPin } from "lucide-react";

const features = [
  {
    icon: CheckCircle2,
    title: "Conforto que dura o dia inteiro",
    description: "Nada de ficar ajustando alça a cada 5 minutos. A modelagem foi pensada pra você curtir o dia sem neura."
  },
  {
    icon: TrendingUp,
    title: "Modelagens inteligentes",
    description: "Cortes que valorizam o que você quer mostrar e dão segurança onde você quer segurar mais."
  },
  {
    icon: Palette,
    title: "Mix & match de verdade",
    description: "Combine tops e calcinhas como quiser: cores, tamanhos e modelos independentes pra montar o seu conjunto ideal."
  },
  {
    icon: Droplet,
    title: "Tecidos agradáveis ao toque",
    description: "Texturas gostosas, que secam rápido e não ficam 'pesadas' depois do mergulho."
  },
  {
    icon: Layers,
    title: "Peças versáteis (praia → cidade)",
    description: "Top que vira cropped, saída de praia que funciona como vestido, chemise que vai do quiosque ao restaurante."
  },
  {
    icon: MapPin,
    title: "Estilo carioca na veia",
    description: "Cores, recortes e estampas com cara de sol, mar e fim de tarde na orla do Rio."
  }
];

const WhyChooseZoke = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-antiflash-white to-light-cyan">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Por que escolher biquínis Zoke neste verão?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Não é "só mais um biquíni". É a peça que vai te acompanhar em todos os rolês de sol.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-robin-egg-blue" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseZoke;
