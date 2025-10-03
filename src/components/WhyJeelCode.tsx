import WhyHeader from "./why-jeelcode/WhyHeader";
import WhyContent from "./why-jeelcode/WhyContent";

/**
 * WhyJeelCode Component
 * 
 * Main why JeelCode component that orchestrates the why section layout.
 * Follows Single Responsibility Principle by delegating specific concerns
 * to specialized sub-components.
 * 
 * @returns JSX element containing the complete why JeelCode section
 */
const WhyJeelCode = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/5 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header with background image */}
        <WhyHeader />

        {/* All 6 Cards in One Grid */}
        <WhyContent />
      </div>
    </section>
  );
};

export default WhyJeelCode;
