import { Home, GraduationCap, Briefcase, Code, Mail, Github, Linkedin } from "lucide-react";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Home", url: "#home", icon: Home },
  { title: "Education", url: "#education", icon: GraduationCap },
  { title: "Projects", url: "#projects", icon: Briefcase },
  { title: "Skills", url: "#skills", icon: Code },
  { title: "Contact", url: "#contact", icon: Mail },
];

const socialLinks = [
  { title: "LinkedIn", url: "https://www.linkedin.com/in/vaishnavi-soni-27b461331", icon: Linkedin },
  { title: "GitHub", url: "https://github.com/Vaishnavi-Soni-12", icon: Github },
];

export function AppSidebar() {
  const handleNavClick = (url: string) => {
    if (url.startsWith('#')) {
      const element = document.querySelector(url);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <Sidebar className="fixed left-0 top-0 h-full w-16 border-r border-border/50 bg-gradient-card/80 backdrop-blur-md z-50">
      <SidebarHeader className="p-3">
        <div className="flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-gradient-hero flex items-center justify-center">
            <span className="text-white font-bold text-sm">VS</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title} className="relative group">
                  <SidebarMenuButton 
                    onClick={() => handleNavClick(item.url)}
                    className="w-12 h-12 p-0 justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300 mb-2 rounded-lg border border-transparent hover:border-primary/30 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <item.icon className="w-5 h-5" />
                  </SidebarMenuButton>
                  
                  {/* Glass tooltip */}
                  <div className="absolute left-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-3 py-2 shadow-lg">
                      <span className="text-sm font-medium text-white whitespace-nowrap">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="h-px bg-border/50 my-4" />

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {socialLinks.map((link) => (
                <SidebarMenuItem key={link.title} className="relative group">
                  <SidebarMenuButton 
                    onClick={() => handleNavClick(link.url)}
                    className="w-12 h-12 p-0 justify-center hover:bg-accent/20 hover:text-accent transition-all duration-300 mb-2 rounded-lg border border-transparent hover:border-accent/30 hover:shadow-lg hover:shadow-accent/20"
                  >
                    <link.icon className="w-5 h-5" />
                  </SidebarMenuButton>
                  
                  {/* Glass tooltip */}
                  <div className="absolute left-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-3 py-2 shadow-lg">
                      <span className="text-sm font-medium text-white whitespace-nowrap">
                        {link.title}
                      </span>
                    </div>
                  </div>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-3">
        <div className="text-xs text-muted-foreground text-center">
          <div className="transform -rotate-90 origin-center">© 2024</div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}