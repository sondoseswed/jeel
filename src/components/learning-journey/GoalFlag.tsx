import { Award } from "lucide-react";

/**
 * GoalFlag Component
 * 
 * Displays the goal flag for the learning journey.
 * Follows Single Responsibility Principle by only handling goal flag presentation.
 * 
 * @returns JSX element containing the goal flag
 */
const GoalFlag = () => {
  return (
    <div className="w-full px-4 mt-8">
      <div className="flex justify-center">
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-4 border-2 border-white">
          <Award className="w-8 h-8" />
          <span className="text-xl font-bold">الهدف</span>
        </div>
      </div>
    </div>
  );
};

export default GoalFlag;
