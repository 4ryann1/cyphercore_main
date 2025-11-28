import { ExternalLink, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Full-featured online store with payment integration, inventory management, and admin dashboard.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format',
    },
    {
      title: 'Healthcare Management System',
      category: 'Enterprise Application',
      description: 'Comprehensive system for managing patient records, appointments, and medical billing.',
      tech: ['Java', 'Spring Boot', 'MySQL', 'React'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format',
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      category: 'Data Science',
      description: 'Real-time analytics platform with machine learning predictions and interactive visualizations.',
      tech: ['Python', 'TensorFlow', 'React', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format',
    },
    {
      title: 'Mobile Banking App',
      category: 'UI/UX Design',
      description: 'Modern banking interface with seamless user experience and secure transaction flows.',
      tech: ['Figma', 'React Native', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format',
    },
    {
      title: 'Social Media Platform',
      category: 'Web Development',
      description: 'Feature-rich social network with real-time messaging, posts, and content sharing.',
      tech: ['Next.js', 'GraphQL', 'PostgreSQL', 'WebSocket'],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format',
    },
    {
      title: 'Learning Management System',
      category: 'Education Technology',
      description: 'Comprehensive platform for online courses, assessments, and student progress tracking.',
      tech: ['React', 'Node.js', 'MongoDB', 'AWS'],
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="mb-6">
            <span className="gradient-text">Our Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore our successful projects across web development, mobile apps, 
            enterprise solutions, and design. Each project showcases our commitment to excellence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group hover:shadow-hover transition-all duration-300 overflow-hidden bg-gradient-card border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <span className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                  {project.category}
                </span>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-primary/30 hover:bg-primary hover:text-primary-foreground"
                >
                  <Code className="w-4 h-4 mr-2" />
                  View Details
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/30 hover:bg-primary hover:text-primary-foreground"
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center max-w-3xl mx-auto p-12 rounded-2xl bg-gradient-hero text-white">
          <h2 className="mb-4 text-white">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's create something amazing together. Get in touch to discuss your ideas.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="text-lg hover:shadow-hover transition-all"
          >
            <a href="/contact">Start Your Project</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
