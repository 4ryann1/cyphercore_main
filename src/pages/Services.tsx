import { Code, Cpu, Palette, Video, Sparkles, Globe } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with React, Next.js, and modern technologies. Responsive, fast, and SEO-optimized.',
      link: '/services/web-development',
    },
    {
      icon: Cpu,
      title: 'Python Applications',
      description: 'Scalable backend systems, data processing, machine learning models, and automation tools built with Python.',
      link: '/services/python-app',
    },
    {
      icon: Cpu,
      title: 'Java Applications',
      description: 'Enterprise-grade applications with Spring Boot, microservices architecture, and robust backend solutions.',
      link: '/services/java-app',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces designed with Figma. User-centered design that drives engagement and conversions.',
      link: '/services/ui-ux-design',
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing for marketing, tutorials, and brand content. Motion graphics and animations included.',
      link: '/services/video-editing',
    },
    {
      icon: Globe,
      title: 'Website Deployment',
      description: 'Complete deployment solutions with AWS, Vercel, and modern hosting platforms. CI/CD setup and monitoring.',
      link: '/services/website-deployment',
    },
    {
      icon: Sparkles,
      title: 'Content Creation',
      description: 'Engaging content for blogs, social media, and marketing. SEO-optimized copy that converts.',
      link: '/services/content-creation',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="mb-6">
            <span className="gradient-text">Our Services</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive technology solutions designed to accelerate your business growth. 
            From concept to deployment, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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

        {/* CTA Section */}
        <div className="mt-24 text-center max-w-3xl mx-auto p-12 rounded-2xl bg-gradient-card border border-border/50 shadow-elegant">
          <h2 className="mb-4">Need a Custom Solution?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Don't see exactly what you're looking for? We specialize in custom solutions 
            tailored to your unique business needs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-gradient-hero rounded-lg hover:shadow-hover transition-all"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
