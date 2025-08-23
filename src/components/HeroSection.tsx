import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo-new.jpg";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-2 sm:px-4 md:px-6">
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
      
      {/* Floating Elements - Hidden on very small screens */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <div className="absolute top-16 sm:top-20 left-4 sm:left-20 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary/20 rounded-full blur-lg animate-pulse" />
        <div className="absolute top-32 sm:top-40 right-6 sm:right-8 md:right-32 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-accent/20 rounded-full blur-lg animate-pulse delay-100" />
        <div className="absolute bottom-24 sm:bottom-32 left-6 sm:left-8 md:left-40 w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 bg-tertiary/20 rounded-full blur-lg animate-pulse delay-200" />
      </div>

      <div className="relative z-10 text-center px-2 sm:px-4 max-w-4xl mx-auto w-full">
        {/* Profile Image */}
        <div className={`mb-4 sm:mb-6 md:mb-8 transition-all duration-1000 ${isVisible ? 'fade-in' : ''}`}>
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6 md:mb-8">
            <img 
              src="/lovable-uploads/52aee715-2b3a-41ff-bfa2-ec2d24f675b8.png"
              alt="Vaishnavi Soni"
              className="w-full h-full rounded-full object-cover float-card border-2 sm:border-2 md:border-4 border-white/50"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-hero opacity-20" />
          </div>
        </div>

        {/* Main Content */}
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'fade-in' : ''}`}>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight">
            Vaishnavi Soni
          </h1>
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-2 sm:mb-3 md:mb-4 font-light">
            AI/ML Engineer & Full Stack Developer
          </p>
          <p className="text-xs sm:text-sm md:text-lg text-muted-foreground mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            Passionate about creating intelligent solutions that bridge technology and human needs. 
            Currently pursuing B.Tech in Computer Science with a focus on Artificial Intelligence.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center mb-6 sm:mb-8 md:mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'fade-in' : ''}`}>
          <Button 
            variant="default" 
            size="sm" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground float-card w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Contact Me
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground float-card w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6"
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground float-card w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6"
            onClick={() => window.open('https://drive.google.com/file/d/1HzV0L9HfKTrrlXH6UWaNuwu2nVyaPbOk/view?usp=drive_link', '_blank')}
          >
            Download Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className={`flex gap-3 sm:gap-4 md:gap-6 justify-center mb-6 sm:mb-8 md:mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'fade-in' : ''}`}>
          <a 
            href="https://github.com/Vaishnavi-Soni-12" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm float-card hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Github className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/vaishnavi-soni-27b461331" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm float-card hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          </a>
          <a 
            href="mailto:vaishnavi.soni@example.com" 
            className="p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm float-card hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Mail className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'fade-in' : ''}`}>
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mx-auto text-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  );
};