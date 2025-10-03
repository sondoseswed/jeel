import TestimonialCard from "@/components/TestimonialCard";

/**
 * TestimonialsGrid Component
 * 
 * Displays the grid of testimonial cards.
 * Follows Single Responsibility Principle by only handling testimonials grid presentation.
 * 
 * @returns JSX element containing the testimonials grid
 */
const TestimonialsGrid = () => {
  const testimonials = [
    {
      name: "أم سارة",
      location: "الرياض",
      screenshot: "/src/assets/whatsapp1.jpeg",
      rating: 5,
    },
    {
      name: "والد أحمد",
      location: "جدة",
      screenshot: "/src/assets/whatsapp1.jpeg",
      rating: 5,
    },
    {
      name: "أم لمى",
      location: "الدمام",
      screenshot: "/src/assets/whatsapp1.jpeg",
      rating: 5,
    },
    {
      name: "والد فهد",
      location: "الخبر",
      screenshot: "/src/assets/whatsapp1.jpeg",
      rating: 5,
    },
    {
      name: "أم نورا",
      location: "مكة",
      screenshot: "/src/assets/whatsapp1.jpeg",
      rating: 5,
    },
    {
      name: "والد يوسف",
      location: "المدينة",
      screenshot: "/src/assets/whatsapp1.jpeg",
      rating: 5,
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          name={testimonial.name}
          location={testimonial.location}
          screenshot={testimonial.screenshot}
          rating={testimonial.rating}
        />
      ))}
    </div>
  );
};

export default TestimonialsGrid;
