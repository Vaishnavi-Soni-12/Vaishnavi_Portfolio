import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigationItems = [{
  title: "Home",
  url: "#home",
  icon: "🏠"
}, {
  title: "Education", 
  url: "#education",
  icon: "🎓"
}, {
  title: "Projects",
  url: "#projects", 
  icon: "💼"
}, {
  title: "Skills",
  url: "#skills",
  icon: "💻"
}, {
  title: "Contact",
  url: "#contact",
  icon: "✉️"
}];

const socialLinks = [{
  title: "LinkedIn",
  url: "https://www.linkedin.com/in/vaishnavi-soni-27b461331",
  icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}, {
  title: "GitHub", 
  url: "https://github.com/Vaishnavi-Soni-12",
  icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (url: string) => {
    if (url.startsWith('#')) {
      const element = document.querySelector(url);
      element?.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      window.open(url, '_blank');
    }
    setIsOpen(false);
  };

  return (
    <div className="md:hidden fixed top-4 left-4 z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="w-12 h-12 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 hover:bg-primary/20"
          >
            <div className="flex flex-col gap-1">
              <div className="w-4 h-0.5 bg-primary rounded-full"></div>
              <div className="w-4 h-0.5 bg-primary rounded-full"></div>
              <div className="w-4 h-0.5 bg-primary rounded-full"></div>
            </div>
          </Button>
        </SheetTrigger>
        
        <SheetContent side="left" className="w-64 bg-gradient-card border-r border-primary/20">
          <div className="flex flex-col gap-4 mt-8">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Navigation
              </h2>
            </div>
            
            {navigationItems.map(item => (
              <button
                key={item.title}
                onClick={() => handleNavClick(item.url)}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors text-left"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.title}</span>
              </button>
            ))}
            
            <div className="h-px bg-primary/20 my-4" />
            
            <div className="text-center mb-4">
              <h3 className="text-sm font-semibold text-muted-foreground">
                Social Links
              </h3>
            </div>
            
            {socialLinks.map(link => (
              <button
                key={link.title}
                onClick={() => handleNavClick(link.url)}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors text-left"
              >
                <span className="text-accent">{link.icon}</span>
                <span className="font-medium">{link.title}</span>
              </button>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}