import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Achievements() {
  // Add achievement card hover effects
  useEffect(() => {
    if (!document.getElementById('achievement-hover-effects')) {
      const styleElement = document.createElement('style');
      styleElement.id = 'achievement-hover-effects';
      styleElement.textContent = `
        .achievement-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          border: 2px solid rgba(var(--border-rgb), 0.3);
        }
        
        .achievement-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at top right, 
            rgba(var(--primary-rgb), 0.15), 
            transparent 60%);
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: 0;
        }
        
        .achievement-card:hover {
          transform: translateY(-8px);
          border-color: rgba(var(--primary-rgb), 0.3);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12), 0 5px 12px rgba(0, 0, 0, 0.08);
        }
        
        .achievement-card:hover::before {
          opacity: 1;
        }
        
        .achievement-card .trophy-icon {
          transition: all 0.4s ease;
        }
        
        .achievement-card:hover .trophy-icon {
          transform: scale(1.15) rotate(12deg);
          color: hsl(var(--primary));
        }
        
        .achievement-card .card-title {
          transition: color 0.3s ease;
          position: relative;
          z-index: 1;
        }
        
        .achievement-card:hover .card-title {
          color: hsl(var(--primary));
        }
        
        .achievement-badge {
          transition: all 0.3s ease;
        }
        
        .achievement-card:hover .achievement-badge {
          background-color: hsl(var(--primary));
          color: white;
        }
        
        .code-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          z-index: 1;
        }
        
        .code-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, 
            rgba(var(--primary-rgb), 0.7), 
            rgba(var(--primary-rgb), 0.3));
          z-index: -1;
          transition: opacity 0.3s ease;
          opacity: 0;
        }
        
        .code-btn:hover::before {
          opacity: 1;
        }
        
        .code-btn svg {
          transition: transform 0.3s ease;
        }
        
        .code-btn:hover svg {
          transform: scale(1.1);
        }
      `;
      document.head.appendChild(styleElement);
    }
    
    return () => {
      const styleElement = document.getElementById('achievement-hover-effects');
      if (styleElement) {
        styleElement.remove();
      }
    };
  }, []);

  // Define your achievement data
  const achievement = {
    title: "Machine Learning Hackthon",
    organization: "IIT Guwahati-IDFC First Bank",
    date: "January 2025",
    description: "Led a team of 3 to develop a machine learning model for credit card behavior scoring using the realtime dataset given by IDFC bank of 5 lakhs samples using XG Boost and Ensembling Learning models to solve the problem statement with the accuracy of 80%, Qualified for the finals and secured 2nd place among 200+ teams.",
    tags: ["Machine Learning", "XG Boost", "Ensembled Learning", "Data Processing", "Python"],
    codeUrl: "https://github.com/Viinay7/ML-Hackthon-Credit-Card-Behavior-Score-"
  };

  return (
    <section id="achievements" className="py-16 px-4 md:py-24 md:px-6 fade-in">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center fade-in-down">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Achievements
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Notable recognition and accomplishments in my professional career
          </p>
        </div>
        
        <div className="mt-12 max-w-4xl mx-auto fade-in-up">
          <Card className="achievement-card relative overflow-hidden">
            <div className="absolute top-6 right-6 opacity-60 trophy-icon">
              <Trophy className="h-14 w-14 text-primary/30" />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <Badge className="mb-2 achievement-badge">{achievement.date}</Badge>
                  <CardTitle className="text-2xl card-title">{achievement.title}</CardTitle>
                  <p className="text-muted-foreground">{achievement.organization}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{achievement.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {achievement.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              {/* Add GitHub Link */}
              <div className="mt-6">
                <Button 
                  variant="outline" 
                  className="code-btn group" 
                  asChild
                >
                  <a 
                    href={achievement.codeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" /> 
                    View Code
                    <ExternalLink className="h-3 w-3 ml-1 opacity-70" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}