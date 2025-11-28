import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

export const ServiceCard = ({ icon: Icon, title, description, link }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50">
      <CardHeader>
        <div className="w-14 h-14 bg-gradient-hero rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow transition-all">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          asChild
          variant="outline"
          className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all"
        >
          <Link to={link}>Learn More</Link>
        </Button>
      </CardContent>
    </Card>
  );
};
