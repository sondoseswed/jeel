import { Card } from "@/components/ui/card";
import { Brain, Gamepad2, Clock, Trophy } from "lucide-react";

const WhyJeelCode = () => {
  const features = [
    {
      icon: Brain,
      title: "يتعلّم الذكاء الاصطناعي والبرمجة وهو يلعب",
      description: "نحول التعلم إلى متعة حقيقية",
      color: "text-accent"
    },
    {
      icon: Clock,
      title: "وقت التابلت صار للتعلّم، مو بس مشاهدة",
      description: "استثمار إيجابي لوقت الشاشة",
      color: "text-ring"
    },
    {
      icon: Gamepad2,
      title: "نبدأ مع طفلك من الصفر، ما يحتاج خبرة",
      description: "منهج مصمم للمبتدئين",
      color: "text-orange-500"
    },
    {
      icon: Trophy,
      title: "السعر مناسب جدًا ومعقول لكل عائلة",
      description: "تعليم عالي الجودة بسعر مناسب",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-lg mb-4">#من بدري</p>
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            ليش <span className="hero-text-gradient">جيل كود</span>؟
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            كأم، أكيد تحبين تشوفين وقت أطفالك على التابلت له فايدة...
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-4 leading-relaxed">
            في جيل كود، نحول هذا الوقت لتعلّم برمجة وذكاء اصطناعي بأسلوب ممتع ومبسط، يساعدهم يكتشفون شغفهم ويستعدّون لمستقبلهم من بدري.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="journey-stage p-8 text-center group">
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Interactive Learning Paths */}
        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-6xl mx-auto">
          <Card className="journey-stage p-8 bg-gradient-to-br from-ring/10 to-ring/5">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-3xl bg-ring/20 flex items-center justify-center">
                <Brain className="w-10 h-10 text-ring" />
              </div>
              <h3 className="text-2xl font-bold">يتعلّم الذكاء الاصطناعي والبرمجة وهو يلعب</h3>
              <p className="text-muted-foreground">
                منهج تفاعلي يجمع بين المتعة والتعلم العميق
              </p>
            </div>
          </Card>

          <Card className="journey-stage p-8 bg-gradient-to-br from-orange-500/10 to-accent/5">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-3xl bg-orange-500/20 flex items-center justify-center">
                <Trophy className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold">نبدأ مع طفلك من الصفر، ما يحتاج خبرة</h3>
              <p className="text-muted-foreground">
                رحلة تعلم مخصصة تبدأ من المستوى المناسب لطفلك
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyJeelCode;