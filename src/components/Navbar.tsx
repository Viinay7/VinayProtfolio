import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { FileText, Menu, X } from "lucide-react";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetTitle,
  SheetHeader,
  SheetClose
} from "@/components/ui/sheet";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add animation styles
  useEffect(() => {
    // Only add if not already present
    if (!document.getElementById('navbar-animations')) {
      const styleElement = document.createElement('style');
      styleElement.id = 'navbar-animations';
      styleElement.textContent = `
        @keyframes pulse-subtle {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.02);
            opacity: 0.9;
          }
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 2s infinite ease-in-out;
        }
      `;
      document.head.appendChild(styleElement);
    }
    
    // Cleanup function to remove the style element when component unmounts
    return () => {
      const styleElement = document.getElementById('navbar-animations');
      if (styleElement) {
        styleElement.remove();
      }
    };
  }, []);
  
  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-md" 
          : "bg-background/70 backdrop-blur-sm shadow-sm border-b border-border/40"}`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <a href="#" className="text-xl font-bold tracking-tighter">
            Vinay Maguluri
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:gap-6">
          <a href="#about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </a>
          <a href="#education" className="text-sm font-medium hover:underline underline-offset-4">
            Education
          </a>
          <a href="#skills" className="text-sm font-medium hover:underline underline-offset-4">
            Skills
          </a>
          <a href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
            Projects
          </a>
          <a href="#certifications" className="text-sm font-medium hover:underline underline-offset-4">
            Certifications
          </a>
          <a href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </a>
        </nav>
        
        <div className="flex items-center gap-3">
          <ThemeToggle />
          
          {/* Resume button - hidden on mobile */}
          <a 
            href="https://drive.google.com/file/d/1kPOnmYf5VcF8pDQT69_qiybVE0smku7C/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1 px-4 py-2 rounded-md font-medium text-white bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-purple-600 hover:via-indigo-500 hover:to-blue-500 border border-transparent transition-all duration-500 shadow-md hover:shadow-lg animate-pulse-subtle hover:animate-none"
          >
            <FileText className="h-4 w-4" /> My Resume
          </a>
          
          {/* Get in Touch - hidden on mobile */}
          <Button className="hidden md:flex" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
          
          {/* Mobile Menu Button - only visible on mobile */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] sm:w-[350px] md:hidden">
              <SheetHeader className="mb-6">
                <SheetTitle>Navigation Menu</SheetTitle>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={handleLinkClick}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </Button>
                </SheetClose>
              </SheetHeader>
              
              <nav className="flex flex-col gap-4">
                <a 
                  href="#about" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={handleLinkClick}
                >
                  About
                </a>
                <a 
                  href="#education" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={handleLinkClick}
                >
                  Education
                </a>
                <a 
                  href="#skills" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={handleLinkClick}
                >
                  Skills
                </a>
                <a 
                  href="#projects" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={handleLinkClick}
                >
                  Projects
                </a>
                <a 
                  href="#certifications" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={handleLinkClick}
                >
                  Certifications
                </a>
                <a 
                  href="#contact" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={handleLinkClick}
                >
                  Contact
                </a>
                
                <div className="mt-4 pt-4 border-t">
                  <a 
                    href="https://drive.google.com/file/d/1L2LtwEla9jQXzNNFMxj5BvAfUUo6o_Yz/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mb-4 w-full px-4 py-3 rounded-md font-medium text-white bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-purple-600 hover:via-indigo-500 hover:to-blue-500 transition-all duration-300"
                    onClick={handleLinkClick}
                  >
                    <FileText className="h-5 w-5" /> 
                    Download My Resume
                  </a>
                  <Button 
                    className="w-full" 
                    onClick={() => {
                      handleLinkClick();
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Get in Touch
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}