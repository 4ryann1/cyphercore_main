import { Briefcase, Calendar, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Internships = () => {
  const internships = [
    {
      title: 'Frontend Developer Intern',
      duration: '3-6 Months',
      location: 'Remote / On-site',
      positions: '5 Positions',
      description: 'Work on real client projects using React, Next.js, and modern frontend technologies. Learn from senior developers.',
      requirements: ['Basic knowledge of HTML, CSS, JavaScript', 'Familiarity with React', 'Problem-solving skills', 'Passion for learning'],
    },
    {
      title: 'Backend Developer Intern',
      duration: '3-6 Months',
      location: 'Remote / On-site',
      positions: '3 Positions',
      description: 'Build scalable APIs and work with databases. Learn Node.js, Python, or Java in a production environment.',
      requirements: ['Knowledge of programming fundamentals', 'Understanding of databases', 'REST API concepts', 'Team collaboration skills'],
    },
    {
      title: 'UI/UX Design Intern',
      duration: '3-6 Months',
      location: 'Remote / On-site',
      positions: '4 Positions',
      description: 'Design user interfaces for web and mobile applications. Work with Figma and learn from experienced designers.',
      requirements: ['Portfolio of design work', 'Figma proficiency', 'Understanding of design principles', 'Creative thinking'],
    },
    {
      title: 'Full Stack Developer Intern',
      duration: '3-6 Months',
      location: 'Remote / On-site',
      positions: '3 Positions',
      description: 'Get hands-on experience with both frontend and backend development. Work on complete features end-to-end.',
      requirements: ['Knowledge of frontend and backend basics', 'Problem-solving mindset', 'Willingness to learn', 'Good communication'],
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="mb-6">
            <span className="gradient-text">Internship Programs</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Launch your tech career with hands-on experience on real projects. 
            Work alongside industry professionals and build your portfolio.
          </p>
        </div>

        {/* Internships Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {internships.map((internship, index) => (
            <Card
              key={internship.title}
              className="hover:shadow-hover transition-all duration-300 bg-gradient-card border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">{internship.title}</CardTitle>
                <CardDescription className="text-base">{internship.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{internship.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{internship.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground col-span-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{internship.positions} Available</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {internship.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter>
                <Button className="w-full bg-gradient-hero hover:shadow-hover transition-all">
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-card border border-border/50 rounded-2xl p-8 shadow-elegant">
            <h2 className="text-center mb-12">Internship Benefits</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">Real Projects</div>
                <p className="text-muted-foreground">Work on actual client projects, not just tutorials</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">Mentorship</div>
                <p className="text-muted-foreground">Learn from experienced developers and designers</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">Certificate</div>
                <p className="text-muted-foreground">Receive a certificate of completion for your resume</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internships;
