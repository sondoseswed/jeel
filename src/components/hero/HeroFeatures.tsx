import { Users, Award, Star } from "lucide-react";

/**
 * HeroFeatures Component
 * 
 * Displays the key features of the platform in a grid layout.
 * Each feature card shows an icon, title, and description.
 * 
 * @returns JSX element containing the features grid
 */
const HeroFeatures = () => {
  const features = [
    {
      icon: Users,
      title: "حصص برمجة اونلاين",
      subtitle: "من البيت",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Award,
      title: "شهادات من STEM.org",
      subtitle: "العالمية",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Star,
      title: "مدربين برمجة",
      subtitle: "منهجية هارفارد",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div
            key={index}
            className="flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className={`w-12 h-12 rounded-lg ${feature.iconBg} flex items-center justify-center`}>
              <Icon className={`w-6 h-6 ${feature.iconColor}`} />
            </div>
            <div className="text-right">
              <p className="font-semibold text-base text-gray-900">
                {feature.title}
              </p>
              <p className="text-sm text-gray-600">{feature.subtitle}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HeroFeatures;
