import Logo from "./header/Logo";
import Navigation from "./header/Navigation";
import HeaderCTA from "./header/HeaderCTA";
import MobileMenu from "./header/MobileMenu";

/**
 * Header Component
 * 
 * Main header component that orchestrates the header layout.
 * Follows Single Responsibility Principle by delegating specific concerns
 * to specialized sub-components.
 * 
 * @returns JSX element containing the complete header
 */
const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <Navigation />

          {/* CTA Button */}
          <HeaderCTA />

          {/* Mobile menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
