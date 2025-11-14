import zokeHeroBrand from "@/assets/zoke-hero-brand.webp";

const BrandSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-robin-egg-blue via-light-blue to-blue-lagoon">
      <div className="container mx-auto px-4">
        <div className="relative">
          <img
            src={zokeHeroBrand}
            alt="ZOKE - Moda Praia e Fitness"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-wheel/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-desert-sand/30 rounded-full blur-3xl" />
    </section>
  );
};

export default BrandSection;
