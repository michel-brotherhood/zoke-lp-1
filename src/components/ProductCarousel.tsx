import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Import all product images
import maiosGotaVinho from "@/assets/products/maios-gota-vinho.webp";
import argolaMarinho from "@/assets/products/argola-borboleta-marinho.webp";
import bojoCoqueiro from "@/assets/products/bojo-borboleta-coqueiro.webp";
import cortinaoZebra from "@/assets/products/cortinao-zebra.webp";
import cortinaoHotpant from "@/assets/products/cortinao-hotpant-azul.webp";
import cortininhaOnca from "@/assets/products/cortininha-onca.webp";
import luxCalca from "@/assets/products/lux-calca-azul.webp";
import luxTopFixo from "@/assets/products/lux-top-fixo-preto.webp";
import maioGotaVerde from "@/assets/products/maio-gota-verde.webp";
import maioRecorteVerde from "@/assets/products/maio-recorte-verde.webp";

type Product = {
  id: number;
  name: string;
  category: string;
  subcategory: string;
  image: string;
  description: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Maiô Gota Vinho Trilobal",
    category: "Maiô Gota / Recorte",
    subcategory: "MaiôGota",
    image: maiosGotaVinho,
    description: "Maiô com recorte gota em tecido trilobal premium, ideal para quem busca elegância e conforto"
  },
  {
    id: 2,
    name: "Argola Borboleta Marinho",
    category: "Argola",
    subcategory: "Argola_Borboleta",
    image: argolaMarinho,
    description: "Biquíni com detalhes de argola e amarração borboleta em azul marinho clássico"
  },
  {
    id: 3,
    name: "Bojo Borboleta Estampa Coqueiro",
    category: "Bojo",
    subcategory: "Bojo_Borboleta_EstampaCoqueiro",
    image: bojoCoqueiro,
    description: "Top com bojo estruturado e estampa tropical de coqueiros"
  },
  {
    id: 4,
    name: "Cortinão Borboleta Zebra",
    category: "Cortinão",
    subcategory: "Cortinão_Borboleta_EstampaZebra",
    image: cortinaoZebra,
    description: "Cortinão com estampa de zebra sofisticada e amarração borboleta"
  },
  {
    id: 5,
    name: "Cortinão Hot Pant Azul",
    category: "Cortinão",
    subcategory: "Cortinão_HotPant",
    image: cortinaoHotpant,
    description: "Hot pant de cintura alta em azul profundo para máxima cobertura"
  },
  {
    id: 6,
    name: "Cortininha Borboleta Onça",
    category: "Cortininha",
    subcategory: "Cortininha_Borboleta_EstampaOnça",
    image: cortininhaOnca,
    description: "Cortininha com estampa de onça e top borboleta para um look selvagem"
  },
  {
    id: 7,
    name: "LUX Calça Cortininha Azul",
    category: "Linha LUX",
    subcategory: "LUX_Calça_Cortininha",
    image: luxCalca,
    description: "Conjunto premium com calça pantalona e top cortininha em azul elegante"
  },
  {
    id: 8,
    name: "LUX Top Fixo Tira Fina Preto",
    category: "Linha LUX",
    subcategory: "LUX_TopFixo_TiraFina",
    image: luxTopFixo,
    description: "Top fixo com tiras finas da linha premium LUX em preto clássico"
  },
  {
    id: 9,
    name: "Maiô Gota Estampa Verde",
    category: "Maiô Gota / Recorte",
    subcategory: "MaiôGota_EstampaFloral",
    image: maioGotaVerde,
    description: "Maiô com recorte gota e estampa colorida vibrante"
  },
  {
    id: 10,
    name: "Maiô Recorte Verde",
    category: "Maiô Gota / Recorte",
    subcategory: "MaiôRecorte",
    image: maioRecorteVerde,
    description: "Maiô com recortes estratégicos em verde militar sofisticado"
  }
];

const ProductCarousel = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 md:py-24 bg-background relative transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nossos Modelos
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Descubra a coleção completa de biquínis e maiôs Zoke
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {products.map((product) => (
              <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card 
                  className="overflow-hidden border-border/50 hover:shadow-medium transition-all duration-300 cursor-pointer group"
                  onClick={() => setSelectedProduct(product)}
                >
                  <CardContent className="p-0">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <Badge className="mb-3 bg-gradient-sunset text-white border-0">
                        {product.category}
                      </Badge>
                      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedProduct(null)}
          >
            <div
              className="bg-card max-w-4xl w-full rounded-2xl overflow-hidden shadow-strong animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-[3/4] md:aspect-auto">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <Badge className="mb-4 w-fit bg-gradient-sunset text-white border-0">
                    {selectedProduct.category}
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-base text-muted-foreground mb-6">
                    {selectedProduct.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-sm font-semibold text-foreground">Modelo:</span>
                    <Badge variant="secondary" className="ml-2">
                      {selectedProduct.subcategory.replace(/_/g, ' ')}
                    </Badge>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="mt-auto px-8 py-3 bg-gradient-sunset text-white rounded-full font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCarousel;
