import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Phone } from "lucide-react";

const stores = [
  {
    id: "freguesia",
    name: "Zoke - Freguesia",
    whatsapp: "5521971006480",
  },
  {
    id: "millennium",
    name: "Zoke - Barra da Tijuca (Shopping Millennium)",
    whatsapp: "5521993843116",
  },
];

const products = [
  { id: "biquini", name: "Biquíni" },
  { id: "maio", name: "Maiô" },
  { id: "saida-praia", name: "Saída de Praia" },
  { id: "fitness", name: "Moda Fitness" },
  { id: "acessorios", name: "Acessórios" },
  { id: "outros", name: "Outros" },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    store: "",
    product: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.store || !formData.product || !formData.message) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    const selectedStore = stores.find((s) => s.id === formData.store);
    const selectedProduct = products.find((p) => p.id === formData.product);
    
    if (!selectedStore) {
      toast.error("Por favor, selecione uma loja");
      return;
    }

    const whatsappMessage = encodeURIComponent(
      `Olá! Meu nome é ${formData.name}.\n\n` +
      `📦 Produto de interesse: ${selectedProduct?.name}\n` +
      `📧 Email: ${formData.email}\n` +
      `📱 Telefone: ${formData.phone}\n\n` +
      `Mensagem:\n${formData.message}`
    );

    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${selectedStore.whatsapp}&text=${whatsappMessage}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast.success("Abrindo WhatsApp para continuar a conversa!");
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      store: "",
      product: "",
      message: "",
    });
  };

  return (
    <section id="contact-form" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-foreground">
              Entre em Contato
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Visite uma de nossas lojas ou entre em contato conosco!
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 md:p-8 shadow-soft">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground">
              Envie sua Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome completo"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(21) 99999-9999"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="seu@email.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="store">Loja de Preferência *</Label>
                  <Select value={formData.store} onValueChange={(value) => setFormData({ ...formData, store: value })}>
                    <SelectTrigger id="store">
                      <SelectValue placeholder="Selecione uma loja" />
                    </SelectTrigger>
                    <SelectContent>
                      {stores.map((store) => (
                        <SelectItem key={store.id} value={store.id}>
                          {store.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="product">Produto de Interesse *</Label>
                  <Select value={formData.product} onValueChange={(value) => setFormData({ ...formData, product: value })}>
                    <SelectTrigger id="product">
                      <SelectValue placeholder="Selecione um produto" />
                    </SelectTrigger>
                    <SelectContent>
                      {products.map((product) => (
                        <SelectItem key={product.id} value={product.id}>
                          {product.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Como podemos ajudar você?"
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full md:w-auto">
                <Phone className="w-5 h-5 mr-2" />
                Enviar via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
