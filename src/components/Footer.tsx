import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Input changing:", e.target.value);
    setEmail(e.target.value);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting with email:", email);
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubscribing(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to my newsletter.",
      });
      setEmail("");
      setIsSubscribing(false);
    }, 1500);
  };

  return (
    <footer className="bg-accent text-accent-foreground py-12 px-4 md:px-6 fade-in">
      <div className="container">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3 fade-in-up">
          <div className="fade-in-left delay-100">
            <h3 className="text-lg font-bold">Vinay Maguluri</h3>
            <p className="mt-2 text-sm">
              AI & ML Engineer | Full Stack Developer
            </p>
          </div>
          <div className="fade-in-up delay-200">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:underline hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:underline hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:underline hover:text-primary transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:underline hover:text-primary transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="fade-in-right delay-300">
            <h3 className="text-lg font-bold">Newsletter</h3>
            <p className="mt-2 text-sm">
              Subscribe to get updates on my latest projects and articles.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4 flex">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={handleInputChange}
                className="flex-1 rounded-l-md border border-r-0 bg-white text-black px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-primary transition-all hover:border-primary/50 focus:border-primary"
                required
              />
              <Button 
                type="submit" 
                className="rounded-l-none transition-all" 
                disabled={isSubscribing}
              >
                {isSubscribing ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-accent pt-6 sm:flex-row fade-in-up delay-400">
          <p className="text-sm">
            © {currentYear} Vinay Maguluri. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Viinay7"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-transform hover:scale-110"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/vinay-maguluri-881369255/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://x.com/vinaymaguluri_7"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-transform hover:scale-110"
              aria-label="X (formerly Twitter)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}