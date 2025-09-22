import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Heart,
  ExternalLink
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-primary/5 pt-20 pb-8">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-ring rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">ج</span>
              </div>
              <span className="text-2xl font-bold hero-text-gradient">جيل كود</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              منصة تعليمية رائدة لتعليم البرمجة والذكاء الاصطناعي للأطفال من عمر 9 سنوات بأسلوب ممتع ومبسط.
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

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground">روابط سريعة</h3>
            <nav className="space-y-3">
              <a href="#hero" className="block text-muted-foreground hover:text-accent transition-colors">
                الرئيسية
              </a>
              <a href="#why" className="block text-muted-foreground hover:text-accent transition-colors">
                لماذا جيل كود
              </a>
              <a href="#journey" className="block text-muted-foreground hover:text-accent transition-colors">
                رحلة التعلم
              </a>
              <a href="#certificate" className="block text-muted-foreground hover:text-accent transition-colors">
                الشهادات
              </a>
              <a href="#testimonials" className="block text-muted-foreground hover:text-accent transition-colors">
                آراء الأهالي
              </a>
            </nav>
          </div>

          {/* Programs */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground">البرامج</h3>
            <nav className="space-y-3">
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors">
                أساسيات البرمجة
              </a>
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors">
                الذكاء الاصطناعي للأطفال
              </a>
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors">
                تطوير التطبيقات
              </a>
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors">
                مشاريع متقدمة
              </a>
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors">
                الدورات الصيفية
              </a>
            </nav>
          </div>

          {/* Contact */}
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
                <span className="text-muted-foreground">الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <Card className="p-4 bg-gradient-to-r from-accent/5 to-ring/5">
              <h4 className="font-semibold mb-2 text-foreground">اشترك في النشرة</h4>
              <p className="text-sm text-muted-foreground mb-3">
                احصل على آخر الأخبار والعروض الخاصة
              </p>
              <div className="flex gap-2">
                <Button size="sm" className="bg-accent hover:bg-accent/90 text-white">
                  اشترك
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Partnership */}
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

        {/* Bottom footer */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>صُنع بـ</span>
              <Heart className="w-4 h-4 text-accent fill-accent" />
              <span>في المملكة العربية السعودية</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-accent transition-colors">سياسة الخصوصية</a>
              <a href="#" className="hover:text-accent transition-colors">شروط الاستخدام</a>
              <a href="#" className="hover:text-accent transition-colors">الدعم الفني</a>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © 2024 جيل كود. جميع الحقوق محفوظة.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;