import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Fernanda Oliveira",
    rating: 5,
    timeAgo: "Há 3 dias",
    text: "Comprei biquínis e maiôs incríveis! Ficou perfeito! O atendimento foi rápido e muito bem feito. Super recomendo!",
  },
  {
    id: 2,
    name: "Pedro Henrique",
    rating: 4,
    timeAgo: "Há 2 semanas",
    text: "Loja completa com tudo que você precisa para a praia. Preços competitivos e qualidade excepcional.",
  },
  {
    id: 3,
    name: "Juliana Martins",
    rating: 5,
    timeAgo: "Há 1 semana",
    text: "Adorei os tecidos! Variedade incrível de estampas e cores. O atendimento foi super atencioso e me ajudaram a escolher o melhor para mim.",
  },
  {
    id: 4,
    name: "Carla Santos",
    rating: 5,
    timeAgo: "Há 4 dias",
    text: "Moda praia de qualidade com ótimo custo-benefício. A entrega foi super rápida e o produto chegou perfeitamente embalado!",
  },
  {
    id: 5,
    name: "Rafaela Costa",
    rating: 5,
    timeAgo: "Há 1 mês",
    text: "Simplesmente apaixonada pela Zoke! Peças lindas, confortáveis e que valorizam o corpo. Já sou cliente fiel!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-sunset">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-accent text-accent" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-foreground">
            O Que Nossos <span className="text-accent">Clientes Dizem</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Avaliações reais de clientes satisfeitos com nossos produtos e serviços
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="p-6 h-full bg-background/80 backdrop-blur-sm border-accent/20 hover:shadow-medium transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-ocean flex items-center justify-center text-primary-foreground font-bold text-lg shrink-0">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                        <div className="flex gap-0.5 my-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < testimonial.rating
                                  ? "fill-accent text-accent"
                                  : "fill-muted text-muted"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground">{testimonial.timeAgo}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto text-center border border-accent/20">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">4.9/5.0</div>
              <div className="text-sm text-muted-foreground">Média de avaliações</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">500+</div>
              <div className="text-sm text-muted-foreground">Avaliações no Google</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
