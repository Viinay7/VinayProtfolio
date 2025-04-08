import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Skills() {
  const technicalSkills = [
    { name: "HTML & CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  ];

  const aimlSkills = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "Scikit-Learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
    { name: "Numpy", icon: "https://devicon-website.vercel.app/api/numpy/original.svg" },
    { name: "Gen AI", icon: "https://img.icons8.com/color/48/artificial-intelligence.png" },
    { name: "Open CV", icon: "https://devicon-website.vercel.app/api/opencv/original.svg" },
  ];

  const softSkills = ["Communication", "Problem Solving", "Teamwork"];

  return (
    <section id="skills" className="py-16 px-4 md:py-24 md:px-6 fade-in">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center fade-in-down">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Skills & Expertise
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Technologies and abilities I've mastered over the years
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl fade-in-up delay-100">
          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="design">AI/ML Skills</TabsTrigger>
              <TabsTrigger value="soft">Soft Skills</TabsTrigger>
            </TabsList>

            {/* Technical Skills */}
            <TabsContent value="technical" className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center gap-2 fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain" />
                  <span className="text-sm font-medium text-center">{skill.name}</span>
                </div>
              ))}
            </TabsContent>

            {/* AI/ML Skills */}
            <TabsContent value="design" className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-6">
              {aimlSkills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center gap-2 fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain" />
                  <span className="text-sm font-medium text-center">{skill.name}</span>
                </div>
              ))}
            </TabsContent>

            {/* Soft Skills */}
            <TabsContent value="soft" className="mt-6">
              <Card className="fade-in-up delay-200">
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {softSkills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-sm fade-in" style={{ animationDelay: `${index * 50 + 200}ms` }}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
