import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const stores = [
  {
    id: 1,
    name: "Zoke - Freguesia",
    location: "Main Street",
    address: "Estrada dos Três Rios, Nº 200",
    neighborhood: "Freguesia, Rio de Janeiro - RJ",
    hours: "Seg a Sex: 10h às 19h | Sáb: 10h às 14h",
    whatsapp: "5521971006480",
    mapsUrl: "https://www.google.com/maps?q=Estrada+dos+Três+Rios,+200+Freguesia",
  },
  {
    id: 2,
    name: "Zoke - Barra da Tijuca",
    location: "Galeria Praia Shopping",
    address: "Av. Olegário Maciel, Nº 484",
    neighborhood: "Barra da Tijuca, Rio de Janeiro - RJ",
    hours: "Seg a Sex: 10h às 19h | Sáb: 10h às 17h",
    whatsapp: "5521971006480",
    mapsUrl: "https://www.google.com/maps?q=Av.+Olegário+Maciel,+484+Barra+da+Tijuca",
  },
  {
    id: 3,
    name: "Zoke - Barra da Tijuca",
    location: "Shopping Millennium",
    address: "Av. das Américas, 7707",
    neighborhood: "Barra da Tijuca, Rio de Janeiro - RJ",
    hours: "Conforme horário do shopping",
    whatsapp: "5521993843116",
    mapsUrl: "https://www.google.com/maps?q=Av.+das+Américas,+7707+Barra+da+Tijuca",
  },
];

const StoresSection = () => {
  return (
    <section id="stores" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-foreground animate-fade-in">
            Nossas Lojas
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in px-4">
            Visite uma de nossas lojas no Rio de Janeiro e conheça nossas coleções pessoalmente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {stores.map((store, index) => (
            <div
              key={store.id}
              className="bg-card rounded-lg p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-bold mb-2 text-foreground">{store.name}</h3>
              <p className="text-accent font-medium mb-4">{store.location}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p>{store.address}</p>
                    <p>{store.neighborhood}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-muted-foreground">
                  <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm">{store.hours}</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={store.mapsUrl} target="_blank" rel="noopener noreferrer">
                    <MapPin className="w-4 h-4 mr-2" />
                    Ver no Mapa
                  </a>
                </Button>

                {store.whatsapp && (
                  <Button variant="hero" size="sm" className="w-full" asChild>
                    <a
                      href={`https://api.whatsapp.com/send/?phone=${store.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Falar com a Zoke
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoresSection;
