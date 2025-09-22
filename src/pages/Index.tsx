import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyJeelCode from "@/components/WhyJeelCode";
import LearningJourney from "@/components/LearningJourney";
import Testimonials from "@/components/Testimonials";
import Certificate from "@/components/Certificate";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="why">
          <WhyJeelCode />
        </section>
        
        <section id="journey">
          <LearningJourney />
        </section>
        
        <section id="testimonials">
          <Testimonials />
        </section>
        
        <section id="certificate">
          <Certificate />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;