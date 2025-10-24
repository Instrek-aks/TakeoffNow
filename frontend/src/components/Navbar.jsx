import { useState, useEffect } from "react";
import { Button } from "../components/ui/Button";
import { Phone, ShoppingCart, Menu, ChevronDown, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/Sheet";
import { Badge } from "../components/ui/Badge";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", hasDropdown: true },
    { name: "Features", href: "#features", hasDropdown: true },
    { name: "Pages", href: "#pages", hasDropdown: true },
    { name: "Blogs", href: "#blogs", hasDropdown: true },
    { name: "Contact", href: "#contact", hasDropdown: false },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <div className="bg-primary rounded-full p-2 w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
              </svg>
            </div>
            <div>
              <div className="text-xl font-bold text-foreground">Tourex</div>
              <div className="text-xs text-muted-foreground -mt-1">
                A Travel Agency
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors cursor-pointer">
                    <span>{link.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-background">
                    <DropdownMenuItem>Option 1</DropdownMenuItem>
                    <DropdownMenuItem>Option 2</DropdownMenuItem>
                    <DropdownMenuItem>Option 3</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              )
            )}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Phone */}
            <a
              href="tel:+1235959666"
              className="hidden md:flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
              <div className="text-sm">
                <div className="text-xs text-muted-foreground">Call Us:</div>
                <div className="font-semibold">+123 5959 66</div>
              </div>
            </a>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-secondary text-xs">
                0
              </Badge>
            </Button>

            {/* Login Button */}
            <Button className="hidden md:flex items-center space-x-2 bg-primary hover:bg-primary/90">
              <User className="w-4 h-4" />
              <span>Login</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-lg text-foreground hover:text-primary transition-colors py-2"
                    >
                      {link.name}
                    </a>
                  ))}
                  <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
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
