/**
 * FooterBottom Component
 * 
 * Displays the bottom section of the footer with legal links and copyright.
 * Follows Single Responsibility Principle by only handling footer bottom content.
 * 
 * @returns JSX element containing the footer bottom section
 */
const FooterBottom = () => {
  return (
    <div className="border-t border-border pt-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-accent transition-colors">
            سياسة الخصوصية
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            شروط الاستخدام
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            الدعم الفني
          </a>
        </div>

        <div className="text-sm text-muted-foreground">
          © 2024 جيل كود. جميع الحقوق محفوظة.
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
