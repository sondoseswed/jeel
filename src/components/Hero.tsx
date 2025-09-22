import { Button } from "@/components/ui/button";
import { Star, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5"></div>
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-right space-y-8">
            <div className="space-y-4">
              <p className="text-accent font-semibold text-lg">#من بدري</p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                وقت مفيد على <span className="hero-text-gradient">التابلت</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                خلي وقت اطفالك في الصيف على التابلت وقت فائدة، يتعلمون فيه برمجة وذكاء اصطناعي من عمر ٩ سنوات باسلوب ممتع.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8">
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-right">
                  <p className="font-semibold text-sm">حصص برمجة اونلاين</p>
                  <p className="text-xs text-muted-foreground">من البيت</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div className="text-right">
                  <p className="font-semibold text-sm">شهادات من STEM.org</p>
                  <p className="text-xs text-muted-foreground">العالمية</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="w-12 h-12 rounded-lg bg-ring/10 flex items-center justify-center">
                  <Star className="w-6 h-6 text-ring" />
                </div>
                <div className="text-right">
                  <p className="font-semibold text-sm">مدربين برمجة</p>
                  <p className="text-xs text-muted-foreground">منهجية هارفارد</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                سجل في المنصة
              </Button>
              <p className="text-sm text-muted-foreground">
                والسعر؟ مناسب جدًا ومعقول لكل عائلة 👪
              </p>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden city-glow">
              <img 
                src={heroImage} 
                alt="أطفال يتعلمون البرمجة" 
                className="w-full h-auto object-cover"
              />
              {/* Floating elements */}
              <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce">
                JS
              </div>
              <div className="absolute top-20 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce delay-200">
                AI
              </div>
              <div className="absolute bottom-20 right-8 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce delay-500">
                Python
              </div>
            </div>
            
            {/* Stats floating cards */}
            <div className="absolute -top-8 -left-8 bg-white rounded-2xl p-4 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">طالب</div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-4 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-ring">95%</div>
                <div className="text-sm text-muted-foreground">رضا الأهالي</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;