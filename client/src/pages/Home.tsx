import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import LineWaves from '@/components/LineWaves';
import LineSidebar from '@/components/LineSidebar';
import Strands from '@/components/Strands';
import { ExternalLink, Github, Instagram, Mail, Code2, Server, Database, Cloud, Menu, X } from 'lucide-react';

/**
 * Portfolio Design: Modern Technical Elegance
 * Dark navy background with electric blue accents, animated visual effects,
 * asymmetric layouts, and interactive navigation
 */

export default function Home() {
  const [activeSection, setActiveSection] = useState<number | null>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = ['Hero', 'About', 'Skills', 'Projects', 'Contact'];

  const skills = [
    {
      category: 'Frontend Development',
      icon: Code2,
      items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js', 'HTML/CSS']
    },
    {
      category: 'Backend Development',
      icon: Server,
      items: ['Node.js', 'Express', 'Python', 'Django', 'RESTful APIs', 'GraphQL']
    },
    {
      category: 'DevOps & Infrastructure',
      icon: Cloud,
      items: ['Docker', 'Kubernetes', 'CI/CD Pipelines', 'AWS', 'Linux', 'Nginx']
    },
    {
      category: 'Databases',
      icon: Database,
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Firebase', 'Elasticsearch']
    }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      link: '#'
    },
    {
      title: 'POS System for Retail',
      description: 'Point-of-sale system built for retail organizations with inventory tracking, sales reporting, and multi-user support.',
      technologies: ['Vue.js', 'Express', 'MySQL', 'Docker'],
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio showcasing web development and DevOps expertise with animated components and responsive design.',
      technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Vite'],
      link: '#'
    },
    {
      title: 'Cloud Infrastructure Setup',
      description: 'Designed and deployed scalable cloud infrastructure with automated CI/CD pipelines and monitoring solutions.',
      technologies: ['AWS', 'Kubernetes', 'Docker', 'Terraform'],
      link: '#'
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Real-time data visualization dashboard with WebSocket integration for live metrics and performance monitoring.',
      technologies: ['React', 'Node.js', 'WebSocket', 'Chart.js'],
      link: '#'
    },
    {
      title: 'Microservices Architecture',
      description: 'Migrated monolithic application to microservices with service mesh, load balancing, and distributed logging.',
      technologies: ['Kubernetes', 'Docker', 'gRPC', 'ELK Stack'],
      link: '#'
    }
  ];

  const handleNavClick = (index: number) => {
    setActiveSection(index);
    const sections = document.querySelectorAll('[data-section]');
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Mobile Navigation Header */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-card/50 backdrop-blur-sm border-b border-border z-50 lg:hidden flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500" />
          <h1 className="text-lg font-bold text-foreground">Usama</h1>
        </div>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bg-card/95 backdrop-blur-sm border-b border-border z-40 lg:hidden">
          <div className="p-4 space-y-2">
            {navigationItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  handleNavClick(idx);
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 rounded-lg hover:bg-accent/10 text-accent transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Navigation Sidebar */}
      <nav className="fixed left-0 top-0 h-screen w-64 bg-card/50 backdrop-blur-sm border-r border-border p-8 z-40 overflow-y-auto hidden lg:flex flex-col">
        <div className="mb-12">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 mb-4" />
          <h1 className="text-xl font-bold text-foreground">Usama</h1>
          <p className="text-sm text-muted-foreground">Developer & DevOps</p>
        </div>
        
        <LineSidebar
          items={navigationItems}
          accentColor="#d4a574"
          textColor="#c4bbb0"
          markerColor="#6b6560"
          onItemClick={handleNavClick}
          defaultActive={0}
          showIndex={true}
          showMarker={true}
          proximityRadius={120}
          maxShift={20}
          itemGap={24}
          fontSize={0.95}
        />

        <div className="mt-auto pt-8 border-t border-border">
          <div className="flex gap-4">
            <a href="https://github.com/usamabhanbhro" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
              <Github size={20} />
            </a>
            <a href="https://instagram.com/bhanbhrosia" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
              <Instagram size={20} />
            </a>
            <a href="mailto:mubhanbhro@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 lg:pt-0">
        {/* Hero Section */}
        <section data-section className="relative min-h-screen lg:h-screen flex items-center justify-center overflow-hidden pt-8 lg:pt-0">
          <div className="absolute inset-0 z-0">
            <LineWaves
              speed={0.4}
              innerLineCount={25}
              outerLineCount={32}
              warpIntensity={0.8}
              rotation={-35}
              brightness={0.25}
              color1="#d4a574"
              color2="#c9915f"
              color3="#e8b88a"
              enableMouseInteraction={true}
              mouseInfluence={1.5}
            />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
                Muhammad Usama Bhanbhro
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Full-stack Developer & DevOps Engineer crafting scalable solutions from concept to production
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={() => handleNavClick(4)}
                >
                  Get In Touch
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => handleNavClick(2)}
                >
                  View My Work
                </Button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
            <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* About Section */}
        <section data-section className="py-16 lg:py-20 px-4 bg-card/30">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 lg:mb-12 text-center">About Me</h2>
            
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
              <div className="space-y-4 lg:space-y-6">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate developer and DevOps engineer with a strong foundation from SZABIST University. My journey in technology has been driven by a desire to build robust, scalable solutions that solve real-world problems.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  With expertise spanning full-stack development and infrastructure automation, I bridge the gap between application development and production deployment. I'm committed to writing clean, maintainable code and designing systems that are both efficient and resilient.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, I'm exploring emerging technologies, contributing to open-source projects, and mentoring junior developers in my community.
                </p>
              </div>

              <div className="space-y-4 lg:space-y-6">
                <Card className="p-6 bg-background border-border hover:border-accent transition-colors">
                  <h3 className="text-base md:text-lg font-semibold mb-3 text-accent">Education</h3>
                  <p className="text-foreground font-medium text-sm md:text-base">SZABIST University</p>
                  <p className="text-muted-foreground text-sm">Computer Science Graduate</p>
                </Card>

                <Card className="p-6 bg-background border-border hover:border-accent transition-colors">
                  <h3 className="text-base md:text-lg font-semibold mb-3 text-accent">Expertise</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm md:text-base">
                    <li>✓ Full-Stack Web Development</li>
                    <li>✓ DevOps & Cloud Infrastructure</li>
                    <li>✓ Microservices Architecture</li>
                    <li>✓ CI/CD Pipeline Design</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section data-section className="py-16 lg:py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 lg:mb-12 text-center">Skills & Expertise</h2>
            
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {skills.map((skillGroup, idx) => {
                const Icon = skillGroup.icon;
                return (
                  <Card 
                    key={idx} 
                    className="p-6 md:p-8 bg-card border-border hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <Icon className="text-accent" size={24} />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-foreground">{skillGroup.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs md:text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section data-section className="py-16 lg:py-20 px-4 bg-card/30">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 lg:mb-12 text-center">Featured Projects</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {projects.map((project, idx) => (
                <Card 
                  key={idx}
                  className="group p-6 bg-background border-border hover:border-accent transition-all duration-300 overflow-hidden"
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-2 py-1 bg-accent/10 text-accent text-xs rounded font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link}
                      className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all text-sm font-medium"
                    >
                      View Project <ExternalLink size={16} />
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Accent Section with Strands */}
        <section className="relative py-16 lg:py-20 overflow-hidden">
          <div className="absolute inset-0 z-0 h-96">
            <Strands
              colors={['#d4a574', '#c9915f', '#e8b88a', '#f0c9a0']}
              count={4}
              speed={0.6}
              amplitude={1.2}
              waviness={0.8}
              thickness={0.8}
              glow={2.2}
              intensity={0.7}
              opacity={0.6}
              scale={1.2}
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 py-8 lg:py-12 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to collaborate?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              Let's build something amazing together
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section data-section className="py-16 lg:py-20 px-4 bg-card/50">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 lg:mb-12 text-center">Get In Touch</h2>
            
            <div className="space-y-4 md:space-y-6">
              <Card className="p-6 md:p-8 bg-background border-border hover:border-accent transition-colors">
                <div className="flex items-start gap-4">
                  <Mail className="text-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">Email</h3>
                    <a href="mailto:mubhanbhro@gmail.com" className="text-accent hover:underline text-sm md:text-base">
                      mubhanbhro@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 md:p-8 bg-background border-border hover:border-accent transition-colors">
                <div className="flex items-start gap-4">
                  <Instagram className="text-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">Instagram</h3>
                    <a href="https://instagram.com/bhanbhrosia" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-sm md:text-base">
                      @bhanbhrosia
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 md:p-8 bg-background border-border hover:border-accent transition-colors">
                <div className="flex items-start gap-4">
                  <Github className="text-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">GitHub</h3>
                    <a href="https://github.com/usamabhanbhro" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-sm md:text-base">
                      @usamabhanbhro
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-8 lg:mt-12 text-center">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Send Me an Email
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 bg-card border-t border-border text-center text-muted-foreground text-sm">
          <p>© 2026 Muhammad Usama Bhanbhro. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
