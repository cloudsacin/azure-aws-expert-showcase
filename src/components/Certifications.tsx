import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Calendar, CheckCircle } from "lucide-react";

const Certifications = () => {
  const currentCertifications = [
    {
      title: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services (AWS)",
      issued: "Mar 2025",
      expires: "Mar 2028",
      level: "Professional",
      status: "Active",
      logo: "🏆"
    },
    {
      title: "Professional Cloud Architect",
      issuer: "Google Cloud",
      issued: "Jan 2025",
      expires: "Jan 2027",
      level: "Professional",
      status: "Active",
      logo: "☁️"
    },
    {
      title: "Microsoft Certified Trainer (MCT)",
      issuer: "Microsoft",
      issued: "Aug 2021",
      expires: "Ongoing",
      level: "Professional",
      status: "Active",
      logo: "🎓"
    },
    {
      title: "Google Analytics Certification",
      issuer: "Google",
      issued: "Dec 2024",
      expires: "Dec 2025",
      level: "Professional",
      status: "Active",
      logo: "📊"
    }
  ];

  const recentCertifications = [
    {
      title: "AWS Well-Architected Framework: Reliability Pillar",
      issuer: "LinkedIn",
      issued: "Dec 2024",
      type: "Specialization"
    },
    {
      title: "Cloud Architecture: Design Decisions",
      issuer: "LinkedIn",
      issued: "Dec 2024",
      type: "Specialization"
    },
    {
      title: "DeepLearning Certified AI for Everyone",
      issuer: "Coursera",
      issued: "Jul 2024",
      type: "AI/ML"
    },
    {
      title: "Microsoft Certified Azure Databricks for Data Engineering",
      issuer: "Coursera",
      issued: "Nov 2023",
      type: "Data Engineering"
    },
    {
      title: "Google Cloud Certified Introduction to Generative AI",
      issuer: "Coursera",
      issued: "Oct 2023",
      type: "AI/ML"
    }
  ];

  const azureCertifications = [
    "Microsoft Certified: Azure Solutions Architect Expert",
    "Microsoft Certified: Azure Security Engineer Associate",
    "Microsoft Certified: Azure Network Engineer Associate",
    "Microsoft Certified: Azure Administrator Associate",
    "Microsoft Certified: Azure Fundamentals",
    "Microsoft Certified: Security, Compliance, and Identity Fundamentals"
  ];

  const certificationStats = {
    total: 15,
    azure: 7,
    aws: 2,
    gcp: 1,
    active: 12
  };

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Certifications & Credentials
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry-recognized certifications spanning all major cloud platforms, 
            demonstrating deep expertise and commitment to continuous learning.
          </p>
        </div>

        {/* Certification Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center shadow-card animate-fade-in">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">{certificationStats.total}+</div>
              <div className="text-muted-foreground">Total Certifications</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-card animate-fade-in" style={{animationDelay: '0.1s'}}>
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">{certificationStats.azure}x</div>
              <div className="text-muted-foreground">Azure Certified</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-card animate-fade-in" style={{animationDelay: '0.2s'}}>
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">{certificationStats.aws}x</div>
              <div className="text-muted-foreground">AWS Certified</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-card animate-fade-in" style={{animationDelay: '0.3s'}}>
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">{certificationStats.gcp}x</div>
              <div className="text-muted-foreground">GCP Certified</div>
            </CardContent>
          </Card>
        </div>

        {/* Current Active Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
            <Award className="w-6 h-6 text-primary" />
            Current Active Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentCertifications.map((cert, index) => (
              <Card 
                key={cert.title}
                className="shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{animationDelay: `${0.4 + index * 0.1}s`}}
              >
                <CardHeader>
                  <CardTitle className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{cert.logo}</span>
                      <div>
                        <div className="text-lg text-foreground">{cert.title}</div>
                        <div className="text-sm text-primary font-medium">{cert.issuer}</div>
                      </div>
                    </div>
                    <Badge variant="default" className="bg-green-600">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {cert.status}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Level:</span>
                      <Badge variant="secondary">{cert.level}</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Issued:</span>
                      <span className="text-foreground">{cert.issued}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Expires:</span>
                      <span className="text-foreground">{cert.expires}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Credential
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Azure Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Microsoft Azure Certifications (7x)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {azureCertifications.map((cert, index) => (
              <Card 
                key={cert}
                className="shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in"
                style={{animationDelay: `${0.8 + index * 0.05}s`}}
              >
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <div className="text-xl">🔷</div>
                    <div>
                      <div className="font-medium text-foreground text-sm">{cert}</div>
                      <div className="text-xs text-muted-foreground mt-1">Microsoft</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Additional Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Recent Specialization Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentCertifications.map((cert, index) => (
              <Card 
                key={cert.title}
                className="shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in"
                style={{animationDelay: `${1.2 + index * 0.1}s`}}
              >
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    <div>
                      <div className="font-medium text-foreground">{cert.title}</div>
                      <div className="text-sm text-primary">{cert.issuer}</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {cert.type}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {cert.issued}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;