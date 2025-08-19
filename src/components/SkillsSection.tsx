import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Palette, Globe } from "lucide-react";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: Code,
      skills: ["Python", "C", "C++", "SQL"],
      color: "primary"
    },
    {
      title: "Domain Knowledge",
      icon: Brain,
      skills: ["NLP (Natural Language Processing)", "Machine Learning"],
      color: "accent"
    },
    {
      title: "Areas of Interest",
      icon: Palette,
      skills: ["Full Stack", "Prompt Engineering"],
      color: "tertiary"
    },
    {
      title: "Design & Tools",
      icon: Globe,
      skills: ["Figma"],
      color: "secondary"
    }
  ];

  const languages = [
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Hindi", level: "Native Proficiency" }
  ];

  return (
    <section className="section-padding live-bg floating-shapes relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A diverse toolkit for building intelligent and user-centric solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className={`float-card bg-gradient-card border-0 fade-in delay-${(index + 1) * 100}`}>
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className={`inline-flex p-3 rounded-full bg-${category.color}/10 mb-3`}>
                      <IconComponent className={`w-6 h-6 text-${category.color}`} />
                    </div>
                    <h3 className="font-semibold text-lg mb-4">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="outline" 
                        className={`block border-${category.color}/30 text-${category.color} text-sm py-1`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Languages Section */}
        <Card className="float-card bg-gradient-card border-0 fade-in delay-500">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <div className="inline-flex p-3 rounded-full bg-primary/10 mb-3">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Languages</h3>
              <p className="text-muted-foreground">Communication across cultures</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {languages.map((lang, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-white/50">
                  <h4 className="font-semibold text-lg text-primary mb-2">{lang.name}</h4>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    {lang.level}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};