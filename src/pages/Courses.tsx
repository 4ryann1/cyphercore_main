import { Clock, Users, BookOpen, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Courses = () => {
  const courses = [
    {
      title: 'Full Stack Web Development',
      duration: '12 Weeks',
      students: '50+',
      level: 'Beginner to Advanced',
      description: 'Master React, Node.js, databases, and deployment. Build real-world projects and learn industry best practices.',
      topics: ['React & Next.js', 'Node.js & Express', 'MongoDB & PostgreSQL', 'REST APIs', 'Authentication', 'Deployment'],
    },
    {
      title: 'Python for Data Science',
      duration: '10 Weeks',
      students: '40+',
      level: 'Intermediate',
      description: 'Learn Python programming, data analysis, machine learning, and visualization. Work with real datasets.',
      topics: ['Python Fundamentals', 'NumPy & Pandas', 'Data Visualization', 'Machine Learning', 'Deep Learning Basics', 'Projects'],
    },
    {
      title: 'Java Enterprise Development',
      duration: '14 Weeks',
      students: '35+',
      level: 'Intermediate to Advanced',
      description: 'Build scalable enterprise applications with Spring Boot, microservices, and cloud deployment.',
      topics: ['Java Advanced', 'Spring Boot', 'Microservices', 'JPA & Hibernate', 'Security', 'Cloud Deployment'],
    },
    {
      title: 'UI/UX Design Masterclass',
      duration: '8 Weeks',
      students: '45+',
      level: 'Beginner to Intermediate',
      description: 'Learn user-centered design, prototyping, and design systems. Master Figma and industry workflows.',
      topics: ['Design Principles', 'User Research', 'Wireframing', 'Prototyping', 'Figma', 'Design Systems'],
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="mb-6">
            <span className="gradient-text">Professional Courses</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Master in-demand skills with our comprehensive, project-based courses. 
            Learn from industry experts and build a portfolio that stands out.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {courses.map((course, index) => (
            <Card
              key={course.title}
              className="hover:shadow-hover transition-all duration-300 bg-gradient-card border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {course.level}
                  </span>
                </div>
                <CardTitle className="text-2xl">{course.title}</CardTitle>
                <CardDescription className="text-base">{course.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{course.students} Students</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">What You'll Learn:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {course.topics.map((topic) => (
                      <div key={topic} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button className="w-full bg-gradient-hero hover:shadow-hover transition-all">
                  Enroll Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-card border border-border/50 rounded-2xl p-8 shadow-elegant">
            <h2 className="text-center mb-12">Why Choose Our Courses?</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Industry Expert Instructors</h3>
                <p className="text-sm text-muted-foreground">Learn from professionals with real-world experience</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Project-Based Learning</h3>
                <p className="text-sm text-muted-foreground">Build real projects for your portfolio</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Small Class Sizes</h3>
                <p className="text-sm text-muted-foreground">Get personalized attention and mentorship</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Certificate of Completion</h3>
                <p className="text-sm text-muted-foreground">Showcase your achievements to employers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
