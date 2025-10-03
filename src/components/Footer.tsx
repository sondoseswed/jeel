import FooterLogo from "./footer/FooterLogo";
import FooterLinks from "./footer/FooterLinks";
import FooterContact from "./footer/FooterContact";
import FooterPartnership from "./footer/FooterPartnership";
import FooterBottom from "./footer/FooterBottom";

/**
 * Footer Component
 * 
 * Main footer component that orchestrates the footer layout.
 * Follows Single Responsibility Principle by delegating specific concerns
 * to specialized sub-components.
 * 
 * @returns JSX element containing the complete footer
 */
const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-primary/5 pt-20 pb-8 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat lg:bg-fixed"
          style={{
            backgroundImage: `url('/src/assets/code6.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'left top', 
            backgroundAttachment: 'scroll', 
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/55" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <FooterLogo />

          {/* Links and Programs */}
          <FooterLinks />

          {/* Contact */}
          <FooterContact />
        </div>

        {/* Partnership */}
        <FooterPartnership />

        {/* Bottom footer */}
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
