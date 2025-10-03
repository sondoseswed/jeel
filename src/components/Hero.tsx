import HeroBackground from "./hero/HeroBackground";
import HeroContent from "./hero/HeroContent";
import HeroImage from "./hero/HeroImage";

/**
 * Hero Component
 * 
 * Main hero section component that orchestrates the hero layout.
 * Follows Single Responsibility Principle by delegating specific concerns
 * to specialized sub-components.
 * 
 * @returns JSX element containing the complete hero section
 */
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 mt-4 sm:mt-0">
      {/* Background elements */}
      <HeroBackground />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <HeroContent />

          {/* Hero image */}
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;
