import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  screenshot: string;
  rating: number;
}

const TestimonialCard = ({ name, location, screenshot, rating }: TestimonialCardProps) => {
  return (
    <Card className="testimonial-card relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
      {/* WhatsApp Screenshot */}
      <div className="relative">
        <img
          src={screenshot}
          alt={`WhatsApp testimonial from ${name}`}
          className="w-full h-auto object-cover rounded-t-lg"
        />
      </div>

      {/* Author info */}
      <div className="p-6 text-center">
        <div className="flex gap-1 mb-3 justify-center">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-accent text-accent" />
          ))}
        </div>
        <p className="font-bold text-foreground mb-1">
          {name}
        </p>
        <p className="text-sm text-muted-foreground">
          {location}
        </p>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </Card>
  );
};

export default TestimonialCard;
