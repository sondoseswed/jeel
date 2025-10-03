import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

/**
 * FooterPartnership Component
 * 
 * Displays the partnership information in the footer.
 * Follows Single Responsibility Principle by only handling partnership display.
 * 
 * @returns JSX element containing the partnership section
 */
const FooterPartnership = () => {
  return (
    <Card className="journey-stage p-8 mb-12 text-center">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">شراكات موثوقة</h3>
        <p className="text-muted-foreground mb-6">
          نفتخر بشراكتنا مع أفضل المؤسسات التعليمية العالمية
        </p>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          <div className="flex items-center gap-2 text-accent font-semibold">
            <ExternalLink className="w-5 h-5" />
            STEM.org
          </div>
          <div className="flex items-center gap-2 text-ring font-semibold">
            <ExternalLink className="w-5 h-5" />
            Harvard CS50
          </div>
          <div className="flex items-center gap-2 text-orange-500 font-semibold">
            <ExternalLink className="w-5 h-5" />
            MIT OpenCourseWare
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FooterPartnership;
