import { useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Brain, BarChart3, FileText } from "lucide-react";

export function OtherInterests() {
  // Add hover effects for the interest cards
  useEffect(() => {
    if (!document.getElementById('interests-effects')) {
      const styleElement = document.createElement('style');
      styleElement.id = 'interests-effects';
      styleElement.textContent = `
        .interest-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(var(--border-rgb), 0.2);
          background: rgba(var(--card-rgb), 0.8);
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
        }
        
        .interest-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-position: 0% 0%;
          background-size: 300% 300%;
          background-image: linear-gradient(
            115deg,
            transparent 0%,
            transparent 40%,
            rgba(var(--primary-rgb), 0.1) 60%,
            transparent 100%
          );
          transition: all 0.8s ease;
          z-index: 0;
          opacity: 0;
        }
        
        .interest-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px -15px rgba(var(--primary-rgb), 0.15), 
                      0 5px 10px rgba(var(--shadow-rgb), 0.12);
          border-color: rgba(var(--primary-rgb), 0.15);
        }
        
        .interest-card:hover::before {
          opacity: 1;
          background-position: 100% 100%;
        }
        
        .interest-icon {
          position: relative;
          transition: all 0.3s ease;
          color: rgba(var(--foreground-rgb), 0.7);
        }
        
        .interest-card:hover .interest-icon {
          color: hsl(var(--primary));
          transform: scale(1.1);
        }
        
        .interest-card h3 {
          position: relative;
          transition: color 0.3s ease;
        }
        
        .interest-card:hover h3 {
          color: hsl(var(--primary));
        }
      `;
      document.head.appendChild(styleElement);
    }
    
    return () => {
      const styleElement = document.getElementById('interests-effects');
      if (styleElement) {
        styleElement.remove();
      }
    };
  }, []);

  const interests = [
    {
      title: "Content Management",
      icon: <FileText className="h-8 w-8 interest-icon" />,
      description: "Developing effective strategies for organizing, structuring, and presenting information across digital platforms. Passionate about creating systems that enhance user experience and streamline information access."
    },
    {
      title: "Political Analysis",
      icon: <Brain className="h-8 w-8 interest-icon" />,
      description: "Analyzing political trends, policies, and governance structures to understand their societal impacts. Interested in comparative political systems and how they shape public policy outcomes."
    },
    {
      title: "Prediction Models",
      icon: <BarChart3 className="h-8 w-8 interest-icon" />,
      description: "Developing and applying statistical and machine learning models to forecast political, social, and economic trends. Exploring the intersection of data science and predictive analytics in public policy domains."
    }
  ];

  return (
    <section id="other-interests" className="py-16 px-4 md:py-24 md:px-6 fade-in">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center fade-in-down">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Beyond Technology
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Other domains that fuel my intellectual curiosity
          </p>
        </div>
        
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 fade-in-up">
          {interests.map((interest, index) => (
            <Card 
              key={index} 
              className={`interest-card h-full fade-in-${index % 2 === 0 ? 'left' : 'right'} delay-${(index + 1) * 100}`}
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                {interest.icon}
                <h3 className="text-xl font-semibold">{interest.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{interest.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}