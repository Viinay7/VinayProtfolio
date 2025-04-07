
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Education() {
  const education = [
    {
      institution: "KL University",
      degree: "Bachelor of Science in Artificial Intelligence & Data Science",
      duration: "2022 - 2026",
      description: "Pursuing a degree in Artificial Intelligence and Data Science. Currently in the 3rd year with hands-on experience through projects in machine learning, deep learning, and real-world data analytics applications."
    },
    {
      institution: "Sri Chaitanya Junior College",
      degree: "12th Grade",
      duration: "2020 - 2022",
      description: "Focused on Mathematics, Physics, and Computer Science."
    },
    {
      institution: "Dr KKR's Gowtham Concept School",
      degree: "Secondary Education",
      duration: "2019 - 2020",
      description: "Received foundation education with excellence in mathematics and science. Active participant in science exhibitions."
    }
  ];

  return (
    <section id="education" className="bg-secondary/50 py-16 px-4 md:py-24 md:px-6">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Education
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            My academic journey and qualifications
          </p>
        </div>
        <div className="mt-12 space-y-8 relative">
          {education.map((item, index) => (
            <div key={index} className="relative">
              <Card className="transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle>{item.institution}</CardTitle>
                  <p className="text-sm text-muted-foreground">{item.duration}</p>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">{item.degree}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
