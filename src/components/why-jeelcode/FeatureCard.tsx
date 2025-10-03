import { Card } from "@/components/ui/card";
import { Brain, Clock, Gamepad2, Trophy } from "lucide-react";

/**
 * FeatureCardProps Interface
 * 
 * Defines the props structure for the FeatureCard component.
 * Follows Interface Segregation Principle by only including necessary properties.
 */
interface FeatureCardProps {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  color: string;
}

/**
 * FeatureCard Component
 * 
 * Displays a single feature card.
 * Follows Single Responsibility Principle by only handling feature card presentation.
 * 
 * @param props - FeatureCardProps containing feature data
 * @returns JSX element containing the feature card
 */
const FeatureCard = ({ icon: Icon, title, description, color }: FeatureCardProps) => {
  return (
    <Card className="journey-stage p-8 text-center group h-80 flex flex-col justify-center">
      <div
        className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className={`w-8 h-8 ${color}`} />
      </div>
      <h3 className="text-xl font-bold mb-4 text-foreground">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </Card>
  );
};

export default FeatureCard;
