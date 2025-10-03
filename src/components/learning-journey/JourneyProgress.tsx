import { ChevronDown } from "lucide-react";

/**
 * ConnectionArrow Component
 * 
 * Displays the connection arrow between stage cards.
 * Follows Single Responsibility Principle by only handling arrow presentation.
 * 
 * @returns JSX element containing the connection arrow
 */
export const ConnectionArrow = () => {
  return (
    <div className="flex justify-center mt-6 mb-6">
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#0BD9ef] hover:scale-110 transition-transform duration-500 animate-bounce">
        <ChevronDown className="w-6 h-6 text-[#0BD9ef] font-bold" />
      </div>
    </div>
  );
};

export default ConnectionArrow;
