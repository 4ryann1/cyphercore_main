import { Target, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage.',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We work closely with you to understand and exceed your expectations.',
    },
    {
      icon: Award,
      title: 'Quality Driven',
      description: 'We never compromise on quality. Every line of code, every design element is crafted with excellence in mind.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description: 'We believe in constant learning and improvement, both for our team and our clients.',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="mb-6">
            <span className="gradient-text">About CypherCore</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We are a team of passionate technologists, designers, and innovators dedicated to 
            transforming businesses through technology. Since our founding, we've helped over 50 
            companies achieve their digital goals.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-card border border-border/50 rounded-2xl p-8 shadow-elegant">
              <h2 className="mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses of all sizes with innovative technology solutions that drive 
                growth, efficiency, and competitive advantage. We believe that great technology 
                should be accessible to everyone.
              </p>
            </div>

            <div className="bg-gradient-card border border-border/50 rounded-2xl p-8 shadow-elegant">
              <h2 className="mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted technology partner for businesses worldwide, known for our 
                innovation, reliability, and commitment to client success. We envision a future 
                where technology seamlessly enhances every aspect of business.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4 animate-glow">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-hero text-white rounded-2xl p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">100+</div>
                <div className="text-white/80">Projects Completed</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-white/80">Happy Clients</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">15+</div>
                <div className="text-white/80">Team Members</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">5+</div>
                <div className="text-white/80">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
