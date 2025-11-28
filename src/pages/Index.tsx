import { Link } from 'react-router-dom';
import { ArrowRight, Code, Palette, Cpu, Video, GraduationCap, Briefcase, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServiceCard } from '@/components/ServiceCard';

const Index = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      link: '/services/web-development',
    },
    {
      icon: Cpu,
      title: 'Python Applications',
      description: 'Scalable backend systems and data-driven applications',
      link: '/services/python-app',
    },
    {
      icon: Cpu,
      title: 'Java Applications',
      description: 'Enterprise-grade applications with robust architecture',
      link: '/services/java-app',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love',
      link: '/services/ui-ux-design',
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video content for marketing and branding',
      link: '/services/video-editing',
    },
    {
      icon: Sparkles,
      title: 'Content Creation',
      description: 'Engaging content that tells your brand story',
      link: '/services/content-creation',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE0YzAtMS4xMDUtLjg5NS0yLTItMnMtMiAuODk1LTIgMiAuODk1IDIgMiAyIDItLjg5NSAyLTJ6bTAgMzZjMC0xLjEwNS0uODk1LTItMi0ycy0yIC44OTUtMiAyIC44OTUgMiAyIDIgMi0uODk1IDItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-slide-in-up">
            {/* Logo Placeholder - Users can upload their animated logo */}
            <div className="mb-8 flex justify-center">
              <div className="w-32 h-32 bg-gradient-hero rounded-2xl flex items-center justify-center animate-glow">
                <span className="text-6xl font-bold text-white">CC</span>
              </div>
            </div>

            <h1 className="mb-6 animate-fade-in">
              <span className="block text-foreground">Transform Your Business</span>
              <span className="block gradient-text mt-2">With Technology</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              CypherCore Technologies delivers cutting-edge software solutions, 
              from web development to AI-powered applications. We turn your vision into reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button
                asChild
                size="lg"
                className="bg-gradient-hero hover:shadow-hover transition-all text-lg"
              >
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all text-lg"
              >
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="text-4xl font-bold gradient-text mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
                <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <div className="text-4xl font-bold gradient-text mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Courses */}
              <div className="group hover:shadow-elegant transition-all duration-300 p-8 rounded-2xl bg-gradient-card border border-border/50">
                <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mb-6 group-hover:animate-glow">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-4">Professional Courses</h3>
                <p className="text-muted-foreground mb-6">
                  Master in-demand skills with our comprehensive courses in web development, 
                  Python, Java, and more. Learn from industry experts.
                </p>
                <Button asChild variant="outline" className="border-primary/30 hover:bg-primary hover:text-primary-foreground">
                  <Link to="/courses">
                    Explore Courses <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>

              {/* Internships */}
              <div className="group hover:shadow-elegant transition-all duration-300 p-8 rounded-2xl bg-gradient-card border border-border/50">
                <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mb-6 group-hover:animate-glow">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-4">Internship Programs</h3>
                <p className="text-muted-foreground mb-6">
                  Gain real-world experience with our hands-on internship programs. 
                  Work on live projects and build your portfolio.
                </p>
                <Button asChild variant="outline" className="border-primary/30 hover:bg-primary hover:text-primary-foreground">
                  <Link to="/internships">
                    Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-white">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with technology
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="text-lg hover:shadow-hover transition-all"
          >
            <Link to="/contact">
              Contact Us Today <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
