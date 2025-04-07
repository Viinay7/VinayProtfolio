import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { useEffect, useRef } from "react";
import { useTheme } from "@/components/ThemeProvider";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  // Add animated background effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Simplified background animation that works in both light and dark modes
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }[] = [];
    
    // Fewer particles for better performance
    const particleCount = Math.min(window.innerWidth * 0.03, 50);
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.3 + 0.1
      });
    }
    
    // Animation loop
    let animationFrame: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Boundary check
        if (p.x < 0 || p.x > canvas.width) {
          p.speedX = -p.speedX;
        }
        if (p.y < 0 || p.y > canvas.height) {
          p.speedY = -p.speedY;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        // Different colors for dark and light mode
        if (isDark) {
          ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        } else {
          ctx.fillStyle = `rgba(0, 0, 0, ${p.opacity * 0.6})`;
        }
        
        ctx.fill();
        
        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = isDark 
              ? `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})` 
              : `rgba(0, 0, 0, ${0.06 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      
      animationFrame = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [theme]);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-12 px-4 md:py-24 md:px-6 overflow-hidden">
      {/* Animated background canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 -z-10"></canvas>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/80 to-background/90 dark:from-background dark:via-background/70 dark:to-background/90"></div>
      
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-16 gap-10">
          {/* Profile Image */}
          <div className="overflow-hidden rounded-full border-4 border-primary/20 shadow-xl fade-in-down hover:shadow-2xl hover:border-primary/30 transition-all duration-300">
            <img
              alt="Profile"
              className="h-40 w-40 object-cover md:h-64 md:w-64"
              src="https://media-hosting.imagekit.io/6da87e36a4cc43fb/my%20image.jpg?Expires=1838542107&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=h58ZteeLxk3Hq6d78vqI9rkWWRsw5Y3~AQhR34wnEZ3GZh1fqGZ14niss8EMePkUsTPi2AtkiTXy3xLBdoZzeYw4S3zCj3Cgq1lr27I88N~xtqBOE34MA7aEYH4EU2NuxrImRYB3OJScQiWYhFt8C0pD6eGrs6zq-aXLciHKwhhPij~DNiDmDg3jUrHovqy5tDo0I3Wg1heJllggBulmB7CUamYw830Ui3aka611TfId~ZhKxK1HHRodNvjdGx70G0x-W8jSiC1gQPXGOfntgPLoUVsrEjycWulA0Ef2h9CnGdLNK3wDNKfxI~SQrNd2jt43~uyKUuRa1twzQY9UYA__"
              width={256}
              height={256}
            />
          </div>
          
          {/* Content */}
          <div className="flex flex-col gap-8 text-center md:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl fade-in-down delay-100">
                Vinay Maguluri
              </h1>
              <p className="text-muted-foreground md:text-xl fade-in-down delay-200">
                AI & ML Engineer | Full Stack Developer 
              </p>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:gap-4 fade-in-up delay-300">
              <Button size="lg" className="shadow-md hover:shadow-lg transition-all" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
              <Button size="lg" variant="outline" className="shadow-sm hover:shadow-md transition-all" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            <div className="flex justify-center md:justify-start gap-4 mt-2 fade-in-up delay-400">
              <a
                href="https://github.com/Viinay7"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/vinay-maguluri-881369255/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/vinaymaguluri_7"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                aria-label="X (formerly Twitter)"
              >
                <XIcon size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// X (formerly Twitter) icon component
function XIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z"
        fill="currentColor"
      />
    </svg>
  );
}