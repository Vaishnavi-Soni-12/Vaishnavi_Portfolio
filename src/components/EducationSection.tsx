import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

export const EducationSection = () => {
  const education = [
    {
      institution: "SRM IST-Trichy",
      degree: "B.Tech - Computer Science and Engineering",
      specialization: "Artificial Intelligence and Machine Learning",
      year: "2027",
      grade: "CGPA - 9.81/10",
      status: "current"
    },
    {
      institution: "St Joseph's Convent Hr Sec. School",
      degree: "Class XII - CBSE",
      specialization: "PCM + IP",
      location: "Itarsi, Madhya Pradesh",
      year: "2022",
      grade: "80.8%",
      status: "completed"
    },
    {
      institution: "St. Joseph's Convent Hr. Sec. School",
      degree: "Class X - CBSE",
      specialization: "Math, Science, Social Science",
      location: "Itarsi, Madhya Pradesh",
      year: "2020",
      grade: "89.6%",
      status: "completed"
    }
  ];

  return (
    <div className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Education
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic foundation and continuous learning journey
          </p>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className={`float-card bg-gradient-card border-0 fade-in ${
              index === 0 ? 'delay-100' : 
              index === 1 ? 'delay-200' : 
              'delay-300'
            }`}>
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        {edu.status === 'current' ? (
                          <Award className="w-6 h-6 text-primary" />
                        ) : (
                          <GraduationCap className="w-6 h-6 text-primary" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold text-foreground">
                            {edu.institution}
                          </h3>
                          {edu.status === 'current' && (
                            <Badge className="bg-accent text-accent-foreground">Current</Badge>
                          )}
                        </div>
                        <p className="text-lg font-medium text-primary mb-1">
                          {edu.degree}
                        </p>
                        <p className="text-muted-foreground mb-2">
                          {edu.specialization}
                        </p>
                        {edu.location && (
                          <p className="text-sm text-muted-foreground">
                            {edu.location}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right lg:min-w-[150px]">
                    <p className="text-lg font-semibold text-primary mb-1">
                      {edu.year}
                    </p>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {edu.grade}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};