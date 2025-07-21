import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin, Users, BookOpen, Trophy, Code } from 'lucide-react';

export function ExperienceSection() {
  const currentRole = {
    title: "Software Development Instructor",
    company: "Nxtwave",
    duration: "March 2025 – Present",
    type: "Current Role",
    location: "Remote",
    description: "Leading comprehensive software development training programs, focusing on practical application of coding concepts and real-world project development. Mentoring students in building full-stack applications and understanding modern development practices.",
    responsibilities: [
      "Mentoring students in real-world coding and AI projects",
      "Designing comprehensive curriculum for full-stack development", 
      "Conducting hands-on workshops on modern development tools",
      "Providing guidance on Data Structures and Algorithms",
      "Leading AI automation and ML project implementations"
    ],
    technologies: [
      "Python", "JavaScript", "React", "Node.js", "SQL", "MongoDB", 
      "HTML/CSS", "Git", "MLOps", "MLFlow", "n8n", "CrewAI"
    ],
    achievements: [
      { number: "100+", label: "Students Mentored" },
      { number: "25+", label: "Projects Guided" },
      { number: "5+", label: "Workshops Conducted" }
    ]
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering the next generation of developers through comprehensive training and mentorship
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-card hover-scale animate-slide-up">
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                    {currentRole.title}
                  </CardTitle>
                  <div className="flex items-center space-x-4 text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="font-semibold text-primary">{currentRole.company}</span>
                    </div>
                    <div className="flex items-center">
                      <CalendarDays className="w-4 h-4 mr-1" />
                      <span>{currentRole.duration}</span>
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-tech-green/10 text-tech-green border-tech-green/20 w-fit">
                  {currentRole.type}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Description */}
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  {currentRole.description}
                </p>
              </div>

              {/* Key Responsibilities */}
              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-primary" />
                  Key Responsibilities
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {currentRole.responsibilities.map((responsibility, index) => (
                    <div key={index} className="flex items-start hover-scale">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{responsibility}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & Tools */}
              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <Code className="w-5 h-5 mr-2 text-primary" />
                  Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentRole.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="hover-scale text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-primary" />
                  Impact & Achievements
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {currentRole.achievements.map((achievement, index) => (
                    <Card key={index} className="glass-card text-center p-4 hover-scale">
                      <div className="text-2xl font-bold text-primary mb-1">
                        {achievement.number}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {achievement.label}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="pt-4 border-t border-border/50">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2" />
                    <span>Currently mentoring students in cutting-edge development practices</span>
                  </div>
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    Open for Collaboration
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}