import { MessageCircle } from "lucide-react";
import { useState } from "react";

const WhatsAppFloat = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://api.whatsapp.com/send/?phone=5521971006480"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="relative">
        {/* Tooltip - only on desktop */}
        <div
          className={`hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background px-4 py-2 rounded-lg whitespace-nowrap shadow-medium transition-all duration-300 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
          }`}
        >
          <span className="text-sm font-medium">Fale conosco!</span>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
            <div className="border-8 border-transparent border-l-foreground" />
          </div>
        </div>

        {/* Button */}
        <div className="bg-[#25D366] hover:bg-[#20BA5A] w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-medium hover:shadow-xl transition-all duration-300 hover:scale-110 animate-fade-in">
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
        </div>

        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </div>
    </a>
  );
};

export default WhatsAppFloat;
