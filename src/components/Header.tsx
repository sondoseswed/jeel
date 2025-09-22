import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "الرئيسية", href: "#hero" },
    { name: "لماذا جيل كود", href: "#why" },
    { name: "رحلة التعلم", href: "#journey" },
    { name: "الشهادات", href: "#certificate" },
    { name: "آراء الأهالي", href: "#testimonials" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-ring rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">ج</span>
            </div>
            <span className="text-xl font-bold hero-text-gradient">جيل كود</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              size="sm" 
              variant="outline"
              className="rounded-full"
            >
              تسجيل دخول
            </Button>
            <Button 
              size="sm"
              className="bg-accent hover:bg-accent/90 text-white rounded-full"
            >
              سجل الآن
            </Button>
          </div>

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
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-white/95 backdrop-blur-md">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex gap-2 pt-4 border-t">
                <Button 
                  size="sm" 
                  variant="outline"
                  className="flex-1 rounded-full"
                >
                  تسجيل دخول
                </Button>
                <Button 
                  size="sm"
                  className="flex-1 bg-accent hover:bg-accent/90 text-white rounded-full"
                >
                  سجل الآن
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;