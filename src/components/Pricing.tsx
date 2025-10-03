import { Star, Zap, Crown } from "lucide-react";
import PricingHeader from "./pricing/PricingHeader";
import PricingCard from "./pricing/PricingCard";
import TrustIndicators from "./pricing/TrustIndicators";

/**
 * Pricing Component
 * 
 * Main pricing component that orchestrates the pricing layout.
 * Follows Single Responsibility Principle by delegating specific concerns
 * to specialized sub-components.
 * 
 * @returns JSX element containing the complete pricing section
 */
const Pricing = () => {
  const plans = [
    {
      name: "الخطة الأساسية",
      subtitle: "مثالية للمبتدئين",
      price: "299",
      currency: "ريال",
      period: "شهرياً",
      originalPrice: "399",
      features: [
        "دروس تفاعلية يومية",
        "مشاريع عملية أسبوعية",
        "دعم فني 24/7",
        "شهادة إتمام",
        "وصول لمدة 30 يوم",
      ],
      buttonText: "ابدأ الآن",
      popular: false,
      icon: Star,
      color: "from-blue-500 to-blue-600",
      badge: null,
    },
    {
      name: "الخطة المتقدمة",
      subtitle: "الأكثر شعبية",
      price: "499",
      currency: "ريال",
      period: "شهرياً",
      originalPrice: "699",
      features: [
        "كل مزايا الخطة الأساسية",
        "جلسات فردية مع المدرس",
        "تقارير تقدم مفصلة",
        "مشاريع متقدمة",
        "دوات إضافية للذكاء الاصطناعي",
        "وصول لمدة 60 يوم",
      ],
      buttonText: "ابدأ الآن",
      popular: true,
      icon: Zap,
      color: "from-purple-500 to-purple-600",
      badge: "الأكثر شعبية",
    },
    {
      name: "الخطة المميزة",
      subtitle: "للمحترفين",
      price: "799",
      currency: "ريال",
      period: "شهرياً",
      originalPrice: "999",
      features: [
        "كل مزايا الخطة المتقدمة",
        "مدرس شخصي مخصص",
        "مشاريع مخصصة",
        "ورش عمل حصرية",
        "شهادات معتمدة دولياً",
        "وصول مدى الحياة",
      ],
      buttonText: "ابدأ الآن",
      popular: false,
      icon: Crown,
      color: "from-orange-500 to-orange-600",
      badge: "مميز",
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat lg:bg-fixed"
          style={{
            backgroundImage: `url('/src/assets/code6.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'scroll', // Fallback for mobile
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/75 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <PricingHeader />

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>

        {/* Trust indicators */}
        <TrustIndicators />
      </div>
    </section>
  );
};

export default Pricing;
