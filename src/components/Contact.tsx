import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Linkedin, 
  MapPin, 
  Phone, 
  Calendar, 
  ExternalLink,
  MessageSquare,
  Briefcase,
  Clock,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "sachin.jha@celebaltech.com",
      description: "Best for detailed project discussions",
      action: "Send Email",
      primary: true
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "linkedin.com/in/sachinjha",
      description: "Professional networking and updates",
      action: "Connect on LinkedIn",
      primary: false
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Schedule Call",
      value: "Book a consultation",
      description: "30-min cloud architecture consultation",
      action: "Schedule Meeting",
      primary: false
    }
  ];

  const availabilityStatus = {
    available: true,
    nextAvailable: "Today",
    responseTime: "Within 24 hours",
    timezone: "CST (Houston, TX)"
  };

  const projectTypes = [
    "Cloud Migration Strategy",
    "Architecture Review",
    "Cost Optimization",
    "Security Assessment",
    "Training & Consultation",
    "Emergency Support"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your cloud infrastructure? Let's discuss how I can help 
            your organization achieve its cloud goals with proven expertise and strategic guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Availability Status */}
            <Card className="shadow-card animate-fade-in">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${availabilityStatus.available ? 'bg-green-500' : 'bg-yellow-500'} animate-pulse`}></div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {availabilityStatus.available ? 'Available for New Projects' : 'Limited Availability'}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Response time: {availabilityStatus.responseTime}
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {availabilityStatus.timezone}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <Card 
                  key={method.title}
                  className={`shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in ${
                    method.primary ? 'ring-2 ring-primary/20 bg-accent/30' : ''
                  }`}
                  style={{animationDelay: `${0.1 + index * 0.1}s`}}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-full ${method.primary ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                          {method.icon}
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{method.title}</div>
                          <div className="text-sm text-primary">{method.value}</div>
                          <div className="text-sm text-muted-foreground mt-1">{method.description}</div>
                        </div>
                      </div>
                      <Button 
                        variant={method.primary ? "default" : "outline"}
                        className={method.primary ? "shadow-elegant hover:shadow-glow" : ""}
                      >
                        {method.action}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Location & Company */}
            <Card className="shadow-card animate-fade-in" style={{animationDelay: '0.4s'}}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Professional Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <div className="font-medium text-foreground">Location</div>
                      <div className="text-sm text-muted-foreground">Houston, Texas, United States</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <div className="font-medium text-foreground">Company</div>
                      <div className="text-sm text-muted-foreground">Celebal Technologies</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Project Types & Quick Info */}
          <div className="space-y-6">
            {/* Project Types */}
            <Card className="shadow-card animate-fade-in" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  Services Available
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {projectTypes.map((type, index) => (
                  <div key={type} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-foreground">{type}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="shadow-card animate-fade-in" style={{animationDelay: '0.3s'}}>
              <CardHeader>
                <CardTitle>Why Choose Me?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Experience</span>
                    <span className="font-semibold text-foreground">4+ Years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Certifications</span>
                    <span className="font-semibold text-foreground">15+ Active</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Cloud Platforms</span>
                    <span className="font-semibold text-foreground">Azure, AWS, GCP</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Success Rate</span>
                    <span className="font-semibold text-foreground">98%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="shadow-card bg-gradient-primary text-primary-foreground animate-fade-in" style={{animationDelay: '0.5s'}}>
              <CardContent className="pt-6 text-center">
                <Calendar className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Free Consultation</h3>
                <p className="text-sm mb-4 opacity-90">
                  Get a complimentary 30-minute cloud strategy session
                </p>
                <Button variant="secondary" className="w-full">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;