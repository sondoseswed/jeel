import code2 from "@/assets/code2.png";
import code11 from "@/assets/code11.png";

/**
 * JourneyBackground Component
 * 
 * Displays the background elements for the learning journey section.
 * Follows Single Responsibility Principle by only handling background presentation.
 * 
 * @returns JSX element containing the background elements
 */
const JourneyBackground = () => {
  return (
    <div className="absolute inset-0">
      {/* Code background images */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Code2 - Top right */}
        <img
          src={code2}
          alt="Code background"
          className="absolute top-32 right-16 w-80 h-80 opacity-25 animate-float-slow"
          style={{ animationDelay: "2s" }}
        />

        {/* Code11 - Middle left */}
        <img
          src={code11}
          alt="Code background"
          className="absolute top-1/2 left-8 w-22 h-22 opacity-20 animate-float-slow"
          style={{ animationDelay: "3s" }}
        />

        {/* Code2 - Middle right */}
        <img
          src={code2}
          alt="Code background"
          className="absolute top-1/3 right-1/4 w-16 h-16 opacity-15 animate-float-slow"
          style={{ animationDelay: "5s" }}
        />

        {/* Code11 - Bottom left */}
        <img
          src={code11}
          alt="Code background"
          className="absolute bottom-32 left-1/4 w-20 h-20 opacity-20 animate-float-slow"
          style={{ animationDelay: "6s" }}
        />
      </div>
    </div>
  );
};

export default JourneyBackground;
