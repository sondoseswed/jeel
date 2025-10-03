import {
  Code,
  Brain,
  Rocket,
  Trophy,
  Heart,
  Shield,
  DollarSign,
  Lightbulb,
  Building,
  Crown,
} from "lucide-react";
import chatgpt from "@/assets/chatgpt.png";
import figma from "@/assets/figma.jpeg";
import scratchLogo from "@/assets/Tekkie-hp-scratch-logo-1.png";
import filmoraLogo from "@/assets/Tekkie-hp-filmora-logo.png";
import pythonLogo from "@/assets/Tekkie-hp-python-logo-1.png";
import vscodeLogo from "@/assets/Tekkie-hp-VSCode-logo-1.png";
import coderzLogo from "@/assets/Tekkie-hp-Coderz-logo-1.png";
import jsLogo from "@/assets/Tekkie-hp-JavaScript-logo.png";
import JourneyHeader from "./learning-journey/JourneyHeader";
import StageCard from "./learning-journey/StageCard";
import ConnectionArrow from "./learning-journey/JourneyProgress";
import JourneyBackground from "./learning-journey/JourneyBackground";
import StartFlag from "./learning-journey/StartFlag";
import GoalFlag from "./learning-journey/GoalFlag";

/**
 * LearningJourney Component
 * 
 * Main learning journey component that orchestrates the journey layout.
 * Follows Single Responsibility Principle by delegating specific concerns
 * to specialized sub-components.
 * 
 * @returns JSX element containing the complete learning journey section
 */
const LearningJourney = () => {
  const stages = [
    {
      id: 1,
      title: "Prompt Engineer",
      titleAr: "مهندس الأوامر الذكية",
      subtitle: "بناء خريطة المدينة والأفاتار",
      description:
        "تعلم كيفية التواصل مع الذكاء الاصطناعي وبناء خريطة المدينة الرقمية",
      icon: Code,
      logos: [chatgpt, vscodeLogo, figma],
      duration: "2-3 أسابيع",
      age: "8-12 سنة",
      skills: ["كتابة الأوامر", "التصميم", "التخطيط", "الإبداع"],
      color: "from-[#15294f] to-[#0BD9ef]",
      bgColor: "bg-[#ffffff]",
      borderColor: "border-[#B3B3B3]",
    },
    {
      id: 2,
      title: "Designer",
      titleAr: "المصمم",
      subtitle: "تصميم الهوية البصرية للمدينة",
      description: "إنشاء الهوية البصرية والتصاميم الجذابة للمدينة الرقمية",
      icon: Brain,
      logos: [figma, vscodeLogo, filmoraLogo],
      duration: "2-3 أسابيع",
      age: "8-12 سنة",
      skills: ["التصميم الجرافيكي", "الألوان", "الخطوط", "الشعارات"],
      color: "from-[#fb2d87] to-[#ffb548]",
      bgColor: "bg-[#ffffff]",
      borderColor: "border-[#B3B3B3]",
    },
    {
      id: 3,
      title: "Web Game Developer",
      titleAr: "مطور الألعاب",
      subtitle: "تطوير لعبة تفاعلية",
      description: "بناء ألعاب ويب تفاعلية ومشوقة للمدينة الرقمية",
      icon: Rocket,
      logos: [scratchLogo, jsLogo, vscodeLogo, figma],
      duration: "3-4 أسابيع",
      age: "9-13 سنة",
      skills: ["HTML", "CSS", "JavaScript", "تصميم الألعاب"],
      color: "from-[#0BD9ef] to-[#15294f]",
      bgColor: "bg-[#ffffff]",
      borderColor: "border-[#B3B3B3]",
    },
    {
      id: 4,
      title: "Digital Content Creator",
      titleAr: "منشئ المحتوى الرقمي",
      subtitle: "إنشاء محتوى رقمي",
      description: "إنتاج محتوى رقمي مبدع من فيديوهات وصور ونصوص",
      icon: Trophy,
      logos: [filmoraLogo, figma, vscodeLogo, chatgpt],
      duration: "2-3 أسابيع",
      age: "9-13 سنة",
      skills: ["إنتاج الفيديو", "التصوير", "الكتابة", "المونتاج"],
      color: "from-[#ffb548] to-[#fb2d87]",
      bgColor: "bg-[#ffffff]",
      borderColor: "border-[#B3B3B3]",
    },
    {
      id: 5,
      title: "Data Detective",
      titleAr: "محقق البيانات",
      subtitle: "تحليل البيانات والإحصائيات",
      description: "تحليل البيانات واكتشاف الأنماط والمعلومات المهمة",
      icon: Brain,
      logos: [pythonLogo],
      duration: "3-4 أسابيع",
      age: "10-14 سنة",
      skills: ["تحليل البيانات", "الإحصاء", "الرسوم البيانية", "التنبؤ"],
      color: "from-[#15294f] to-[#0BD9ef]",
      bgColor: "bg-[#ffffff]",
      borderColor: "border-[#B3B3B3]",
    },
    {
      id: 6,
      title: "AI Engineer",
      titleAr: "مهندس الذكاء الاصطناعي",
      subtitle: "تطوير أنظمة ذكية",
      description: "بناء أنظمة ذكاء اصطناعي وتدريب النماذج الذكية",
      icon: Code,
      logos: [pythonLogo, vscodeLogo, chatgpt, coderzLogo],
      duration: "4-5 أسابيع",
      age: "11-15 سنة",
      skills: ["التعلم الآلي", "الشبكات العصبية", "Python", "TensorFlow"],
      color: "from-[#fb2d87] to-[#ffb548]",
      bgColor: "bg-[#ffffff]",
      borderColor: "border-[#B3B3B3]",
    },
    {
      id: 7,
      title: "Healthcare Provider",
      titleAr: "مقدم الرعاية الصحية",
      subtitle: "تطوير Chatbot صحي",
      description: "إنشاء مساعد ذكي للرعاية الصحية وتقديم النصائح الطبية",
      icon: Heart,
      logos: [chatgpt, pythonLogo],
      duration: "3-4 أسابيع",
      age: "11-15 سنة",
      skills: ["Chatbot", "الرعاية الصحية", "NLP", "قواعد البيانات الطبية"],
      color: "from-[#0BD9ef] to-[#15294f]",
      bgColor: "bg-[#ffffff]",
      borderColor: "border-[#B3B3B3]",
    },
    {
      id: 8,
      title: "Cybersecurity Specialist",
      titleAr: "أخصائي الأمن السيبراني",
      subtitle: "حماية المدينة الرقمية",
      description: "حماية المدينة من التهديدات الرقمية وضمان الأمان السيبراني",
      icon: Shield,
      logos: [coderzLogo],
      duration: "3-4 أسابيع",
      age: "12-16 سنة",
      skills: ["الأمان السيبراني", "التشفير", "كشف التهديدات", "الحماية"],
      color: "from-[#ffb548] to-[#fb2d87]",
      bgColor: "bg-[#ffffff]",
      borderColor: "border-[#B3B3B3]",
    },
    {
      id: 9,
      title: "Financial Manager",
      titleAr: "مدير المالية",
      subtitle: "إدارة الميزانية المالية",
      description: "إدارة الأموال والاستثمارات وتخطيط الميزانيات المالية",
      icon: DollarSign,
      logos: [pythonLogo],
      duration: "3-4 أسابيع",
      age: "12-16 سنة",
      skills: ["إدارة المال", "الاستثمار", "التخطيط المالي", "المحاسبة"],
      color: "from-[#15294f] to-[#0BD9ef]",
      bgColor: "bg-[#ffffff]",
      borderColor: "border-[#B3B3B3]",
    },
    {
      id: 10,
      title: "Entrepreneur",
      titleAr: "رائد الأعمال",
      subtitle: "إنشاء مشاريع مبتكرة",
      description: "تطوير أفكار مشاريع جديدة وبناء خطط العمل والتسويق",
      icon: Lightbulb,
      logos: [figma, filmoraLogo, vscodeLogo, chatgpt, pythonLogo],
      duration: "4-5 أسابيع",
      age: "13-17 سنة",
      skills: ["ريادة الأعمال", "خطط العمل", "التسويق", "الابتكار"],
      color: "from-[#fb2d87] to-[#ffb548]",
      bgColor: "bg-[#ffffff]",
      borderColor: "border-[#B3B3B3]",
    },
    {
      id: 11,
      title: "Urban Planner",
      titleAr: "مخطط المدن",
      subtitle: "تخطيط المدينة النهائي",
      description: "تخطيط وتطوير المدينة المستقبلية بكل تفاصيلها العمرانية",
      icon: Building,
      logos: [figma, vscodeLogo],
      duration: "4-5 أسابيع",
      age: "13-17 سنة",
      skills: [
        "التخطيط العمراني",
        "التصميم المعماري",
        "البيئة المستدامة",
        "النقل",
      ],
      color: "from-[#0BD9ef] to-[#15294f]",
      bgColor: "bg-[#ffffff]",
      borderColor: "border-[#B3B3B3]",
    },
    {
      id: 12,
      title: "Mayor",
      titleAr: "رئيس البلدية",
      subtitle: "رئاسة المدينة المستقبلية",
      description:
        "قيادة المدينة الرقمية وإدارة جميع الأنظمة والخدمات المختلفة",
      icon: Crown,
      logos: [coderzLogo, vscodeLogo],
      duration: "5-6 أسابيع",
      age: "14-18 سنة",
      skills: [
        "القيادة",
        "إدارة المشاريع",
        "اتخاذ القرار",
        "الرؤية الاستراتيجية",
      ],
      color: "from-[#ffb548] to-[#fb2d87]",
      bgColor: "bg-[#ffffff]",
      borderColor: "border-[#B3B3B3]",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#ffffff] via-[#f8f9fa] to-[#e9ecef] relative overflow-hidden">
      {/* Background Elements */}
      <JourneyBackground />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <JourneyHeader />

        {/* Start Flag */}
        <StartFlag />

        {/* Full Width Cards Layout */}
        <div className="w-full px-4">
          <div className="relative">
            {/* Full Width Cards Container */}
            <div className="space-y-8">
              {stages.map((stage, index) => {
                const isCompleted = index < 3;
                const isCurrent = index === 3;
                const isUpcoming = index > 3;

                return (
                  <div key={stage.id} className="relative">
                    <StageCard
                      stage={stage}
                      index={index}
                      isCompleted={isCompleted}
                      isCurrent={isCurrent}
                    />

                    {/* Connection Arrow to Next Card */}
                    {index < stages.length - 1 && <ConnectionArrow />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Goal Flag */}
        <GoalFlag />
      </div>
    </section>
  );
};

export default LearningJourney;
