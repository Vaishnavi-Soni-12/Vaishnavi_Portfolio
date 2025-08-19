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
      <div className="min-h-screen w-full flex">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="sticky top-0 z-50 h-12 flex items-center border-b border-border/50 bg-background/80 backdrop-blur-md">
            <SidebarTrigger className="ml-4" />
            <h1 className="ml-4 font-semibold bg-gradient-hero bg-clip-text text-transparent">
              Portfolio
            </h1>
          </header>
          
          <main className="flex-1">
            <section id="home">
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
          </main>
          
          <Footer />
        </div>
      </div>
      <Toaster />
    </SidebarProvider>
  );
};

export default Index;
