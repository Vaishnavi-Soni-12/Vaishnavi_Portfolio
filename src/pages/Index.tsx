import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
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
    <SidebarProvider>
      <div className="min-h-screen w-full page-fade-in live-bg">
        <AppSidebar />
        
        <main className="ml-16 overflow-x-hidden">
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
        </main>
      </div>
      <Toaster />
    </SidebarProvider>
  );
};

export default Index;
