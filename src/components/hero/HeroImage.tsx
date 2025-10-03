import heroImage from "@/assets/hero-learning.jpg";

/**
 * HeroImage Component
 * 
 * Displays the main hero image with floating elements and statistics.
 * Handles all image-related presentation logic.
 * 
 * @returns JSX element containing the hero image section
 */
const HeroImage = () => {
  return (
    <div className="relative">
      <div className="relative rounded-3xl overflow-hidden city-glow">
        <img
          src={heroImage}
          alt="أطفال يتعلمون البرمجة"
          className="w-full h-auto object-cover"
        />
        {/* Floating elements */}
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-orange-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold animate-bounce">
          JS
        </div>
        <div className="absolute top-12 sm:top-20 left-2 sm:left-4 bg-pink-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold animate-bounce delay-200">
          AI
        </div>
        <div className="absolute bottom-12 sm:bottom-20 right-4 sm:right-8 bg-cyan-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold animate-bounce delay-500">
          Python
        </div>
      </div>

      {/* Stats floating cards */}
      <div className="absolute -top-4 sm:-top-8 -left-4 sm:-left-8 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <div className="text-center">
          <div className="text-lg sm:text-2xl font-bold text-blue-600">
            500+
          </div>
          <div className="text-xs sm:text-sm text-gray-600">طالب</div>
        </div>
      </div>

      <div className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <div className="text-center">
          <div className="text-lg sm:text-2xl font-bold text-green-600">
            95%
          </div>
          <div className="text-xs sm:text-sm text-gray-600">
            رضا الأهالي
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
