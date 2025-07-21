import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Wrench, Users, Target, Clock } from 'lucide-react';

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java", "C++", "C#", "Python", ".NET", "SQL"],
      color: "tech-blue"
    },
    {
      title: "Frontend Technologies", 
      icon: Code,
      skills: ["XAML", "HTML", "CSS", "React"],
      color: "tech-purple"
    },
    {
      title: "Database & Tools",
      icon: Database,
      skills: ["MySQL", "Visual Studio", "GitHub", "Android Studio", "Jupyter Notebook"],
      color: "tech-cyan"
    },
    {
      title: "Technical Skills",
      icon: Wrench,
      skills: ["AI & ML", "Web Development", "IoT Systems", "Software Testing", "OpenCV", "MediaPipe"],
      color: "tech-green"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Teamwork", "Adaptability", "Time Management", "Problem Solving", "Communication"],
      color: "tech-blue"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and skills I've mastered throughout my journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="glass-card hover-scale group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-${category.color}/10 mr-4 group-hover:scale-110 transition-transform`}>
                    <category.icon className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="hover-scale text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional skills highlight */}
        <div className="mt-16 text-center">
          <Card className="glass-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-tech-purple to-tech-cyan bg-clip-text text-transparent">
                Currently Learning & Exploring
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="outline" className="text-sm hover-scale">
                  <Target className="w-4 h-4 mr-1" />
                  Advanced AI/ML Algorithms
                </Badge>
                <Badge variant="outline" className="text-sm hover-scale">
                  <Code className="w-4 h-4 mr-1" />
                  Cloud Computing (AWS/Azure)
                </Badge>
                <Badge variant="outline" className="text-sm hover-scale">
                  <Database className="w-4 h-4 mr-1" />
                  Microservices Architecture
                </Badge>
                <Badge variant="outline" className="text-sm hover-scale">
                  <Wrench className="w-4 h-4 mr-1" />
                  DevOps & CI/CD
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}