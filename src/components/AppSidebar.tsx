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
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const handleNavClick = (url: string) => {
    if (url.startsWith('#')) {
      const element = document.querySelector(url);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <Sidebar className={`border-r border-border/50 bg-gradient-card transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
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
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    onClick={() => handleNavClick(item.url)}
                    className="sidebar-icon-only hover:bg-primary/10 hover:text-primary transition-colors mb-2"
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="sidebar-tooltip">{item.title}</span>
                  </SidebarMenuButton>
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
                <SidebarMenuItem key={link.title}>
                  <SidebarMenuButton 
                    onClick={() => handleNavClick(link.url)}
                    className="sidebar-icon-only hover:bg-accent/10 hover:text-accent transition-colors mb-2"
                  >
                    <link.icon className="w-5 h-5" />
                    <span className="sidebar-tooltip">{link.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-3">
        <div className="text-xs text-muted-foreground text-center rotate-90 transform origin-center">
          © 2024
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}