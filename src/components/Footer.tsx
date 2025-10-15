import { Heart, Mail, Phone, Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import nssLogo from "@/assets/nss-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={nssLogo} alt="NSS Logo" className="w-12 h-12" />
              <h3 className="font-bold text-lg">NSS Blood Connect</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting life-savers with life-seekers. A National Service Scheme initiative.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/register" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Register as Donor
                </Link>
              </li>
              <li>
                <Link to="/find-donors" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Find Donors
                </Link>
              </li>
              <li>
                <Link to="/emergency" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Emergency Request
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About NSS
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <a href="mailto:nss@bloodconnect.org" className="hover:text-primary transition-colors">
                  nss@bloodconnect.org
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <a href="tel:+911800123456" className="hover:text-primary transition-colors">
                  1800-123-456
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-current animate-pulse-soft" /> by NSS Volunteers
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © 2025 NSS Blood Connect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
