/**
 * TestimonialsHeader Component
 * 
 * Displays the header section of the testimonials section.
 * Follows Single Responsibility Principle by only handling header presentation.
 * 
 * @returns JSX element containing the testimonials header
 */
const TestimonialsHeader = () => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-6xl font-bold mb-8">
        <span className="hero-text-gradient">قصص نجاح حقيقية</span>
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        قصص حقيقية لأطفال استطاعوا تحقيق أحلامهم وتحويل أفكارهم إلى مشاريع ناجحة
      </p>
    </div>
  );
};

export default TestimonialsHeader;
