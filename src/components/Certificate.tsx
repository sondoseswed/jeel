import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, CheckCircle, Star, Globe } from "lucide-react";
import certificateImage from "@/assets/stem-certificate.jpg";

const Certificate = () => {
  const certificateFeatures = [
    {
      icon: Award,
      title: "معتمدة دولياً",
      description: "من منظمة STEM.org العالمية المرموقة"
    },
    {
      icon: CheckCircle,
      title: "مهارات مثبتة",
      description: "تؤكد إتقان الطفل للمهارات المطلوبة"
    },
    {
      icon: Star,
      title: "تقدير مستحق",
      description: "اعتراف بجهد وإنجاز الطفل"
    },
    {
      icon: Globe,
      title: "قبول عالمي",
      description: "معترف بها في الجامعات والمؤسسات"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-ring/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-lg mb-4">#شهادة يفتخر بها الجميع</p>
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            <span className="hero-text-gradient">شهادة معتمدة من STEM.org العالمية</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            في نهاية كل دورة، يحصل أبناؤك على شهادة معتمدة تثبت المهارات التي اكتسبوها. 
            شهادة حقيقية يفتخر بها طفلك ويضعها في سيرته الذاتية المستقبلية.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Certificate Image */}
          <div className="relative">
            <div className="certificate-shine rounded-3xl p-8 backdrop-blur-sm">
              <img 
                src={certificateImage} 
                alt="شهادة STEM.org المعتمدة" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                STEM.org
              </div>
              <div className="absolute -bottom-4 -left-4 bg-ring text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse delay-500">
                معتمدة دولياً
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certificateFeatures.map((feature, index) => (
                <Card key={index} className="journey-stage p-6 text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent/10 to-ring/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-bold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>

            {/* Certificate Details */}
            <Card className="journey-stage p-8 bg-gradient-to-br from-ring/5 to-accent/5">
              <h3 className="text-2xl font-bold mb-6 text-center">معلومات الشهادة</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <p className="text-foreground">شهادة رسمية معتمدة من STEM.org العالمية</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <p className="text-foreground">تُصدر بعد اجتياز التقييمات النهائية</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <p className="text-foreground">تحتوي على تفاصيل المهارات المكتسبة</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <p className="text-foreground">قابلة للتحقق الإلكتروني</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <p className="text-foreground">معترف بها في المؤسسات التعليمية</p>
                </div>
              </div>
            </Card>

            {/* CTA */}
            <div className="text-center space-y-4">
              <Button size="lg" className="bg-ring hover:bg-ring/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                احصل على شهادتك المعتمدة
              </Button>
              <p className="text-sm text-muted-foreground">
                ابدأ رحلة طفلك نحو الحصول على شهادة معتمدة دولياً 🏆
              </p>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-8">قصص نجاح حقيقية</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="testimonial-card">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👦</span>
                </div>
                <h4 className="font-bold">أحمد - 12 سنة</h4>
                <p className="text-sm text-muted-foreground">
                  "حصلت على 3 شهادات من جيل كود وصرت أبرمج تطبيقات بسيطة!"
                </p>
              </div>
            </Card>
            
            <Card className="testimonial-card">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-ring/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👧</span>
                </div>
                <h4 className="font-bold">فاطمة - 10 سنوات</h4>
                <p className="text-sm text-muted-foreground">
                  "شهادتي في الذكاء الاصطناعي خلتني أفهم كيف يشتغل Siri!"
                </p>
              </div>
            </Card>
            
            <Card className="testimonial-card">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-orange-500/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👦</span>
                </div>
                <h4 className="font-bold">سالم - 11 سنة</h4>
                <p className="text-sm text-muted-foreground">
                  "معلمتي في المدرسة انبهرت لما شافت شهادتي من STEM.org!"
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;