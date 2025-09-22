import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "أم سارة",
      location: "الرياض",
      rating: 5,
      text: "جيل كود غيّر حياة بنتي سارة. صارت تحب البرمجة وتقضي وقتها في التعلم بدل الألعاب العادية. الشهادة من STEM.org كانت فخر كبير لها!",
      highlight: "غيّر حياة بنتي"
    },
    {
      name: "والد أحمد",
      location: "جدة",
      rating: 5,
      text: "المدربين ممتازين والمنهج واضح ومبسط. أحمد عمره 10 سنوات وصار يفهم مفاهيم الذكاء الاصطناعي! السعر معقول جداً مقارنة بالجودة.",
      highlight: "المدربين ممتازين"
    },
    {
      name: "أم لمى",
      location: "الدمام",
      rating: 5,
      text: "كنت خايفة لمى ما تقدر تتابع، بس المنهج مصمم بطريقة تدريجية ممتازة. الآن تبرمج ألعاب بسيطة وتشرح لي كيف تعمل!",
      highlight: "تبرمج ألعاب بسيطة"
    },
    {
      name: "والد فهد",
      location: "الخبر",
      rating: 5,
      text: "فهد كان دايماً على التابلت بس يلعب ألعاب. الآن وقت التابلت صار مفيد ويتعلم مهارات حقيقية. شكراً جيل كود!",
      highlight: "وقت التابلت صار مفيد"
    },
    {
      name: "أم نورا",
      location: "مكة",
      rating: 5,
      text: "المنصة سهلة الاستخدام والدعم الفني ممتاز. نورا تحب حصص البرمجة وتتطلع للشهادة الجديدة كل شهر. استثمار حقيقي في مستقبلها.",
      highlight: "استثمار حقيقي في مستقبلها"
    },
    {
      name: "والد يوسف",
      location: "المدينة",
      rating: 5,
      text: "يوسف صار يساعدني في شغلي! يفهم مفاهيم التقنية ويقترح حلول بسيطة. جيل كود فتح له أفاق جديدة في التفكير والإبداع.",
      highlight: "فتح له أفاق جديدة"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            قالوا عن <span className="hero-text-gradient">جيل كود</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            آراء الأمهات والآباء الذين اختاروا جيل كود لأطفالهم
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="testimonial-card relative">
              {/* Quote icon */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-accent" />
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Testimonial text */}
              <blockquote className="text-center mb-6 leading-relaxed">
                <p className="text-foreground">
                  "{testimonial.text}"
                </p>
                <div className="mt-4 p-3 bg-accent/5 rounded-lg">
                  <p className="text-accent font-semibold text-sm">
                    "{testimonial.highlight}"
                  </p>
                </div>
              </blockquote>
              
              {/* Author */}
              <div className="text-center border-t pt-4">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
              
              {/* Decorative element */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-accent/10 to-transparent rounded-tl-3xl"></div>
            </Card>
          ))}
        </div>

        {/* Summary stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">500+</div>
            <div className="text-muted-foreground">طالب مسجل</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-ring mb-2">95%</div>
            <div className="text-muted-foreground">رضا الأهالي</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
            <div className="text-muted-foreground">دعم فني</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">100+</div>
            <div className="text-muted-foreground">شهادة صدرت</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;