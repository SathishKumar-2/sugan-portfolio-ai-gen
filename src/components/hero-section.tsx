import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-50" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-tech-blue/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-tech-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-tech-cyan/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Profile image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full glass-card p-1 animate-glow">
              <img
                src={profilePhoto}
                alt="Suganeshwaran M - Software Engineer"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-tech-blue via-tech-purple to-tech-cyan bg-clip-text text-transparent">
            Suganeshwaran M
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Software Development Instructor | AI & IoT Innovator
          </p>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Empowering the next generation of developers while building intelligent systems to solve real-world problems
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('#projects')}
              className="btn-hero"
            >
              View My Work
            </button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 hover-scale"
              onClick={() => scrollToSection('#contact')}
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <Button
              variant="ghost"
              size="lg"
              className="hover-scale"
              asChild
            >
              <a
                href="https://github.com/Sugan2406"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="hover-scale"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/suganeshwaran-m-bb2b2a246"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="hover-scale"
              asChild
            >
              <a
                href="mailto:sugankavitha04@gmail.com"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={() => scrollToSection('#about')}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}