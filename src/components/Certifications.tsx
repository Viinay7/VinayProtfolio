import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";
import { ExternalLink } from "lucide-react";

export function Certifications() {
  // Add card hover effects
  useEffect(() => {
    if (!document.getElementById('cert-hover-effects')) {
      const styleElement = document.createElement('style');
      styleElement.id = 'cert-hover-effects';
      styleElement.textContent = `
        .cert-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid rgba(var(--border-rgb), 0.3);
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        
        .cert-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.8), rgba(var(--primary-rgb), 0.4));
          transform: translateY(-100%);
          transition: transform 0.3s ease;
        }
        
        .cert-card:hover {
          transform: translateY(-8px);
          border: 3px solid rgba(0, 0, 0, 0.8);
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1), 0 6px 10px rgba(0, 0, 0, 0.06);
        }
        
        /* Dark mode support for the border */
        .dark .cert-card:hover {
          border: 3px solid rgba(255, 255, 255, 0.8);
        }
        
        .cert-card:hover::before {
          transform: translateY(0);
        }
        
        .cert-card .card-title {
          transition: color 0.3s ease;
        }
        
        .cert-card:hover .card-title {
          color: hsl(var(--primary));
        }
        
        .cert-card .verify-link {
          position: relative;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
        }
        
        .cert-card .verify-link svg {
          transition: transform 0.3s ease;
        }
        
        .cert-card:hover .verify-link {
          color: hsl(var(--primary));
        }
        
        .cert-card:hover .verify-link svg {
          transform: translateX(2px);
        }
        
        .cert-date-badge {
          transition: all 0.3s ease;
        }
        
        .cert-card:hover .cert-date-badge {
          background-color: hsl(var(--primary));
          color: white;
        }
        
        /* Add shadow animation */
        @keyframes shadowPulse {
          0% {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.05);
          }
          50% {
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.09), 0 3px 6px rgba(0, 0, 0, 0.06);
          }
          100% {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.05);
          }
        }
      `;
      document.head.appendChild(styleElement);
    }
    
    return () => {
      const styleElement = document.getElementById('cert-hover-effects');
      if (styleElement) {
        styleElement.remove();
      }
    };
  }, []);

  const certifications = [
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Jul 2024",
      credentialId: "c03720fa65cb4b858e4ccf91f6c6c202",
      skills: ["EC2", "S3", "IAM", "Cloud Watch"],
      link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/c03720fa65cb4b858e4ccf91f6c6c202"
    },
    {
      title: "Salesforse AI Associate",
      issuer: "Salesforce",
      date: "Oct 2024",
      credentialId: "5119222",
      skills: ["Gen AI", "Superivised Learning", "NLP", "Gen AI Integration"],
      link: "https://drive.google.com/file/d/1BgeS08YmP84CS0KJZ5f1Hb0OPGkjZ1JB/view?usp=sharing"
    },
    {
      title: "Oracle Gen AI Certified Professional",
      issuer: "Oracle",
      date: "Aug 1st",
      credentialId: "100761565OCI2024GAIOCP",
      skills: ["Gen AI", "Machine Learning", "Neural Networks", "API Integration"],
      link: "https://drive.google.com/file/d/1l9FUS3aFQj18mu0jeihFM9R7rGUdLvtL/view?usp=sharing"
    },
    {
      title: "RPA Automation Anywhere 2024",
      issuer: "RPA",
      date: "Aug 2024",
      credentialId: "AAESSE2024A360 - 113915137",
      skills: ["Bot Development", "Bot  Deployment", "Infrastructure"],
      link: "https://drive.google.com/file/d/12N_Ip7ChSwE5GGAu9ve4DDfAwGnHPT2u/view?usp=sharing"
    }
  ];

  return (
    <section id="certifications" className="py-16 px-4 md:py-24 md:px-6 fade-in">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center fade-in-down">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Certifications
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Professional certifications and courses I've completed
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 fade-in-up">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className={`cert-card transition-all fade-in-${index % 2 === 0 ? 'left' : 'right'} delay-${(index + 1) * 100}`}
            >
              <CardHeader className="pb-2">
                <Badge className="mb-2 w-fit cert-date-badge">{cert.date}</Badge>
                <CardTitle className="text-lg card-title">{cert.title}</CardTitle>
                <CardDescription>{cert.issuer}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground">Credential ID</p>
                  <p className="text-sm font-medium">{cert.credentialId}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2">Skills</p>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block text-sm font-medium text-primary hover:underline verify-link"
                >
                  Verify Certificate <ExternalLink className="h-3.5 w-3.5 ml-0.5" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}