import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import {
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#000035] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-violet-900 rounded-full p-2 w-10 h-10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                </svg>
              </div>
              <div>
                <div className="text-xl font-bold">Tourex</div>
                <div className="text-xs text-blue-600/70 -mt-1">
                  A Travel Agency
                </div>
              </div>
            </div>
            <p className="text-white/70 text-sm mb-6">
              Pharetra Maecenas Felis Vestibulum Convallis Mollis Nullam Congue
              Sit.D Rivers Of Finland Quebec.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your mail"
                className="bg-white/10 border-0 text-white placeholder:text-white/50"
              />
              <Button size="icon" className="bg-blue-600 hover:bg-blue-600/90">
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            <div className="flex space-x-3 mt-6">
              <a
                href="#"
                className="bg-blue-600/10 hover:bg-primary rounded-full p-2 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-primary rounded-full p-2 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-primary rounded-full p-2 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-primary rounded-full p-2 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Tour Guide", "Contact Us"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-white/70 text-sm">
                  58 Street Commercial Road
                  <br />
                  Fratton, Australia
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-white/70 text-sm">+123 888 9999</div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-white/70 text-sm">
                  Mon – Sat: 8 Am – 5 Pm,
                  <br />
                  Sunday: <span className="font-bold text-white">CLOSED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Utility Pages */}
          <div>
            <h3 className="text-xl font-bold mb-4">Utility Pages</h3>
            <ul className="space-y-3">
              {[
                "Style Guide",
                "Password Protected",
                "404 Error",
                "Changelog",
                "License",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-white/70 text-sm">
            Copyright ©Tourex | All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
