import { Card } from "@/components/ui/card";
import child1Image from "../assets/child1.png";
import child2Image from "../assets/childe2.png";
import child3Image from "../assets/child3.png";

const SuccessStories = () => {
  return (
    <div className="mt-20 text-center">
      <p className="text-accent font-semibold text-lg mb-4">
        #قصص نجاح حقيقية
      </p>
      <h3 className="text-5xl font-bold mb-9  hero-text-gradient">قصص نجاح حقيقية</h3>
      <p className="text-xl max-w-4xl mx-auto leading-relaxed mb-12 text-muted-foreground">
        شاهد كيف غيرت جيل كود حياة أطفالنا وأعطتهم الثقة والمهارات التي يحتاجونها لمستقبلهم
      </p>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"> 
        <Card className="testimonial-card">
          <div className="text-center space-y-4">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-accent/20">
              <img
                src={child1Image}
                alt="أحمد"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-bold">أحمد - 12 سنة</h4>
            <p className="text-sm text-muted-foreground">
              "حصلت على 3 شهادات من جيل كود وصرت أبرمج تطبيقات بسيطة!"
            </p>
          </div>
        </Card>

        <Card className="testimonial-card">
          <div className="text-center space-y-4">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-ring/20">
              <img
                src={child2Image}
                alt="فاطمة"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-bold">فاطمة - 10 سنوات</h4>
            <p className="text-sm text-muted-foreground">
              "شهادتي في الذكاء الاصطناعي خلتني أفهم كيف يشتغل Siri!"
            </p>
          </div>
        </Card>

        <Card className="testimonial-card">
          <div className="text-center space-y-4">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-orange-500/20">
              <img
                src={child3Image}
                alt="سالم"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-bold">سالم - 11 سنة</h4>
            <p className="text-sm text-muted-foreground">
              "معلمتي في المدرسة انبهرت لما شافت شهادتي من STEM.org!"
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SuccessStories;
