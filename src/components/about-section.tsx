import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, MapPin, Languages } from 'lucide-react';

export function AboutSection() {
  const education = [
    {
      degree: "Integrated M.Tech in Software Engineering",
      school: "VIT University, Chennai",
      grade: "CGPA: 7.95/10",
      icon: GraduationCap
    },
    {
      degree: "12th Grade",
      school: "Adhiyaman Matric. Hr. Sec. School, Uthangarai",
      grade: "74.66%",
      icon: GraduationCap
    },
    {
      degree: "10th Grade", 
      school: "Adhiyaman Matric. Hr. Sec. School, Uthangarai",
      grade: "86%",
      icon: GraduationCap
    }
  ];

  const achievements = [
    "Microsoft Security, Compliance and Identity Fundamentals (SC-900)",
    "NLP on Google Cloud Certification",
    'Filed patents: "Smart Anti-Fogging Helmet" & "Smart Shopping Cart"',
    'Published IEEE Conference Paper on "Smart Shopping Cart"'
  ];

  const languages = ["English", "Tamil"];
  const interests = ["AI & ML", "Web Development", "IoT Systems", "Software Testing"];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate software engineer with expertise in AI, IoT, and full-stack development. 
            I love creating innovative solutions that make a real impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <div className="space-y-8 animate-slide-up">
            <Card className="glass-card hover-scale">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-5 h-5 text-primary mr-2" />
                  <h3 className="text-xl font-semibold">Location</h3>
                </div>
                <p className="text-muted-foreground">
                  163, Nattanmaikottai, Uthangarai, Krishnagiri
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  📧 sugankavitha04@gmail.com<br />
                  📱 +91 7904249081
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-scale">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Languages className="w-5 h-5 text-primary mr-2" />
                  <h3 className="text-xl font-semibold">Languages</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <Badge key={lang} variant="secondary" className="hover-scale">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card hover-scale">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <Badge key={interest} variant="outline" className="hover-scale">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education & Achievements */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <GraduationCap className="w-5 h-5 text-primary mr-2" />
                  Education
                </h3>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-primary/20 pl-4 hover-scale">
                      <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-sm text-muted-foreground">{edu.school}</p>
                      <Badge variant="secondary" className="mt-1 text-xs">
                        {edu.grade}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Award className="w-5 h-5 text-primary mr-2" />
                  Certifications & Achievements
                </h3>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start hover-scale">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{achievement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}