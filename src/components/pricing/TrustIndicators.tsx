import { Check, Star, Zap } from "lucide-react";

/**
 * TrustIndicators Component
 * 
 * Displays trust indicators and guarantees for the pricing section.
 * Follows Single Responsibility Principle by only handling trust indicators presentation.
 * 
 * @returns JSX element containing the trust indicators
 */
const TrustIndicators = () => {
  return (
    <div className="text-center">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">لماذا تثق في جيل كود؟</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <Check className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-right">
              <p className="font-semibold">ضمان استرداد المبلغ</p>
              <p className="text-sm text-muted-foreground">خلال 30 يوم</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <Star className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-right">
              <p className="font-semibold">شهادات معتمدة</p>
              <p className="text-sm text-muted-foreground">من STEM.org</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <Zap className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-right">
              <p className="font-semibold">دعم فني 24/7</p>
              <p className="text-sm text-muted-foreground">متاح دائماً</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustIndicators;
