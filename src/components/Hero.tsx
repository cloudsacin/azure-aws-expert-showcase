import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Linkedin, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary-glow/10"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-glow/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-primary-glow/15 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'shimmer 10s linear infinite'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white order-2 lg:order-1">
              {/* Professional Badge */}
              <div className="mb-6 animate-fade-in">
                <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2 text-sm">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Available for Cloud Migration Projects
                </Badge>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
                Sachin Kumar Jha
              </h1>
              
              {/* Professional Title */}
              <h2 className="text-2xl md:text-3xl text-primary-glow mb-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
                Senior Cloud Architect & Microsoft Certified Trainer
              </h2>
              
              {/* Location & Company */}
              <div className="flex items-center justify-start gap-6 mb-8 text-lg animate-slide-up" style={{animationDelay: '0.4s'}}>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary-glow" />
                  Houston, Texas
                </div>
                <div className="hidden md:block w-1 h-1 bg-white/50 rounded-full"></div>
                <div>Celebal Technologies</div>
              </div>
              
              {/* Certification Highlights */}
              <div className="flex flex-wrap justify-start gap-3 mb-8 animate-slide-up" style={{animationDelay: '0.6s'}}>
                <Badge variant="outline" className="bg-white/10 text-white border-white/30">
                  7x Azure Certified
                </Badge>
                <Badge variant="outline" className="bg-white/10 text-white border-white/30">
                  2x AWS Certified
                </Badge>
                <Badge variant="outline" className="bg-white/10 text-white border-white/30">
                  1x GCP Certified
                </Badge>
                <Badge variant="outline" className="bg-white/10 text-white border-white/30">
                  Microsoft Certified Trainer
                </Badge>
              </div>
              
              {/* Professional Summary */}
              <p className="text-xl text-white/90 mb-10 leading-relaxed animate-slide-up" style={{animationDelay: '0.8s'}}>
                Cloud Architect with 4+ years of experience helping businesses unlock the full potential of cloud technology. 
                Specialized in designing, implementing, and managing cloud infrastructure with expertise in migration and cost optimization.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-start gap-4 animate-slide-up" style={{animationDelay: '1s'}}>
                <Button 
                  variant="gradient" 
                  size="lg" 
                  className="animate-glow-pulse"
                  onClick={() => window.location.href = 'mailto:sachin.jha@celebaltech.com'}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Me
                </Button>
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="text-white hover:bg-white/10"
                  onClick={() => window.open('https://www.linkedin.com/in/sachin-kumar-jha-746005161/', '_blank')}
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn Profile
                </Button>
              </div>
            </div>
            
            {/* Right Content - Photo */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative animate-fade-in group" style={{animationDelay: '0.5s'}}>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary-glow/30 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-glass rounded-3xl"></div>
                <img 
                  src="/lovable-uploads/17b534f1-df65-44e7-a0aa-b1c3cfeac7ab.png" 
                  alt="Sachin Kumar Jha - Senior Cloud Architect"
                  className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-float border border-white/30 group-hover:scale-105 transition-all duration-700 backdrop-blur-sm"
                />
                
                {/* Floating elements around photo */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full blur-sm animate-float"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary-glow/20 rounded-full blur-md animate-float" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <div className="w-1 h-3 bg-white/60 rounded-full mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;