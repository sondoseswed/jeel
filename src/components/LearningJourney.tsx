import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Brain, Rocket, Trophy, Play, ArrowLeft } from "lucide-react";

const LearningJourney = () => {
  const stages = [
    {
      id: 1,
      title: "Prompt Engineer",
      subtitle: "بناء خريطة المدينة والأفاتار",
      description: "تعلم كيفية التواصل مع الذكاء الاصطناعي وبناء خريطة المدينة الرقمية",
      icon: Code,
      duration: "2-3 أسابيع",
      age: "8-12 سنة",
      skills: ["كتابة الأوامر", "التصميم", "التخطيط", "الإبداع"],
      color: "from-accent to-accent/80"
    },
    {
      id: 2,
      title: "Designer",
      subtitle: "تصميم الهوية البصرية للمدينة",
      description: "إنشاء الهوية البصرية والتصاميم الجذابة للمدينة الرقمية",
      icon: Brain,
      duration: "2-3 أسابيع",
      age: "8-12 سنة",
      skills: ["التصميم الجرافيكي", "الألوان", "الخطوط", "الشعارات"],
      color: "from-ring to-ring/80"
    },
    {
      id: 3,
      title: "Web Game Developer",
      subtitle: "تطوير لعبة تفاعلية",
      description: "بناء ألعاب ويب تفاعلية ومشوقة للمدينة الرقمية",
      icon: Rocket,
      duration: "3-4 أسابيع",
      age: "9-13 سنة",
      skills: ["HTML", "CSS", "JavaScript", "تصميم الألعاب"],
      color: "from-orange-500 to-orange-400"
    },
    {
      id: 4,
      title: "Digital Content Creator",
      subtitle: "إنشاء محتوى رقمي",
      description: "إنتاج محتوى رقمي مبدع من فيديوهات وصور ونصوص",
      icon: Trophy,
      duration: "2-3 أسابيع",
      age: "9-13 سنة",
      skills: ["إنتاج الفيديو", "التصوير", "الكتابة", "المونتاج"],
      color: "from-purple-500 to-purple-400"
    },
    {
      id: 5,
      title: "Data Detective",
      subtitle: "تحليل البيانات والإحصائيات",
      description: "تحليل البيانات واكتشاف الأنماط والمعلومات المهمة",
      icon: Brain,
      duration: "3-4 أسابيع",
      age: "10-14 سنة",
      skills: ["تحليل البيانات", "الإحصاء", "الرسوم البيانية", "التنبؤ"],
      color: "from-blue-500 to-blue-400"
    },
    {
      id: 6,
      title: "AI Engineer",
      subtitle: "تطوير أنظمة ذكية",
      description: "بناء أنظمة ذكاء اصطناعي وتدريب النماذج الذكية",
      icon: Code,
      duration: "4-5 أسابيع",
      age: "11-15 سنة",
      skills: ["التعلم الآلي", "الشبكات العصبية", "Python", "TensorFlow"],
      color: "from-green-500 to-green-400"
    },
    {
      id: 7,
      title: "Healthcare Provider",
      subtitle: "تطوير Chatbot صحي",
      description: "إنشاء مساعد ذكي للرعاية الصحية وتقديم النصائح الطبية",
      icon: Rocket,
      duration: "3-4 أسابيع",
      age: "11-15 سنة",
      skills: ["Chatbot", "الرعاية الصحية", "NLP", "قواعد البيانات الطبية"],
      color: "from-red-500 to-red-400"
    },
    {
      id: 8,
      title: "Cybersecurity Specialist",
      subtitle: "حماية المدينة الرقمية",
      description: "حماية المدينة من التهديدات الرقمية وضمان الأمان السيبراني",
      icon: Trophy,
      duration: "3-4 أسابيع",
      age: "12-16 سنة",
      skills: ["الأمان السيبراني", "التشفير", "كشف التهديدات", "الحماية"],
      color: "from-yellow-500 to-yellow-400"
    },
    {
      id: 9,
      title: "Financial Manager",
      subtitle: "إدارة الميزانية المالية",
      description: "إدارة الأموال والاستثمارات وتخطيط الميزانيات المالية",
      icon: Brain,
      duration: "3-4 أسابيع",
      age: "12-16 سنة",
      skills: ["إدارة المال", "الاستثمار", "التخطيط المالي", "المحاسبة"],
      color: "from-teal-500 to-teal-400"
    },
    {
      id: 10,
      title: "Entrepreneur",
      subtitle: "إنشاء مشاريع مبتكرة",
      description: "تطوير أفكار مشاريع جديدة وبناء خطط العمل والتسويق",
      icon: Rocket,
      duration: "4-5 أسابيع",
      age: "13-17 سنة",
      skills: ["ريادة الأعمال", "خطط العمل", "التسويق", "الابتكار"],
      color: "from-indigo-500 to-indigo-400"
    },
    {
      id: 11,
      title: "Urban Planner",
      subtitle: "تخطيط المدينة النهائي",
      description: "تخطيط وتطوير المدينة المستقبلية بكل تفاصيلها العمرانية",
      icon: Code,
      duration: "4-5 أسابيع",
      age: "13-17 سنة",
      skills: ["التخطيط العمراني", "التصميم المعماري", "البيئة المستدامة", "النقل"],
      color: "from-pink-500 to-pink-400"
    },
    {
      id: 12,
      title: "Mayor",
      subtitle: "رئاسة المدينة المستقبلية",
      description: "قيادة المدينة الرقمية وإدارة جميع الأنظمة والخدمات المختلفة",
      icon: Trophy,
      duration: "5-6 أسابيع",
      age: "14-18 سنة",
      skills: ["القيادة", "إدارة المشاريع", "اتخاذ القرار", "الرؤية الاستراتيجية"],
      color: "from-accent to-ring"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-ring/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            رحلة التعلم في <span className="hero-text-gradient">جيل كود</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            رحلة تعليمية متدرجة ومصممة خصيصاً لتنمية مهارات طفلك في البرمجة والذكاء الاصطناعي
          </p>
        </div>

        {/* Learning Path */}
        <div className="max-w-6xl mx-auto">
          {stages.map((stage, index) => (
            <div key={stage.id} className="relative mb-12 last:mb-0">
              {/* Connecting line */}
              {index < stages.length - 1 && (
                <div className="absolute right-8 top-32 w-0.5 h-24 bg-journey-path opacity-60 z-0"></div>
              )}
              
              <div className={`grid lg:grid-cols-12 gap-8 items-center ${index % 2 === 1 ? 'lg:direction-reverse' : ''}`}>
                {/* Stage Number & Icon */}
                <div className="lg:col-span-2 text-center lg:order-1">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-3xl bg-gradient-to-br ${stage.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <stage.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="stage-number text-4xl font-bold">
                    {stage.id.toString().padStart(2, '0')}
                  </div>
                </div>

                {/* Stage Content */}
                <div className="lg:col-span-10 lg:order-2">
                  <Card className="journey-stage p-8 relative overflow-hidden group">
                    {/* Background decoration */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${stage.color} opacity-10 rounded-full -translate-y-16 translate-x-16`}></div>
                    
                    <div className="relative z-10">
                      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                        {/* Main content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <h3 className="text-2xl lg:text-3xl font-bold text-foreground">{stage.title}</h3>
                            <div className="flex gap-2">
                              <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">
                                {stage.age}
                              </span>
                              <span className="px-3 py-1 bg-ring/10 text-ring text-xs rounded-full">
                                {stage.duration}
                              </span>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                            {stage.description}
                          </p>

                          {/* Skills */}
                          <div className="mb-6">
                            <h4 className="font-semibold mb-3 text-foreground">المهارات المكتسبة:</h4>
                            <div className="flex flex-wrap gap-2">
                              {stage.skills.map((skill, skillIndex) => (
                                <span 
                                  key={skillIndex}
                                  className="px-3 py-1 bg-gradient-to-r from-muted/50 to-muted/30 text-foreground text-sm rounded-full border border-border"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Action buttons */}
                          <div className="flex gap-4">
                            <Button 
                              variant="default" 
                              size="lg"
                              className="bg-accent hover:bg-accent/90 text-white rounded-full"
                            >
                              <Play className="w-4 h-4 ml-2" />
                              ابدأ المرحلة
                            </Button>
                            <Button 
                              variant="outline" 
                              size="lg"
                              className="rounded-full"
                            >
                              <ArrowLeft className="w-4 h-4 ml-2" />
                              تفاصيل أكثر
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Tracking */}
        <Card className="journey-stage p-8 mt-16 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">تتبع التقدم والإنجازات</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center">
                <Trophy className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-semibold">شهادات مرحلية</h4>
              <p className="text-sm text-muted-foreground">شهادة معتمدة بعد كل مرحلة</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-16 h-16 mx-auto bg-ring/10 rounded-2xl flex items-center justify-center">
                <Brain className="w-8 h-8 text-ring" />
              </div>
              <h4 className="font-semibold">تقييم مستمر</h4>
              <p className="text-sm text-muted-foreground">متابعة يومية لتقدم الطفل</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-16 h-16 mx-auto bg-orange-500/10 rounded-2xl flex items-center justify-center">
                <Rocket className="w-8 h-8 text-orange-500" />
              </div>
              <h4 className="font-semibold">مشاريع عملية</h4>
              <p className="text-sm text-muted-foreground">تطبيق المهارات في مشاريع حقيقية</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LearningJourney;