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
  icon: "💼"
}, {
  title: "GitHub", 
  url: "https://github.com/Vaishnavi-Soni-12",
  icon: "🐙"
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
  return <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
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
            <span className="text-lg">{link.icon}</span>
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