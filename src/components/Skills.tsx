import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cloud, 
  Database, 
  Shield, 
  Code, 
  Settings, 
  Server,
  Zap,
  Users,
  Target,
  Briefcase
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "Microsoft Azure", level: "Expert", certs: "7x Certified" },
        { name: "Amazon Web Services", level: "Advanced", certs: "2x Certified" },
        { name: "Google Cloud Platform", level: "Professional", certs: "1x Certified" }
      ]
    },
    {
      title: "Architecture & Design",
      icon: <Target className="w-6 h-6" />,
      skills: [
        { name: "Cloud Architecture", level: "Expert" },
        { name: "Enterprise Landing Zone", level: "Expert" },
        { name: "Well-Architected Framework", level: "Advanced" },
        { name: "Microservices Design", level: "Advanced" }
      ]
    },
    {
      title: "Migration & Optimization",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Data Center Migration", level: "Expert" },
        { name: "Database Migration", level: "Expert" },
        { name: "Cost Optimization", level: "Advanced" },
        { name: "Performance Tuning", level: "Advanced" }
      ]
    },
    {
      title: "Security & Compliance",
      icon: <Shield className="w-6 h-6" />,
      skills: [
        { name: "Cloud Security", level: "Expert" },
        { name: "Identity Management", level: "Advanced" },
        { name: "Compliance Framework", level: "Advanced" },
        { name: "Risk Assessment", level: "Advanced" }
      ]
    },
    {
      title: "Data & Analytics",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Azure Databricks", level: "Expert" },
        { name: "Microsoft Purview", level: "Advanced" },
        { name: "Data Pipeline Design", level: "Advanced" },
        { name: "Analytics Solutions", level: "Advanced" }
      ]
    },
    {
      title: "DevOps & Automation",
      icon: <Settings className="w-6 h-6" />,
      skills: [
        { name: "Infrastructure as Code", level: "Advanced" },
        { name: "CI/CD Pipelines", level: "Advanced" },
        { name: "Kubernetes (AKS)", level: "Advanced" },
        { name: "Automation Scripts", level: "Advanced" }
      ]
    }
  ];

  const specializations = [
    "BCDR (Business Continuity & Disaster Recovery)",
    "DPI (Data Platform Implementation)",
    "Azure Virtual Desktop (AVS)",
    "Oracle Cloud Infrastructure (OCI)",
    "Open AI Integration",
    "Microsoft Certified Training"
  ];

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive cloud architecture skills backed by industry-leading certifications 
            and hands-on experience across multiple cloud platforms.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  {category.icon}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-foreground">{skill.name}</div>
                      {skill.certs && (
                        <div className="text-sm text-primary font-medium">{skill.certs}</div>
                      )}
                    </div>
                    <Badge 
                      variant={skill.level === "Expert" ? "default" : "secondary"}
                      className={skill.level === "Expert" ? "bg-primary" : ""}
                    >
                      {skill.level}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specializations */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">Key Specializations</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {specializations.map((spec, index) => (
              <Badge 
                key={spec} 
                variant="outline" 
                className="px-4 py-2 text-base border-primary/30 hover:bg-primary hover:text-primary-foreground transition-colors duration-300 animate-fade-in"
                style={{animationDelay: `${1 + index * 0.1}s`}}
              >
                {spec}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;