/**
 * Navigation Component
 * 
 * Handles the desktop navigation menu.
 * Follows Single Responsibility Principle by only managing navigation links.
 * 
 * @returns JSX element containing the navigation menu
 */
const Navigation = () => {
  const navigation = [
    { name: "الرئيسية", href: "#hero" },
    { name: "لماذا جيل كود", href: "#why" },
    { name: "رحلة التعلم", href: "#journey" },
    { name: "الاسعار", href: "#pricing" },
    { name: "الشهادات", href: "#certificate" },
    { name: "آراء الأهالي", href: "#testimonials" },
  ];

  return (
    <nav className="hidden md:flex items-center gap-8">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium text-lg"
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
