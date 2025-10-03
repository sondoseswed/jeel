const IndustryTools = () => {
  const tools = [
    {
      logo: "/src/assets/Tekkie-hp-Coderz-logo-1.png",
    },
    {
      logo: "/src/assets/Tekkie-hp-figma-logo-1.png",
    },
    {
      logo: "/src/assets/Tekkie-hp-filmora-logo.png",
    },
    {
      logo: "/src/assets/Tekkie-hp-JavaScript-logo.png",
    },
    {
      logo: "/src/assets/Tekkie-hp-python-logo-1.png",
    },
    {
      logo: "/src/assets/Tekkie-hp-scratch-logo-1.png",
    },
    {
      logo: "/src/assets/Tekkie-hp-VSCode-logo-1.png",
    },
  ];

  return (
    <section className=" bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mt-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12 max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              جاهز لبدء رحلة طفلك مع هذه الأدوات المهنية؟
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              سيتعلم طفلك اليوم ويصبح خبيراً غداً
            </p>
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap justify-center items-center gap-12">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="group hover:scale-110 transition-all duration-300 cursor-pointer"
                  >
                    <img
                      src={tool.logo}
                      alt="Industry Tool"
                      className="h-16 w-auto object-contain transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryTools;
