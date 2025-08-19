import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Zap } from "lucide-react";
import aiIllustration from "@/assets/ai-illustration.jpg";
import codeIcon from "@/assets/code-icon.jpg";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "SheCure",
      subtitle: "Digital Health Platform",
      description: "Built a comprehensive digital health platform for women and children with patient portfolios, emergency logging, SMS alerts, and multilingual (e.g., Hindi) support.",
      technologies: ["JavaScript", "Full Stack"],
      date: "Jun 2025 - Jul 2025",
      category: "Healthcare",
      image: aiIllustration,
      featured: true
    },
    {
      title: "Visual Magic Pattern Generator",
      subtitle: "AI-Powered Design Tool",
      description: "Developed a visual magic pattern generator—a synced prototype inspired by Magic Patterns, enabling AI-assisted, customizable visual pattern creation like kaleidoscope.",
      technologies: ["Full Stack", "AI"],
      date: "May 2025 - Jun 2025",
      category: "AI & Design",
      image: codeIcon,
      featured: true
    },
    {
      title: "Construction Hub AI",
      subtitle: "Smart Construction Planner",
      description: "Built an AI-powered construction planner with floor plan generation, smart recommendations, and dashboards using Next.js, MongoDB, and Hugging Face/Gemini APIs.",
      technologies: ["Full Stack", "AI and Machine Learning"],
      date: "Jan 2025 - Feb 2025",
      category: "AI & Construction",
      image: aiIllustration,
      featured: false
    },
    {
      title: "Wardrobe Synthetic Chatbot",
      subtitle: "AI Fashion Assistant",
      description: "Developed an AI-powered fashion chatbot that suggests outfits based on wardrobe, occasions, and weather, with a minimal UI (HTML/CSS/JS), Flask backend, and NLP integration.",
      technologies: ["Python and JavaScript", "AI, Machine Learning and Full Stack"],
      date: "Oct 2024 - Nov 2024",
      category: "AI & Fashion",
      image: codeIcon,
      featured: false
    }
  ];

  return (
    <section className="section-padding live-bg floating-shapes relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Zap className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Innovative solutions at the intersection of AI, web development, and user experience
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="masonry-grid mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <Card key={index} className={`float-card bg-gradient-card border-0 overflow-hidden fade-in delay-${(index + 1) * 100}`}>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  Featured
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{project.date}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-primary font-medium mb-3">{project.subtitle}</p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="border-primary/30 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <Card key={index} className={`float-card bg-gradient-card border-0 fade-in delay-${(index + 3) * 100}`}>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{project.date}</span>
                </div>
                
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-primary font-medium mb-3">{project.subtitle}</p>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="border-primary/30 text-primary text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-3 h-3 mr-2" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-3 h-3 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
