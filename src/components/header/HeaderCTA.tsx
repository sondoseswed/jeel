import { Button } from "@/components/ui/button";

/**
 * HeaderCTA Component
 * 
 * Handles the call-to-action buttons in the header.
 * Follows Single Responsibility Principle by only managing CTA functionality.
 * 
 * @returns JSX element containing the CTA buttons
 */
const HeaderCTA = () => {
  return (
    <div className="hidden md:flex items-center gap-4">
      <Button size="default" variant="outline" className="rounded-full px-6 py-2">
        تسجيل دخول
      </Button>
      <Button
        size="default"
        className="bg-accent hover:bg-accent/90 text-white rounded-full px-6 py-2"
      >
        سجل الآن
      </Button>
    </div>
  );
};

export default HeaderCTA;
