import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

/**
 * MobileMenu Component
 * 
 * Handles the mobile navigation menu with toggle functionality.
 * Follows Single Responsibility Principle by only managing mobile menu state and display.
 * 
 * @returns JSX element containing the mobile menu
 */
const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "الرئيسية", href: "#hero" },
    { name: "لماذا جيل كود", href: "#why" },
    { name: "رحلة التعلم", href: "#journey" },
    { name: "الاسعار", href: "#pricing" },
    { name: "الشهادات", href: "#certificate" },
    { name: "آراء الأهالي", href: "#testimonials" },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 rounded-lg hover:bg-accent/10 transition-colors"
      >
        {isMenuOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <Menu className="w-5 h-5" />
        )}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-6 border-t border-border bg-white/95 backdrop-blur-md">
          <nav className="flex flex-col gap-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-3 text-lg"
              >
                {item.name}
              </a>
            ))}
            <div className="flex gap-2 pt-4 border-t">
              <Button
                size="default"
                variant="outline"
                className="flex-1 rounded-full py-2"
              >
                تسجيل دخول
              </Button>
              <Button
                size="default"
                className="flex-1 bg-accent hover:bg-accent/90 text-white rounded-full py-2"
              >
                سجل الآن
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
