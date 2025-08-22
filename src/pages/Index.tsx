import { AppSidebar } from "@/components/AppSidebar";
import { HeroSection } from "@/components/HeroSection";
import { EducationSection } from "@/components/EducationSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-background">
      <AppSidebar />
      
      <main className="overflow-x-hidden">
        <div className="min-h-screen w-full">
          <section id="home" className="min-h-screen">
            <HeroSection />
          </section>
          
          <section id="education">
            <EducationSection />
          </section>
          
          <section id="projects">
            <ProjectsSection />
          </section>
          
          <section id="skills">
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
  );
};

export default Index;
