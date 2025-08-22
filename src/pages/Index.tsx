import { useState, useEffect } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { MobileMenu } from "@/components/MobileMenu";
import { Preloader } from "@/components/Preloader";
import { HeroSection } from "@/components/HeroSection";
import { EducationSection } from "@/components/EducationSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader />
      <div className={`min-h-screen w-full bg-background transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <AppSidebar />
        <MobileMenu />
        
        <main className="overflow-x-hidden">
          <div className="min-h-screen w-full">
            <section id="home" className="min-h-screen">
              <HeroSection />
            </section>
            
            <section id="education" className="live-bg floating-shapes relative overflow-hidden">
              <EducationSection />
            </section>
            
            <section id="projects">
              <ProjectsSection />
            </section>
            
            <section id="skills" className="live-bg floating-shapes relative overflow-hidden">
              <SkillsSection />
            </section>
            
            <section id="contact">
              <ContactSection />
            </section>
            
            <Footer />
          </div>
        </main>
        <Toaster />
      </div>
    </>
  );
};

export default Index;
