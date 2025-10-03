import { Button } from "@/components/ui/button";

/**
 * HeroCTA Component
 * 
 * Handles the call-to-action section of the hero.
 * Includes the main CTA button and supporting text.
 * 
 * @returns JSX element containing the CTA section
 */
const HeroCTA = () => {
  const handleScrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-4 text-center lg:text-right">
      <div className="space-y-3">
        <Button
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          onClick={handleScrollToPricing}
        >
          🚀 سجل الآن - ابدأ رحلة طفلك
        </Button>

        <div className="space-y-2">
          <p className="text-base text-gray-700 font-medium">
            والسعر؟ مناسب جداً ومعقول لكل عائلة 👪
          </p>
          <p className="text-sm text-gray-600">
            شهادات معتمدة دولياً • مدربين متخصصين • دعم فني 24/7
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroCTA;
