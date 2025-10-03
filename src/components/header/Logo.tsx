import logo from "@/assets/promo-code.png";

/**
 * Logo Component
 * 
 * Displays the company logo with consistent styling.
 * Follows Single Responsibility Principle by only handling logo presentation.
 * 
 * @returns JSX element containing the logo
 */
const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <img src={logo} alt="جيل كود" className="w-32 h-32" />
    </div>
  );
};

export default Logo;
