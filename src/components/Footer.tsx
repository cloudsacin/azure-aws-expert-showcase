import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Cloud, Heart, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-hero text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Cloud className="w-8 h-8 text-primary-glow" />
              <span className="text-2xl font-bold">Sachin Kumar Jha</span>
            </div>
            <p className="text-white/80 text-sm">
              Senior Cloud Architect helping businesses unlock the full potential of cloud technology 
              with 4+ years of experience and 15+ certifications.
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

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors flex items-center gap-1">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="text-white/80 hover:text-white transition-colors flex items-center gap-1">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="text-white/80 hover:text-white transition-colors flex items-center gap-1">
                  Experience
                </a>
              </li>
              <li>
                <a href="#certifications" className="text-white/80 hover:text-white transition-colors flex items-center gap-1">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors flex items-center gap-1">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Professional Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Professional</h3>
            <div className="space-y-2 text-sm">
              <div className="text-white/80">
                <div className="font-medium text-white">Current Role</div>
                Senior Cloud Architect at Celebal Technologies
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
              href="https://linkedin.com/in/sachinjha" 
              className="text-white/80 hover:text-white transition-colors flex items-center gap-1"
            >
              LinkedIn Profile
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-white/40">•</span>
            <div className="text-white/80 flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-red-400" /> for the cloud community
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