
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const projects = [
    {
      title: "VChat – AI Virtual Assistant using LLM",
      description: "An intelligent chatbot application powered by LLMs, designed to handle real-time conversations",
      image: "https://plus.unsplash.com/premium_photo-1677094310919-d0361465d3be?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js","API's","Fetch API"],
      demoLink: "https://vinay-chat.vercel.app/",
      codeLink: "https://github.com/Viinay7/VinayChat"
    },
    {
      title: "Open CV Projects",
      description: "Built projects using OpenCV for image processing and computer vision tasks (Face Detection, Hand Volume Control, AI Voice Assistant).",
      image: "https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Open CV", "Python", "API", "MongoDB"],
      demoLink: "#",
      codeLink: "https://github.com/Viinay7/OpenCV-Projects"
    },
    {
      title: "Business Analytics",
      description: "Created a Power BI report that provides insights into business performance using data visualization and analysis.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      tags: ["Data Manuplation", "SQL", "pandas, numpy, seaborn", "Power BI"],
      demoLink: "https://app.powerbi.com/links/A8ddyo0eoI?ctid=808cc83e-a546-47e7-a03f-73a1ebba24f3&pbi_source=linkShare&bookmarkGuid=b8afcc7e-6b3e-4fe8-8b5e-086ed7901e16",
      codeLink: "https://github.com/Viinay7/Chocolate-Factory-Data-Analysis"
    },
    {
      title: "Hospital Management System",
      description: "AI powered hospital management system that automates patient management, appointment scheduling, and medical record keeping.",
      image: "https://img.freepik.com/free-photo/medical-banner-with-doctor-working-laptop_23-2149611211.jpg?t=st=1743927876~exp=1743931476~hmac=27c386be7de65a8cefea7ca50ebecce854aaeb97dcad6b8846697361e914a3a3&w=1380",
      tags: ["React", "Java Script", "Fine tuned models", "MongoDB", "API's"],
      demoLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <section id="projects" className="bg-secondary/50 py-16 px-4 md:py-24 md:px-6">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            A selection of my best work and personal projects
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="aspect-video overflow-hidden">
                <img
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                  src={project.image}
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-4">
                <div className="flex gap-2">
                  <Button size="sm" variant="default" asChild>
                    <a href={project.demoLink} target="_blank" rel="noreferrer">Live Demo</a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.codeLink} target="_blank" rel="noreferrer">Source Code</a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" asChild>
            <a href="https://github.com/Viinay7" target="_blank" rel="noreferrer">
              View More Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
