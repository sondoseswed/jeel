import { MapPin, Flag, Award } from "lucide-react";

/**
 * JourneyHeader Component
 * 
 * Displays the header section of the learning journey with title and progress indicator.
 * Follows Single Responsibility Principle by only handling header presentation.
 * 
 * @returns JSX element containing the journey header
 */
const JourneyHeader = () => {
  return (
    <div className="text-center mb-12 lg:mb-16 px-4">
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#15294f] to-[#0BD9ef] text-white px-4 py-2 lg:px-6 lg:py-3 rounded-full text-xs lg:text-sm font-bold mb-4 lg:mb-6 shadow-lg">
        <MapPin className="w-4 h-4 lg:w-5 lg:h-5" />
        رحلة التعلم المتدرجة
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6">
        <span className=" hero-text-gradient ">عالم من التعلم ينتظرك!</span>
      </h2>

      {/* Journey Progress Indicator */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
          <Flag className="w-4 h-4 text-green-600" />
          <span className="text-sm font-semibold text-green-700">
            البداية
          </span>
        </div>
        <div className="flex-1 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-yellow-500 rounded-full max-w-xs"></div>
        <div className="flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full">
          <Award className="w-4 h-4 text-yellow-600" />
          <span className="text-sm font-semibold text-yellow-700">
            الهدف
          </span>
        </div>
      </div>
      <p className="text-lg lg:text-xl text-[#666666] max-w-4xl mx-auto leading-relaxed mb-6 lg:mb-8">
        رحلة تعليمية متدرجة ومصممة خصيصاً لتنمية مهارات طفلك في البرمجة
        والذكاء الاصطناعي. ابدأ رحلتك اليوم واكتشف عالم الإمكانيات
        اللامحدودة!
      </p>
    </div>
  );
};

export default JourneyHeader;
