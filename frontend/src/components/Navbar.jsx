import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Phone, ShoppingCart, Menu, ChevronDown, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/Dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/Sheet";
import { Badge } from "../components/ui/Badge";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navLinks = [
    {
      name: "Home",
      href: "/",
      hasDropdown: false,
      dropdownItems: [
        "Hero banner (images + tagline)",
        "Highlights (Top packages, testimonials, CTA buttons)",
        "Quick contact / WhatsApp chat icon",
      ],
    },
    {
      name: "About Us",
      href: "/about",
      hasDropdown: false,
      dropdownItems: [
        "Who We Are",
        "What We Do (Website Description)",
        "Client Testimonials",
        "Team (optional)",
      ],
    },
    {
      name: "Packages",
      href: "/packages",
      hasDropdown: false,
      dropdownItems: ["Ready-made Itineraries"],
    },
    {
      name: "Contact",
      href: "/contact",
      hasDropdown: false,
      dropdownItems: [
        "Contact Form",
        "Email & Phone",
        "Map / Office Location",
        "WhatsApp Chat Integration",
      ],
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-sky-50/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-20 h-12 flex items-center justify-center">
              <img
                src="/logoB.webp"
                alt="TakeoffNow Logo"
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger
                    className={`flex items-center space-x-1 transition-colors cursor-pointer ${
                      isScrolled
                        ? "text-foreground hover:text-blue-600"
                        : "text-white hover:text-blue-200"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-gradient-to-br from-sky-50 to-cyan-50 border border-sky-200">
                    {link.dropdownItems.map((item, index) => (
                      <DropdownMenuItem key={index} className="text-sm">
                        {item}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={link.name === "Home" ? handleHomeClick : undefined}
                  className={`transition-colors ${
                    isScrolled
                      ? "text-foreground hover:text-blue-600"
                      : "text-white hover:text-blue-200"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Phone */}
            <a
              href="tel:+919549134848"
              className={`hidden md:flex items-center space-x-2 transition-colors ${
                isScrolled
                  ? "text-foreground hover:text-blue-600"
                  : "text-white hover:text-blue-200"
              }`}
            >
              <Phone className="w-5 h-5" />
              <div className="text-sm">
                <div
                  className={`text-xs ${
                    isScrolled ? "text-muted-foreground" : "text-white/70"
                  }`}
                >
                  Call Us:
                </div>
                <div className="font-semibold">+91 9549134848</div>
              </div>
            </a>

            {/* Cart */}
            {/* <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-orange-500 text-xs">
                0
              </Badge>
            </Button> */}

            {/* Login Button */}
            {/* <Button className="hidden md:flex items-center space-x-2 bg-blue-600 hover:bg-blue-600/90">
              <User className="w-4 h-4" />
              <span>Login</span>
            </Button> */}

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-80 bg-gradient-to-br from-sky-50 to-cyan-50 border border-sky-200 h-auto max-h-screen overflow-y-auto"
              >
                <div className="flex flex-col space-y-4 mt-8 pb-8">
                  {navLinks.map((link) => (
                    <div key={link.name} className="space-y-2">
                      <Link
                        to={link.href}
                        onClick={
                          link.name === "Home" ? handleHomeClick : undefined
                        }
                        className="text-lg text-gray-800 hover:text-blue-600 transition-colors py-2 block font-semibold"
                      >
                        {link.name}
                      </Link>
                      {link.hasDropdown && (
                        <div className="ml-4 space-y-1">
                          {link.dropdownItems.map((item, index) => (
                            <Link
                              key={index}
                              to={link.href}
                              className="text-sm text-gray-600 hover:text-blue-600 transition-colors py-1 block"
                            >
                              • {item}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-600/90">
                    <User className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
