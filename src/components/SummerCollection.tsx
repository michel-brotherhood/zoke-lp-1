import { Button } from "@/components/ui/button";
import { Waves } from "lucide-react";

const collections = [
  {
    title: "Linha Clássicos do Rio",
    description: "Cortininhas, lacinho, asa delta e hot pants repaginados com o toque moderno da Zoke – pra quem gosta do básico nada-básico.",
    color: "bg-robin-egg-blue"
  },
  {
    title: "Linha Cores do Verão",
    description: "Biquínis vibrantes, tons de neon, degradês e estampas exclusivas que se destacam na areia e nas fotos.",
    color: "bg-coral"
  },
  {
    title: "Linha Neutra & Chique",
    description: "Nudes, pretos, terrosos e cores elegantes pra quem quer um look praia mais sofisticado e fácil de combinar.",
    color: "bg-desert-sand"
  }
];

const SummerCollection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Coleção Verão Zoke – biquínis pra todos os seus dias de sol
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            A coleção de verão da Zoke foi criada pra acompanhar todos os moods da estação: o dia de praia lotada com a galera, o pôr do sol mais reservado, a viagem de fim de semana... e aquela foto que você já sabe qual vai ser o close.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-12">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`${collection.color} h-48 md:h-56 flex items-center justify-center`}>
                <Waves className="w-20 h-20 md:w-24 md:h-24 text-white/30" />
              </div>
              <div className="bg-white p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">
                  {collection.title}
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {collection.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#collections">
            <Button 
              size="lg" 
              className="bg-orange-wheel hover:bg-orange-wheel/90 text-white text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
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
