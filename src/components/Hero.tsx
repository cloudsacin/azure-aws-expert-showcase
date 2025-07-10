import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Linkedin, Download, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary-glow/10"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-glow/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Professional Badge */}
          <div className="mb-6 animate-fade-in">
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2 text-sm">
              <ExternalLink className="w-4 h-4 mr-2" />
              Available for Cloud Architecture Projects
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
          <div className="flex items-center justify-center gap-6 mb-8 text-lg animate-slide-up" style={{animationDelay: '0.4s'}}>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary-glow" />
              Houston, Texas
            </div>
            <div className="hidden md:block w-1 h-1 bg-white/50 rounded-full"></div>
            <div>Celebal Technologies</div>
          </div>
          
          {/* Certification Highlights */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-slide-up" style={{animationDelay: '0.6s'}}>
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
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{animationDelay: '0.8s'}}>
            Cloud Architect with 4+ years of experience helping businesses unlock the full potential of cloud technology. 
            Specialized in designing, implementing, and managing cloud infrastructure with expertise in migration and cost optimization.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{animationDelay: '1s'}}>
            <Button variant="gradient" size="lg" className="animate-glow-pulse">
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn Profile
            </Button>
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