import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp, Users, Award } from "lucide-react";
const Experience = () => {
  const experiences = [{
    title: "Senior Cloud Architect",
    company: "Celebal Technologies",
    period: "Apr 2025 - Present",
    duration: "3 months",
    location: "Houston, Texas, United States",
    type: "Full-time",
    current: true,
    description: "Leading cloud architecture initiatives and strategic cloud transformation projects for enterprise clients."
  }, {
    title: "Cloud Architect",
    company: "Celebal Technologies",
    period: "Apr 2024 - Apr 2025",
    duration: "1 year 1 month",
    location: "Jaipur, Rajasthan, India",
    type: "Full-time",
    description: "Designed and implemented scalable cloud solutions, led migration projects, and optimized cloud infrastructure for cost efficiency."
  }, {
    title: "Cloud Consultant",
    company: "Celebal Technologies",
    period: "Apr 2023 - Mar 2024",
    duration: "1 year",
    location: "Jaipur, Rajasthan, India",
    type: "On-site",
    description: "Provided strategic cloud consulting services, developed cloud strategies, and facilitated client communication for cloud adoption."
  }, {
    title: "Cloud Engineer",
    company: "Celebal Technologies",
    period: "Apr 2022 - Mar 2023",
    duration: "1 year",
    location: "Jaipur, Rajasthan, India",
    type: "On-site",
    description: "Implemented cloud infrastructure, managed cloud services, and supported enterprise cloud deployments."
  }, {
    title: "Associate Cloud Engineer",
    company: "Celebal Technologies",
    period: "Oct 2020 - Mar 2022",
    duration: "1 year 6 months",
    location: "Jaipur, Rajasthan, India",
    type: "On-site",
    description: "Started career in cloud engineering, learned cloud fundamentals, and contributed to various cloud projects."
  }];
  const achievements = [{
    title: "Migration Practice Lead",
    description: "Leading data center and database migration initiatives",
    icon: <TrendingUp className="w-5 h-5" />
  }];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            4+ years of progressive growth in cloud architecture, from Associate Engineer to Senior Architect, 
            specializing in cloud migration, cost optimization, and enterprise solutions.
          </p>
        </div>

        {/* Key Achievements */}
        <div className="flex justify-center mb-16">
          <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in max-w-md">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">Migration Practice Lead</h3>
              <p className="text-muted-foreground">Leading data center and database migration initiatives</p>
            </CardContent>
          </Card>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {experiences.map((exp, index) => <Card key={`${exp.title}-${exp.period}`} className={`shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in ${exp.current ? 'ring-2 ring-primary/20 bg-accent/50' : ''}`} style={{
          animationDelay: `${0.6 + index * 0.1}s`
        }}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-foreground flex items-center gap-2">
                      {exp.title}
                      {exp.current && <Badge variant="default" className="bg-primary">
                          Current
                        </Badge>}
                    </CardTitle>
                    <p className="text-lg font-semibold text-primary mt-1">{exp.company}</p>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.period} • {exp.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {exp.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </CardContent>
            </Card>)}
        </div>

        {/* Career Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">20+</div>
            <div className="text-muted-foreground">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">20+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="text-muted-foreground">Cloud Platforms</div>
          </div>
        </div>
      </div>
    </section>;
};
export default Experience;