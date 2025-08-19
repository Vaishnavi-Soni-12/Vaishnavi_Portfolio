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
    <Sidebar className="border-r border-border/50 bg-gradient-card">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-hero flex items-center justify-center">
            <span className="text-white font-bold text-sm">VS</span>
          </div>
          {!isCollapsed && (
            <div>
              <h3 className="font-semibold text-sm">Vaishnavi Soni</h3>
              <p className="text-xs text-muted-foreground">AI/ML Engineer</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    onClick={() => handleNavClick(item.url)}
                    className="hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <item.icon className="w-4 h-4" />
                    {!isCollapsed && <span>{item.title}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Connect</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {socialLinks.map((link) => (
                <SidebarMenuItem key={link.title}>
                  <SidebarMenuButton 
                    onClick={() => handleNavClick(link.url)}
                    className="hover:bg-accent/10 hover:text-accent transition-colors"
                  >
                    <link.icon className="w-4 h-4" />
                    {!isCollapsed && <span>{link.title}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        {!isCollapsed && (
          <div className="text-xs text-muted-foreground text-center">
            © 2024 Vaishnavi Soni
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}