import { Star } from "lucide-react";

/**
 * PricingHeader Component
 * 
 * Displays the header section of the pricing section.
 * Follows Single Responsibility Principle by only handling header presentation.
 * 
 * @returns JSX element containing the pricing header
 */
const PricingHeader = () => {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
        <Star className="w-4 h-4" />
        خطط الأسعار
      </div>
      <h2 className="text-4xl lg:text-6xl font-bold mb-6">
        <span className="hero-text-gradient">اختر خطة طفلك</span>
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        استثمر في مستقبل طفلك مع خطط تعليمية مصممة خصيصاً لتنمية مهاراته في
        البرمجة والذكاء الاصطناعي
      </p>
    </div>
  );
};

export default PricingHeader;
