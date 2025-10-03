import HeroFeatures from "./HeroFeatures";
import HeroCTA from "./HeroCTA";

/**
 * HeroContent Component
 * 
 * Contains the main text content, features, and CTA of the hero section.
 * This component focuses solely on the content presentation logic.
 * 
 * @returns JSX element containing the hero content
 */
const HeroContent = () => {
  return (
    <div className="text-center lg:text-right space-y-8 w-full">
      <div className="space-y-6 w-full">
        {/* Main Title */}
        <div className="space-y-4 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-2xl font-bold leading-tight text-gray-900 w-full">
            <span className="text-accent">✨</span> اصنع مدينتك{" "}
            <span className="text-accent">المستقبلية</span> بالذكاء
            الاصطناعي <span className="text-accent">✨</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            منصة تعليمية رائدة تهدف إلى إعداد جيل المستقبل من خلال تعليم
            البرمجة والذكاء الاصطناعي بأسلوب ممتع ومبسط
          </p>
        </div>
      </div>

      {/* Key Features */}
      <HeroFeatures />

      {/* CTA Section */}
      <HeroCTA />
    </div>
  );
};

export default HeroContent;
