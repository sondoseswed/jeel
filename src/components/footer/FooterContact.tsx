import { Phone, Mail, MapPin } from "lucide-react";

/**
 * FooterContact Component
 * 
 * Displays the contact information in the footer.
 * Follows Single Responsibility Principle by only handling contact information display.
 * 
 * @returns JSX element containing the contact information
 */
const FooterContact = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-foreground">تواصل معنا</h3>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-accent flex-shrink-0" />
          <span className="text-muted-foreground">+966 50 123 4567</span>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-accent flex-shrink-0" />
          <span className="text-muted-foreground">info@jeelcode.com</span>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
          <span className="text-muted-foreground">
            الرياض، المملكة العربية السعودية
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
