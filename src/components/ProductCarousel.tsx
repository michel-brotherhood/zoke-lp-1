import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import argolaImg from "@/assets/products/argola-borboleta.jpg";
import bojoImg from "@/assets/products/bojo-asa-delta.jpg";
import cortininhaImg from "@/assets/products/cortininha-laco.jpg";
import meiaTacaImg from "@/assets/products/meia-taca-sunguini.jpg";
import topOmbroImg from "@/assets/products/top-ombro-borboleta.jpg";
import luxImg from "@/assets/products/lux-borboleta.jpg";

const products = [
  {
    id: 1,
    name: "Argola Borboleta",
    category: "Argola",
    subcategory: "Borboleta",
    image: argolaImg,
    price: "R$ 189,00",
    description: "Biquíni com detalhe de argola e amarração borboleta"
  },
  {
    id: 2,
    name: "Bojo Asa Delta",
    category: "Bojo",
    subcategory: "AsaDelta",
    image: bojoImg,
    price: "R$ 199,00",
    description: "Top com bojo estruturado e calcinha asa delta"
  },
  {
    id: 3,
    name: "Cortininha Laço",
    category: "Cortininha",
    subcategory: "Laço",
    image: cortininhaImg,
    price: "R$ 179,00",
    description: "Clássico cortininha com detalhe de laço lateral"
  },
  {
    id: 4,
    name: "Meia Taça Sunguini",
    category: "Meia Taça",
    subcategory: "Sunguini",
    image: meiaTacaImg,
    price: "R$ 189,00",
    description: "Meia taça com calcinha sunguini confortável"
  },
  {
    id: 5,
    name: "Top Ombro Borboleta",
    category: "Top Ombro",
    subcategory: "Borboleta",
    image: topOmbroImg,
    price: "R$ 199,00",
    description: "Top com alça de ombro e amarração borboleta"
  },
  {
    id: 6,
    name: "LUX Borboleta",
    category: "Linha LUX",
    subcategory: "Borboleta_Peça",
    image: luxImg,
    price: "R$ 249,00",
    description: "Linha premium com acabamento luxuoso e borboleta"
  }
];

const ProductCarousel = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-20 right-10 w-64 h-64 bg-coral/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-robin-egg-blue/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nossos Modelos
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore nossa coleção completa de biquínis com diferentes estilos e acabamentos
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {products.map((product) => (
              <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <Card 
                  className="overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-strong cursor-pointer bg-card"
                  onClick={() => setSelectedProduct(product)}
                >
                  <CardContent className="p-0">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex gap-2 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {product.category}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {product.subcategory}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {product.description}
                      </p>
                      <p className="text-2xl font-bold bg-gradient-sunset bg-clip-text text-transparent">
                        {product.price}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-card border-border hover:bg-muted" />
          <CarouselNext className="hidden md:flex -right-12 bg-card border-border hover:bg-muted" />
        </Carousel>

        {/* Product Detail */}
        <div className="mt-16 max-w-4xl mx-auto bg-card rounded-2xl p-8 shadow-medium border border-border/50 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-square rounded-xl overflow-hidden">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex gap-2 mb-4">
                <Badge variant="secondary">{selectedProduct.category}</Badge>
                <Badge variant="outline">{selectedProduct.subcategory}</Badge>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {selectedProduct.name}
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                {selectedProduct.description}
              </p>
              <p className="text-4xl font-bold bg-gradient-sunset bg-clip-text text-transparent mb-8">
                {selectedProduct.price}
              </p>
              <a href="#contact">
                <button className="w-full bg-gradient-sunset text-white py-4 px-8 rounded-full text-lg font-semibold shadow-medium hover:shadow-glow transition-all duration-500 hover:scale-105">
                  Consultar Disponibilidade
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
