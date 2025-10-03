import TestimonialsHeader from "./testimonials/TestimonialsHeader";
import TestimonialsGrid from "./testimonials/TestimonialsGrid";
import TestimonialsStats from "./testimonials/TestimonialsStats";

/**
 * Testimonials Component
 * 
 * Main testimonials component that orchestrates the testimonials layout.
 * Follows Single Responsibility Principle by delegating specific concerns
 * to specialized sub-components.
 * 
 * @returns JSX element containing the complete testimonials section
 */
const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-accent/5 to-background relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat lg:bg-fixed"
          style={{
            backgroundImage: `url('/src/assets/code8.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "scroll", // Fallback for mobile
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <TestimonialsHeader />
        <TestimonialsGrid />
        <TestimonialsStats />
      </div>
    </section>
  );
};

export default Testimonials;
