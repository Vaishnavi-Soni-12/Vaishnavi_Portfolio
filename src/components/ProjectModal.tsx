import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, X, Github, ExternalLink } from "lucide-react";
interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  date: string;
  category: string;
  image: string;
  featured: boolean;
}
interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}
export function ProjectModal({
  project,
  isOpen,
  onClose
}: ProjectModalProps) {
  if (!project) return null;
  const handleGitHubClick = () => {
    // Convert project title to GitHub repo format (lowercase, replace spaces with hyphens)
    const repoName = project.title.toLowerCase().replace(/\s+/g, '-');
    window.open(`https://github.com/Vaishnavi-Soni-12/${repoName}`, '_blank');
  };
  return <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-card">
        <DialogHeader className="relative">
          
          <DialogTitle className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent pr-8">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Project Image */}
          <div className="relative h-64 overflow-hidden rounded-lg">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            {project.featured && <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                Featured
              </Badge>}
          </div>
          
          {/* Project Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{project.date}</span>
              <Badge variant="outline" className="ml-auto border-accent/30 text-accent">
                {project.category}
              </Badge>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">{project.subtitle}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>
            
            {/* Technologies */}
            <div>
              <h4 className="font-semibold mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => <Badge key={index} variant="outline" className="border-primary/30 text-primary">
                    {tech}
                  </Badge>)}
              </div>
            </div>
            
            {/* Project Highlights */}
            <div>
              <h4 className="font-semibold mb-3">Project Highlights</h4>
              <div className="bg-muted/50 rounded-lg p-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Implemented modern development practices and clean architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Focused on user experience and responsive design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Integrated cutting-edge technologies for optimal performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Deployed using industry-standard DevOps practices</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button onClick={handleGitHubClick} className="flex-1 bg-primary hover:bg-primary/90">
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>;
}