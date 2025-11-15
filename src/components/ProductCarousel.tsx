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
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useScrollFade } from "@/hooks/useScrollFade";
import { MessageCircle, ZoomIn, X } from "lucide-react";

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
import tqcAsaDeltaBranco from "@/assets/products/tqc-asa-delta-branco.webp";
import meiaTacaLacoColorida from "@/assets/products/meia-taca-laco-colorida.webp";
import meiaTacaTiraFinaFloral from "@/assets/products/meia-taca-tira-fina-floral.webp";
import meiaTacaSunguiniAzul from "@/assets/products/meia-taca-sunguini-azul.webp";
import fixoTiraFinaTurquesa from "@/assets/products/fixo-tira-fina-turquesa.webp";
import tqcBorboletaVerde from "@/assets/products/tqc-borboleta-verde.webp";
import tqcTiraFinaVerde from "@/assets/products/tqc-tira-fina-verde.webp";
import topOmbroTelha from "@/assets/products/top-ombro-telha.webp";

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
  },
  {
    id: 11,
    name: "TQC Asa Delta Branco",
    category: "Linha TQC",
    subcategory: "TQC_AsaDelta",
    image: tqcAsaDeltaBranco,
    description: "Biquíni asa delta branco clássico da linha TQC"
  },
  {
    id: 12,
    name: "Meia Taça Laço Estampa Colorida",
    category: "Meia Taça",
    subcategory: "MeiaTaça_Laço_EstampaColorida",
    image: meiaTacaLacoColorida,
    description: "Meia taça com laço e estampa tribal colorida vibrante"
  },
  {
    id: 13,
    name: "Meia Taça Tira Fina Estampa Floral",
    category: "Meia Taça",
    subcategory: "MeiaTaça_TiraFina_EstampaFloral",
    image: meiaTacaTiraFinaFloral,
    description: "Meia taça com tiras finas e estampa floral tropical"
  },
  {
    id: 14,
    name: "Meia Taça Sunguini Azul",
    category: "Meia Taça",
    subcategory: "MeiaTaça_Sunguini",
    image: meiaTacaSunguiniAzul,
    description: "Meia taça sunguini em azul marinho com bojo estruturado"
  },
  {
    id: 15,
    name: "Fixo Tira Fina Turquesa",
    category: "Fixo",
    subcategory: "Fixo_TiraFina",
    image: fixoTiraFinaTurquesa,
    description: "Top fixo com tiras finas em turquesa vibrante"
  },
  {
    id: 16,
    name: "TQC Borboleta Estampa Verde",
    category: "Linha TQC",
    subcategory: "TQC_Borboleta",
    image: tqcBorboletaVerde,
    description: "Biquíni borboleta com estampa verde e dourada da linha TQC"
  },
  {
    id: 17,
    name: "TQC Tira Fina Verde",
    category: "Linha TQC",
    subcategory: "TQC_TiraFina",
    image: tqcTiraFinaVerde,
    description: "Top com tiras finas em verde militar da linha TQC"
  },
  {
    id: 18,
    name: "Top Ombro Borboleta Telha",
    category: "Top Ombro",
    subcategory: "TopOmbro_Borboleta_Trilobal",
    image: topOmbroTelha,
    description: "Top ombro assimétrico em telha com tecido trilobal"
  }
];

const ProductCarousel = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const { ref, isVisible } = useScrollAnimation();
  const { elementRef: fadeRef, isVisible: isFadeVisible } = useScrollFade();

  return (
    <section
      ref={(node) => {
        (ref as React.MutableRefObject<HTMLElement | null>).current = node;
        (fadeRef as React.MutableRefObject<HTMLElement | null>).current = node;
      }}
      className={`py-16 md:py-24 bg-background relative scroll-fade-section ${
        isFadeVisible ? 'visible' : ''
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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
                  className="overflow-hidden border-border/50 hover:shadow-medium transition-all duration-300 group"
                >
                  <CardContent className="p-0">
                    <div className="aspect-[3/4] overflow-hidden relative group cursor-pointer">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onClick={() => setZoomedImage(product.image)}
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <ZoomIn className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    <div className="p-6" onClick={() => setSelectedProduct(product)}>
                      <Badge className="mb-3 bg-gradient-sunset text-white border-0">
                        {product.category}
                      </Badge>
                      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 cursor-pointer hover:text-primary transition-colors">
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

        {/* WhatsApp CTA */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Gostou dos nossos modelos?
            </h3>
            <p className="text-base md:text-lg text-muted-foreground">
              Entre em contato pelo WhatsApp e tire todas as suas dúvidas sobre tamanhos, disponibilidade e formas de pagamento
            </p>
          </div>
          <a
            href="https://wa.me/5511999999999?text=Olá! Vi os modelos de biquíni no site e gostaria de mais informações"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-gradient-sunset hover:shadow-glow text-white text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-full shadow-medium hover:shadow-strong transition-all duration-500 hover:scale-105 group"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              FALAR NO WHATSAPP
            </Button>
          </a>
        </div>

        {/* Zoomed Image Modal */}
        {zoomedImage && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setZoomedImage(null)}
          >
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <img
              src={zoomedImage}
              alt="Zoom"
              className="max-w-full max-h-[90vh] object-contain animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

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
                <div className="aspect-[3/4] md:aspect-auto relative group cursor-pointer">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                    onClick={(e) => {
                      e.stopPropagation();
                      setZoomedImage(selectedProduct.image);
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="w-12 h-12 text-white" />
                  </div>
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
