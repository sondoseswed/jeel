import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

/**
 * PricingCardProps Interface
 * 
 * Defines the props structure for the PricingCard component.
 * Follows Interface Segregation Principle by only including necessary properties.
 */
interface PricingCardProps {
  plan: {
    name: string;
    subtitle: string;
    price: string;
    currency: string;
    period: string;
    originalPrice?: string;
    features: string[];
    buttonText: string;
    popular: boolean;
    icon: React.ComponentType<any>;
    color: string;
    badge?: string;
  };
  index: number;
}

/**
 * PricingCard Component
 * 
 * Displays a single pricing plan card.
 * Follows Single Responsibility Principle by only handling pricing card presentation.
 * 
 * @param props - PricingCardProps containing plan data
 * @returns JSX element containing the pricing card
 */
const PricingCard = ({ plan, index }: PricingCardProps) => {
  return (
    <Card
      className={`relative transition-all duration-500 hover:scale-105 hover:shadow-2xl group ${
        plan.popular
          ? "border-2 border-accent shadow-2xl scale-105"
          : "border border-border/50 hover:border-accent/50"
      }`}
    >
      {/* Badge */}
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
          <span
            className={`bg-gradient-to-r ${plan.color} text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg`}
          >
            {plan.badge}
          </span>
        </div>
      )}

      <CardHeader className="text-center pb-6 pt-8">
        <CardTitle className="text-2xl font-bold mb-2">
          {plan.name}
        </CardTitle>
        <CardDescription className="text-muted-foreground mb-6">
          {plan.subtitle}
        </CardDescription>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline justify-center gap-2 mb-2">
            <span className="text-5xl font-bold text-foreground">
              {plan.price}
            </span>
            <span className="text-lg text-muted-foreground">
              {plan.currency}
            </span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm text-muted-foreground">
              {plan.period}
            </span>
            {plan.originalPrice && (
              <span className="text-sm line-through text-muted-foreground">
                {plan.originalPrice} {plan.currency}
              </span>
            )}
          </div>
          {plan.originalPrice && (
            <div className="mt-2">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                وفر{" "}
                {parseInt(plan.originalPrice) - parseInt(plan.price)}{" "}
                {plan.currency}
              </span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="px-6 pb-8">
        {/* Features */}
        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-green-600" />
              </div>
              <span className="text-sm text-muted-foreground leading-relaxed">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Button
          className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
            plan.popular
              ? `bg-gradient-to-r ${plan.color} hover:opacity-90 text-white shadow-lg hover:shadow-xl`
              : "bg-foreground hover:bg-foreground/90 text-background"
          }`}
        >
          {plan.buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
