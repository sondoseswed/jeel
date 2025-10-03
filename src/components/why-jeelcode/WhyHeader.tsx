/**
 * WhyHeader Component
 * 
 * Displays the header section of the why JeelCode section.
 * Follows Single Responsibility Principle by only handling header presentation.
 * 
 * @returns JSX element containing the why header
 */
const WhyHeader = () => {
  return (
    <div className="text-center mb-16 relative">
      {/* Background image for header */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat "
          style={{
            backgroundImage: `url('/src/assets/code6.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/55" />
      </div>

      <div className="relative z-10 py-16 px-8">
        <p className="text-accent font-semibold text-lg mb-4">#من بدري</p>
        <h2 className="text-4xl lg:text-6xl font-bold mb-8">
          ليش <span className="hero-text-gradient">جيل كود</span>؟
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          كأم، أكيد تحبين تشوفين وقت أطفالك على التابلت له فايدة...
        </p>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-4 leading-relaxed">
          في جيل كود، نحول هذا الوقت لتعلّم برمجة وذكاء اصطناعي بأسلوب ممتع
          ومبسط، يساعدهم يكتشفون شغفهم ويستعدّون لمستقبلهم من بدري.
        </p>
      </div>
    </div>
  );
};

export default WhyHeader;
