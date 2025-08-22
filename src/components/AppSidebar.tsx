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
export function AppSidebar() {
  const handleNavClick = (url: string) => {
    if (url.startsWith('#')) {
      const element = document.querySelector(url);
      element?.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      window.open(url, '_blank');
    }
  };
  return <div className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-50 flex-col gap-2">
      {navigationItems.map(item => (
        <div key={item.title} className="relative group">
          <button
            onClick={() => handleNavClick(item.url)}
            className="w-12 h-12 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/20 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
          >
            <span className="text-lg">{item.icon}</span>
          </button>
          
          {/* Aesthetic tooltip */}
          <div className="absolute left-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
            <div className="bg-gradient-to-r from-primary/90 to-accent/90 backdrop-blur-md rounded-lg px-3 py-2 shadow-xl border border-white/20">
              <span className="text-sm font-medium text-white whitespace-nowrap">
                {item.title}
              </span>
            </div>
          </div>
        </div>
      ))}
      
      <div className="h-px bg-primary/20 my-2 mx-2" />
      
      {socialLinks.map(link => (
        <div key={link.title} className="relative group">
          <button
            onClick={() => handleNavClick(link.url)}
            className="w-12 h-12 rounded-full bg-accent/10 backdrop-blur-md border border-accent/20 flex items-center justify-center text-accent hover:bg-accent/20 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
          >
            <span className="text-accent">{link.icon}</span>
          </button>
          
          {/* Aesthetic tooltip */}
          <div className="absolute left-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
            <div className="bg-gradient-to-r from-accent/90 to-tertiary/90 backdrop-blur-md rounded-lg px-3 py-2 shadow-xl border border-white/20">
              <span className="text-sm font-medium text-white whitespace-nowrap">
                {link.title}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>;
}