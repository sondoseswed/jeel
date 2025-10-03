import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/promo-code.png";

/**
 * FooterLogo Component
 * 
 * Displays the company logo and social media links in the footer.
 * Follows Single Responsibility Principle by only handling logo and social media presentation.
 * 
 * @returns JSX element containing the logo and social media section
 */
const FooterLogo = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <img src={logo} alt="جيل كود" className="w-32 h-32" />
      </div>
      <p className="text-muted-foreground leading-relaxed">
        منصة تعليمية رائدة لتعليم البرمجة والذكاء الاصطناعي للأطفال من عمر
        9 سنوات بأسلوب ممتع ومبسط.
      </p>
      <div className="flex gap-4">
        <Button size="icon" variant="outline" className="rounded-full">
          <Facebook className="w-4 h-4" />
        </Button>
        <Button size="icon" variant="outline" className="rounded-full">
          <Twitter className="w-4 h-4" />
        </Button>
        <Button size="icon" variant="outline" className="rounded-full">
          <Instagram className="w-4 h-4" />
        </Button>
        <Button size="icon" variant="outline" className="rounded-full">
          <Youtube className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default FooterLogo;
