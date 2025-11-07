import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

export interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "pink" | "default";
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant = "pink", asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    const gradientClass = variant === "pink" 
      ? "from-[#f27121] via-[#e94057] to-[#8a2387]"
      : "from-[hsl(217,33%,16%)] via-[hsl(217,33%,32%)] to-[hsl(217,33%,16%)]";
    
    return (
      <button
        ref={ref}
        className={cn(
          "relative group border-none bg-transparent p-0 outline-none cursor-pointer font-mono font-light uppercase text-base",
          className
        )}
        {...props}
      >
        <span className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 rounded-lg transform translate-y-0.5 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-[250ms] group-active:translate-y-px" />
        
        <span className={cn(
          "absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-l",
          variant === "default" && "from-[hsl(217,33%,16%)] via-[hsl(217,33%,32%)] to-[hsl(217,33%,16%)]"
        )} />

        <div className={cn(
          "relative flex items-center justify-between py-3 px-6 text-lg text-white rounded-lg transform -translate-y-1 gap-3 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-[250ms] group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110",
          `bg-gradient-to-r ${gradientClass}`
        )}>
          <span className="select-none">{children}</span>
          
          <ChevronRight className="w-5 h-5 ml-2 -mr-1 transition duration-250 group-hover:translate-x-1" />
        </div>
      </button>
    );
  }
);

GradientButton.displayName = "GradientButton";

export { GradientButton };
