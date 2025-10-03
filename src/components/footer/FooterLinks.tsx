/**
 * FooterLinks Component
 * 
 * Displays the quick links and programs sections in the footer.
 * Follows Single Responsibility Principle by only handling navigation links.
 * 
 * @returns JSX element containing the links sections
 */
const FooterLinks = () => {
  const quickLinks = [
    { name: "الرئيسية", href: "#hero" },
    { name: "لماذا جيل كود", href: "#why" },
    { name: "رحلة التعلم", href: "#journey" },
    { name: "الشهادات", href: "#certificate" },
    { name: "آراء الأهالي", href: "#testimonials" },
  ];

  const programs = [
    { name: "أساسيات البرمجة", href: "#" },
    { name: "الذكاء الاصطناعي للأطفال", href: "#" },
    { name: "تطوير التطبيقات", href: "#" },
    { name: "مشاريع متقدمة", href: "#" },
    { name: "الدورات الصيفية", href: "#" },
  ];

  return (
    <>
      {/* Quick Links */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-foreground">روابط سريعة</h3>
        <nav className="space-y-3">
          {quickLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-muted-foreground hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Programs */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-foreground">البرامج</h3>
        <nav className="space-y-3">
          {programs.map((program) => (
            <a
              key={program.name}
              href={program.href}
              className="block text-muted-foreground hover:text-accent transition-colors"
            >
              {program.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default FooterLinks;
