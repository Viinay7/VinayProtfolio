import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Skills() {
  const technicalSkills = [
    { name: "HTML & CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Mongo DB", level: 70 },
  ];

  const aimlSkills = [
    { name: "Python", level: 95 },
    { name: "PyTorch", level: 85 },
    { name: "Scikit-Learn", level: 80 },
    { name: "Natural Language Processing", level: 80 },
    { name: "Gen AI", level: 75 },
    { name: "Computer Vision", level: 70 },
  ];

  const softSkills = [
    "Communication",
    "Problem Solving",
    "Teamwork",
  ];

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
            <TabsContent value="technical" className="mt-6 space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2 fade-in-left" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex justify-between">
                    <h3 className="font-medium">{skill.name}</h3>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </TabsContent>
            <TabsContent value="design" className="mt-6 space-y-6">
              {aimlSkills.map((skill, index) => (
                <div key={index} className="space-y-2 fade-in-left" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex justify-between">
                    <h3 className="font-medium">{skill.name}</h3>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </TabsContent>
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