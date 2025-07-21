import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Award, Lightbulb } from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
      title: "Hand Gesture Recognition Device for Physically Challenged",
      description: "Developed an IoT device using OpenCV, NumPy, and MediaPipe that interprets hand gestures in real-time to assist the hearing-impaired. Features computer vision algorithms for accurate gesture detection and translation.",
      technologies: ["Python", "OpenCV", "MediaPipe", "NumPy", "IoT", "Computer Vision"],
      githubUrl: "#",
      liveUrl: "#",
      category: "AI/ML",
      highlight: "Real-time Processing"
    },
    {
      title: "Smart Anti-Fogging Helmet",
      description: "Built a helmet with integrated sensors and heating technology to prevent fog buildup, improving rider safety in poor visibility conditions. Includes patent filing for innovative safety features.",
      technologies: ["IoT", "Sensors", "Arduino", "C++", "Hardware Design"],
      githubUrl: "#",
      liveUrl: "#",
      category: "IoT",
      highlight: "Patent Filed"
    },
    {
      title: "Voice Email App",
      description: "Mobile application allowing users to send and manage emails using voice commands. Eliminates the need for touch or mouse input, making email accessible for users with mobility challenges.",
      technologies: ["Android", "Java", "Speech Recognition", "Email API", "UI/UX"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Mobile App",
      highlight: "Accessibility Focus"
    },
    {
      title: "Customer Churn Prediction",
      description: "Built machine learning models using Random Forest, Log Rank Test, and Kaplan Meier Curve to predict customer churn probability and guide retention strategy for businesses.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "ML Algorithms"],
      githubUrl: "#",
      liveUrl: "#", 
      category: "Data Science",
      highlight: "Business Impact"
    },
    {
      title: "Automatic Following Shopping Trolley",
      description: "Raspberry Pi-powered trolley using gesture recognition, ultrasonic sensors, and servo motors for autonomous following. Features real-time audio feedback and intelligent obstacle avoidance.",
      technologies: ["Raspberry Pi", "Python", "Computer Vision", "Hardware", "Sensors"],
      githubUrl: "#",
      liveUrl: "#",
      category: "IoT",
      highlight: "IEEE Published"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "AI/ML": "tech-blue",
      "IoT": "tech-purple", 
      "Mobile App": "tech-cyan",
      "Data Science": "tech-green",
    };
    return colors[category as keyof typeof colors] || "tech-blue";
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions addressing real-world problems through technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="glass-card hover-scale group h-full flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <Badge 
                    variant="secondary" 
                    className={`text-xs bg-${getCategoryColor(project.category)}/10 text-${getCategoryColor(project.category)} border-${getCategoryColor(project.category)}/20`}
                  >
                    {project.category}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    {project.highlight === "Patent Filed" && (
                      <Award className="w-4 h-4 text-accent" />
                    )}
                    {project.highlight === "IEEE Published" && (
                      <Lightbulb className="w-4 h-4 text-tech-green" />
                    )}
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs hover-scale"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>

                <div className="flex space-x-2 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover-scale"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 hover-scale"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View
                    </a>
                  </Button>
                </div>

                {project.highlight && (
                  <div className="mt-2 text-center">
                    <Badge
                      variant="secondary"
                      className="text-xs bg-accent/10 text-accent"
                    >
                      {project.highlight}
                    </Badge>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="hover-scale"
            asChild
          >
            <a
              href="https://github.com/Sugan2406"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}