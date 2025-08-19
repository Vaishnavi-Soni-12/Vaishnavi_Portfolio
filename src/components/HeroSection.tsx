import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePlaceholder from "@/assets/profile-placeholder.jpg";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-16 h-16 bg-primary/20 rounded-full blur-lg animate-pulse" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-accent/20 rounded-full blur-lg animate-pulse delay-100" />
        <div className="absolute bottom-32 left-40 w-20 h-20 bg-tertiary/20 rounded-full blur-lg animate-pulse delay-200" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'fade-in' : ''}`}>
          <div className="relative w-32 h-32 mx-auto mb-8">
            <img 
              src={profilePlaceholder}
              alt="Vaishnavi Soni"
              className="w-full h-full rounded-full object-cover float-card border-4 border-white/50"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-hero opacity-20" />
          </div>
        </div>

        {/* Main Content */}
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'fade-in' : ''}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Vaishnavi Soni
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            AI/ML Engineer & Full Stack Developer
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating intelligent solutions that bridge technology and human needs. 
            Currently pursuing B.Tech in Computer Science with a focus on Artificial Intelligence.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-wrap gap-4 justify-center mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'fade-in' : ''}`}>
          <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground float-card">
            <Mail className="w-4 h-4 mr-2" />
            Contact Me
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground float-card">
            View Projects
          </Button>
        </div>

        {/* Social Links */}
        <div className={`flex gap-6 justify-center mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'fade-in' : ''}`}>
          <a href="#" className="p-3 rounded-full bg-white/10 backdrop-blur-sm float-card hover:bg-primary hover:text-primary-foreground transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="p-3 rounded-full bg-white/10 backdrop-blur-sm float-card hover:bg-primary hover:text-primary-foreground transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="p-3 rounded-full bg-white/10 backdrop-blur-sm float-card hover:bg-primary hover:text-primary-foreground transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'fade-in' : ''}`}>
          <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  );
};