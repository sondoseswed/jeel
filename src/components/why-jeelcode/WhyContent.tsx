import FeatureCard from "./FeatureCard";
import { Brain, Clock, Gamepad2, Trophy } from "lucide-react";

/**
 * WhyContent Component
 * 
 * Displays the main content section of the why JeelCode section.
 * Follows Single Responsibility Principle by only handling content presentation.
 * 
 * @returns JSX element containing the why content
 */
const WhyContent = () => {
  const features = [
    {
      icon: Brain,
      title: "يتعلّم الذكاء الاصطناعي والبرمجة وهو يلعب",
      description: "نحول التعلم إلى متعة حقيقية",
      color: "text-accent",
    },
    {
      icon: Clock,
      title: "وقت التابلت صار للتعلّم، مو بس مشاهدة",
      description: "استثمار إيجابي لوقت الشاشة",
      color: "text-ring",
    },
    {
      icon: Gamepad2,
      title: "نبدأ مع طفلك من الصفر، ما يحتاج خبرة",
      description: "منهج مصمم للمبتدئين",
      color: "text-orange-500",
    },
    {
      icon: Trophy,
      title: "السعر مناسب جدًا ومعقول لكل عائلة",
      description: "تعليم عالي الجودة بسعر مناسب",
      color: "text-accent",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          color={feature.color}
        />
      ))}

      {/* Additional feature cards */}
      <FeatureCard
        icon={Brain}
        title="يتعلّم الذكاء الاصطناعي والبرمجة وهو يلعب"
        description="منهج تفاعلي يجمع بين المتعة والتعلم العميق"
        color="text-ring"
      />

      <FeatureCard
        icon={Trophy}
        title="نبدأ مع طفلك من الصفر، ما يحتاج خبرة"
        description="رحلة تعلم مخصصة تبدأ من المستوى المناسب لطفلك"
        color="text-orange-500"
      />
    </div>
  );
};

export default WhyContent;
