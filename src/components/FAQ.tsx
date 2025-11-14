import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Como escolher o tamanho ideal do meu biquíni?",
    answer: "Cada peça da Zoke tem uma tabela de medidas detalhada. Recomendamos medir busto, cintura e quadril e comparar com nossa tabela. Em caso de dúvida entre dois tamanhos, sugerimos o maior para maior conforto. Nossas lojas também oferecem atendimento personalizado para ajudar na escolha."
  },
  {
    question: "Qual o material dos biquínis Zoke?",
    answer: "Nossos biquínis são confeccionados em poliamida e elastano de alta qualidade, que garantem resistência ao cloro, água salgada e raios UV. O tecido é macio ao toque, seca rapidamente e mantém a cor vibrante por muito mais tempo."
  },
  {
    question: "Como cuidar do meu biquíni para ele durar mais?",
    answer: "Após o uso, lave seu biquíni com água doce e sabão neutro. Evite torcer as peças - apenas aperte levemente. Seque à sombra, nunca direto no sol ou em secadora. Não use alvejante ou amaciante. Evite sentar em superfícies ásperas como pedras e concreto."
  },
  {
    question: "Posso misturar tops e calcinhas de tamanhos diferentes?",
    answer: "Sim! A Zoke foi pensada justamente para isso. Vendemos tops e calcinhas separadamente para que você monte o conjunto perfeito para o seu corpo. Muitas clientes usam tamanhos diferentes em cima e embaixo."
  },
  {
    question: "Os biquínis têm proteção UV?",
    answer: "Sim, todos os nossos tecidos oferecem proteção UV (FPU 50+), bloqueando mais de 98% dos raios ultravioleta. Isso protege sua pele enquanto você aproveita o sol, mas sempre recomendamos o uso de protetor solar."
  },
  {
    question: "Qual a diferença entre as linhas de biquíni?",
    answer: "A Linha Clássicos do Rio traz modelos tradicionais repaginados. A Linha Cores do Verão tem estampas vibrantes e tons de neon. Já a Linha Neutra & Chique oferece cores elegantes e sofisticadas. Todas com a mesma qualidade e conforto Zoke."
  },
  {
    question: "Posso trocar se o tamanho não servir?",
    answer: "Sim! Aceitamos trocas em até 30 dias após a compra, desde que as peças estejam sem uso, com etiquetas e na embalagem original. Entre em contato com nossa equipe pelo WhatsApp para facilitar o processo."
  },
  {
    question: "Os biquínis desbotam na água do mar ou piscina?",
    answer: "Nossos biquínis são desenvolvidos com tecnologia anti-desbotamento. O tecido é tratado para resistir ao cloro e à água salgada. Seguindo os cuidados de lavagem recomendados, as cores permanecerão vibrantes por muito tempo."
  }
];

const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative elements with parallax effect */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-robin-egg-blue/10 rounded-full blur-3xl parallax-slow" />
      <div className="absolute bottom-32 left-10 w-56 h-56 bg-coral/10 rounded-full blur-3xl parallax-slower" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 parallax-text">
          <div className="flex justify-center mb-4">
            <HelpCircle className="w-12 h-12 md:w-16 md:h-16 text-robin-egg-blue" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Perguntas Frequentes
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
            Tire suas dúvidas sobre tamanhos, materiais e cuidados com seus biquínis Zoke
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gradient-to-br from-antiflash-white to-light-cyan/30 rounded-2xl px-6 border-none shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-gray-900 hover:text-robin-egg-blue py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-700 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
