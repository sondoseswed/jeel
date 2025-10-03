import { Flag } from "lucide-react";

/**
 * StartFlag Component
 * 
 * Displays the start flag for the learning journey.
 * Follows Single Responsibility Principle by only handling start flag presentation.
 * 
 * @returns JSX element containing the start flag
 */
const StartFlag = () => {
  return (
    <div className="w-full px-4 mb-8">
      <div className="flex justify-center">
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-pulse border-2 border-white">
          <Flag className="w-8 h-8" />
          <span className="text-xl font-bold">ابدأ هنا</span>
        </div>
      </div>
    </div>
  );
};

export default StartFlag;
