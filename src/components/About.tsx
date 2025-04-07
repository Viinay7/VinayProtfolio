import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Cloud, Database } from "lucide-react";
import { useEffect } from "react";

export function About() {
  // Add card interaction effects
  useEffect(() => {
    if (!document.getElementById('card-hover-effects')) {
      const styleElement = document.createElement('style');
      styleElement.id = 'card-hover-effects';
      styleElement.textContent = `
        .skill-card {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.1) 0%, rgba(var(--primary-rgb), 0) 50%);
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: 0;
        }
        
        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
        }
        
        .skill-card:hover::before {
          opacity: 1;
        }
        
        .skill-card .icon-container {
          transition: all 0.3s ease;
        }
        
        .skill-card:hover .icon-container {
          transform: scale(1.1);
          background-color: rgba(var(--primary-rgb), 0.2);
        }
        
        .skill-card:hover h4 {
          color: hsl(var(--primary));
        }
      `;
      document.head.appendChild(styleElement);
    }
    
    return () => {
      const styleElement = document.getElementById('card-hover-effects');
      if (styleElement) {
        styleElement.remove();
      }
    };
  }, []);

  return (
    <section id="about" className="py-16 px-4 md:py-24 md:px-6 fade-in">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center fade-in-down">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            A passionate engineer with a problem-solving mindset and a love for innovation.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
          <div className="space-y-4 fade-in-left delay-100">
            <h3 className="text-2xl font-bold">Who I Am ?</h3>
            <p className="text-muted-foreground">
              I'm a dedicated AI & ML Engineer and Full Stack Developer with a passion for building intelligent systems and end-to-end applications. With a strong foundation in both backend and frontend technologies, along with expertise in machine learning, I bring a holistic approach to every project.
            </p>
            <p className="text-muted-foreground">
              I thrive in collaborative environments and enjoy solving real-world problems through data-driven solutions. My goal is to build scalable, impactful digital products that combine smart algorithms with seamless user experiences.
            </p>
            <div className="pt-4">
              <Button asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
          <div className="space-y-4 fade-in-right delay-200">
            <h3 className="text-2xl font-bold">What I Do</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="skill-card fade-in-up delay-300">
                <CardContent className="p-6 space-y-2">
                  <div className="icon-container flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary">
                    <Brain className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-medium transition-colors">Machine Learning & AI</h4>
                  <p className="text-sm text-muted-foreground">
                    Developing intelligent models for prediction, classification, and automation using Python, TensorFlow, PyTorch, and scikit-learn.
                  </p>
                </CardContent>
              </Card>
              <Card className="skill-card fade-in-up delay-400">
                <CardContent className="p-6 space-y-2">
                  <div className="icon-container flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary">
                    <Code className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-medium transition-colors">Full Stack Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Creating robust, responsive web applications using modern frameworks like React, Node.js, Express, and MongoDB with a focus on clean UI/UX.
                  </p>
                </CardContent>
              </Card>
              <Card className="skill-card fade-in-up delay-500">
                <CardContent className="p-6 space-y-2">
                  <div className="icon-container flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary">
                    <Cloud className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-medium transition-colors">Cloud Integration</h4>
                  <p className="text-sm text-muted-foreground">
                    Designing and deploying scalable applications using AWS — leveraging services like Lambda, EC2, S3, and cloud functions to ensure reliability and scalability.
                  </p>
                </CardContent>
              </Card>
              <Card className="skill-card fade-in-up delay-600">
                <CardContent className="p-6 space-y-2">
                  <div className="icon-container flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary">
                    <Database className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-medium transition-colors">API Development & Integration</h4>
                  <p className="text-sm text-muted-foreground">
                    Designing and consuming RESTful and GraphQL APIs to enable seamless communication between services, applications, and third-party tools.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}