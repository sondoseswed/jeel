/**
 * TestimonialsStats Component
 * 
 * Displays the statistics section of the testimonials.
 * Follows Single Responsibility Principle by only handling stats presentation.
 * 
 * @returns JSX element containing the testimonials statistics
 */
const TestimonialsStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
      <div className="text-center">
        <div className="text-3xl font-bold text-accent mb-2">500+</div>
        <div className="text-muted-foreground">طالب مسجل</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-ring mb-2">95%</div>
        <div className="text-muted-foreground">رضا الأهالي</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
        <div className="text-muted-foreground">دعم فني</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-accent mb-2">100+</div>
        <div className="text-muted-foreground">شهادة صدرت</div>
      </div>
    </div>
  );
};

export default TestimonialsStats;
