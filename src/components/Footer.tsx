import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Cloud, Heart, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-hero text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Cloud className="w-8 h-8 text-primary-glow" />
              <span className="text-2xl font-bold">Sachin Kumar Jha</span>
            </div>
            <p className="text-white/80 text-sm">
              Senior Cloud Architect helping businesses unlock the full potential of cloud technology 
              with 4+ years of experience and 20+ certifications.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-white/10 text-white border-white/30">
                7x Azure
              </Badge>
              <Badge variant="outline" className="bg-white/10 text-white border-white/30">
                2x AWS
              </Badge>
              <Badge variant="outline" className="bg-white/10 text-white border-white/30">
                1x GCP
              </Badge>
            </div>
          </div>

          {/* Professional Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Professional</h3>
            <div className="space-y-2 text-sm">
              <div className="text-white/80">
                <div className="font-medium text-white">Current Role</div>
                Senior Cloud Architect at 
                <a 
                  href="https://celebaltech.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-glow hover:text-primary ml-1"
                >
                  Celebal Technologies
                </a>
              </div>
              <div className="text-white/80">
                <div className="font-medium text-white">Location</div>
                Houston, Texas, United States
              </div>
              <div className="text-white/80">
                <div className="font-medium text-white">Specialization</div>
                Cloud Migration, BCDR, Automation
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-white/80">
            © {currentYear} Sachin Kumar Jha. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4 text-sm">
            <a 
              href="https://www.linkedin.com/in/sachin-kumar-jha-746005161/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors flex items-center gap-1"
            >
              LinkedIn Profile
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-white/40">•</span>
            <div className="text-white/80 flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-red-400" /> by Sachin
            </div>
          </div>
        </div>

        {/* Professional Note */}
        <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
          <p className="text-xs text-white/70 text-center">
            This portfolio showcases my professional experience and certifications in cloud architecture. 
            Available for consulting, training, and strategic cloud transformation projects.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;