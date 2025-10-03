import code5 from "@/assets/code5.png";
import code2 from "@/assets/code2.png";
import code11 from "@/assets/code11.png";

/**
 * HeroBackground Component
 * 
 * Responsible for rendering the background elements of the hero section.
 * Follows Single Responsibility Principle by only handling background-related concerns.
 * 
 * @returns JSX element containing background image and floating code elements
 */
const HeroBackground = () => {
  return (
    <div className="absolute inset-0">
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat lg:bg-fixed"
        style={{
          backgroundImage: `url('/src/assets/code5.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "scroll", // Fallback for mobile
        }}
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />

      {/* Floating code background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Code5 - Middle left */}
        <img
          src={code5}
          alt="Code background"
          className="absolute top-1/2 left-8 w-18 h-18 opacity-20 animate-float-slow"
          style={{ animationDelay: "2s" }}
        />

        {/* Code11 - Bottom right */}
        <img
          src={code11}
          alt="Code background"
          className="absolute bottom-20 right-10 w-18 h-18 opacity-20 animate-float-slow"
          style={{ animationDelay: "3s" }}
        />

        <img
          src={code2}
          alt="Code background"
          className="absolute top-96 right-1/2 transform translate-x-1/2 w-18 h-18 opacity-20 animate-float-slow"
          style={{ animationDelay: "5s" }}
        />
      </div>
    </div>
  );
};

export default HeroBackground;
