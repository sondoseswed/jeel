import { Card } from "@/components/ui/card";

/**
 * StageCardProps Interface
 * 
 * Defines the props structure for the StageCard component.
 * Follows Interface Segregation Principle by only including necessary properties.
 */
interface StageCardProps {
  stage: {
    id: number;
    title: string;
    titleAr: string;
    subtitle: string;
    description: string;
    icon: React.ComponentType<any>;
    logos: string[];
    duration: string;
    age: string;
    skills: string[];
    color: string;
    bgColor: string;
    borderColor: string;
  };
  index: number;
  isCompleted?: boolean;
  isCurrent?: boolean;
}

/**
 * StageCard Component
 * 
 * Displays a single learning stage card with all its details.
 * Follows Single Responsibility Principle by only handling stage card presentation.
 * 
 * @param props - StageCardProps containing stage data and state
 * @returns JSX element containing the stage card
 */
const StageCard = ({ stage, index, isCompleted = false, isCurrent = false }: StageCardProps) => {
  const Icon = stage.icon;
  const isUpcoming = !isCompleted && !isCurrent;

  return (
    <div className="relative w-[75%] justify-center items-center mx-auto">
      <Card
        className={`${stage.bgColor} ${
          stage.borderColor
        } border-2 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105 ${
          isCompleted
            ? "ring-2 ring-green-200"
            : isCurrent
            ? "ring-2 ring-blue-200"
            : "ring-2 ring-orange-200"
        }`}
      >
        {/* Full Width Two Column Layout */}
        <div className="flex flex-col lg:flex-row min-h-[160px]">
          {/* Left Column - Details */}
          <div className="flex-1 p-4">
            {/* Header with Icon and Title */}
            <div className="flex items-center gap-3 mb-3">
              <div className={`bg-gradient-to-r ${stage.color} p-2 rounded-lg text-white`}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base lg:text-lg font-bold text-gray-800 mb-1">
                  {stage.title}
                </h3>
                <p className="text-xs lg:text-sm text-gray-600 font-medium">
                  {stage.titleAr}
                </p>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-xs lg:text-sm text-gray-600 font-medium mb-2">
              {stage.subtitle}
            </p>

            {/* Description */}
            <p className="text-xs lg:text-sm text-gray-700 leading-relaxed mb-3 line-clamp-2">
              {stage.description}
            </p>

            {/* Age & Duration */}
            <div className="flex gap-1 mb-3">
              <span className="px-2 py-1 bg-[#0BD9ef] bg-opacity-20 text-[#15294f] text-xs rounded-full font-medium">
                {stage.age}
              </span>
              <span className="px-2 py-1 bg-[#fb2d87] bg-opacity-20 text-[#15294f] text-xs rounded-full font-medium">
                {stage.duration}
              </span>
            </div>

            {/* Skills */}
            <div>
              <h4 className="font-semibold mb-2 text-xs lg:text-sm text-gray-800">
                المهارات المكتسبة:
              </h4>
              <div className="flex flex-wrap gap-1">
                {stage.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 bg-[#B3B3B3] bg-opacity-20 text-[#666666] text-xs rounded-full border border-[#B3B3B3] hover:bg-[#0BD9ef] hover:bg-opacity-20 hover:text-[#15294f] transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Single Logo */}
          <div className="lg:w-48 p-3 flex flex-col justify-center items-center relative">
            {stage.logos && stage.logos.length > 0 ? (
              <div className="flex items-center justify-center">
                <img
                  src={stage.logos[0]}
                  alt={`${stage.title} logo`}
                  className="w-36 h-36 object-contain drop-shadow-lg hover:drop-shadow-xl transition-all duration-300 hover:scale-110 filter brightness-110 contrast-110"
                />
              </div>
            ) : (
              <div className="text-center text-gray-500">
                <Icon className="w-24 h-24 mx-auto opacity-50" />
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StageCard;
