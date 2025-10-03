import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, CheckCircle, Star, Globe } from "lucide-react";
import certificateImage from "@/assets/certificate-jeelcode.jpeg";
import SuccessStories from "./SuccessStories";

const Certificate = () => {
  const certificateFeatures = [
    {
      icon: Award,
      title: "معتمدة دولياً",
      description: "من منظمة STEM.org العالمية المرموقة",
    },
    {
      icon: CheckCircle,
      title: "مهارات مثبتة",
      description: "تؤكد إتقان الطفل للمهارات المطلوبة",
    },
    {
      icon: Star,
      title: "تقدير مستحق",
      description: "اعتراف بجهد وإنجاز الطفل",
    },
    {
      icon: Globe,
      title: "قبول عالمي",
      description: "معترف بها في الجامعات والمؤسسات",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-ring/5 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-lg mb-4">
            #شهادة يفتخر بها الجميع
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            <span className="hero-text-gradient">
              شهادة معتمدة من STEM.org العالمية
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            في نهاية كل دورة، يحصل أبناؤك على شهادة معتمدة تثبت المهارات التي
            اكتسبوها. شهادة حقيقية يفتخر بها طفلك ويضعها في سيرته الذاتية
            المستقبلية.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Certificate Image */}
          <div className="relative w-full">
            <div className="certificate-shine rounded-3xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm">
              <img
                src={certificateImage}
                alt="شهادة STEM.org المعتمدة"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              />

              {/* Floating badges */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-accent text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg animate-pulse">
                STEM.org
              </div>
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-ring text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg animate-pulse delay-500">
                معتمدة دولياً
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <SuccessStories />
      </div>
    </section>
  );
};

export default Certificate;
