import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Obrigado por se inscrever! Em breve você receberá nossas novidades.");
      setEmail("");
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-primary-foreground">
            Fique Por Dentro
          </h2>
          <p className="text-base md:text-lg text-primary-foreground/90 mb-6 md:mb-8 px-4">
            Receba em primeira mão nossas novidades, lançamentos exclusivos e ofertas especiais
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto px-4">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-background"
            />
            <Button type="submit" variant="hero" size="lg">
              Inscrever
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
