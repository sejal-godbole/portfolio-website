import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  LayoutTemplate, 
  Server, 
  Cloud, 
  BookOpen,
  Users,
  CodeXml,
  BrainCircuit
} from "lucide-react";

const skillCategories = [
  {
    title: "AI / ML & Data Science",
    icon: <BrainCircuit className="h-8 w-8 mb-2 text-rose-400" />, // Lighter color for dark bg
    description: "Computer Vision, NLP, and AI Model integration.",
    skills: ["CNN", "OpenCV", "MediaPipe", "BERT", "Tesseract OCR", "NER", "Google Gemini API"],
  },
  {
    title: "Languages",
    icon: <CodeXml className="h-8 w-8 mb-2 text-red-400" />,
    description: "Foundational programming languages.",
    skills: ["C++", "Python", "JavaScript", "SQL"],
  },
  {
    title: "Frontend Development",
    icon: <LayoutTemplate className="h-8 w-8 mb-2 text-blue-400" />,
    description: "Building responsive, pixel-perfect UIs.",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Shadcn UI", "Bootstrap", "HTML5", "CSS3", "React Hook Form"],
  },
  {
    title: "Backend & API",
    icon: <Server className="h-8 w-8 mb-2 text-purple-400" />,
    description: "Server-side logic and integrations.",
    skills: ["Node.js", "REST APIs", "Server Actions", "Zod", "Clerk (Auth)"],
  },
  {
    title: "Databases",
    icon: <Database className="h-8 w-8 mb-2 text-green-400" />,
    description: "Data storage and ORM management.",
    skills: ["PostgreSQL", "MongoDB", "Prisma ORM"],
  },
  {
    title: "DevOps & Tools",
    icon: <Cloud className="h-8 w-8 mb-2 text-orange-400" />,
    description: "Deployment, version control, and cloud.",
    skills: ["Docker", "AWS", "Git", "GitHub", "VS Code"],
  },
  {
    title: "Core Concepts",
    icon: <BookOpen className="h-8 w-8 mb-2 text-indigo-400" />,
    description: "Computer Science fundamentals.",
    skills: ["Data Structures & Algorithms", "OOP", "DBMS", "OS", "Computer Networks"],
  },
  {
    title: "Soft Skills",
    icon: <Users className="h-8 w-8 mb-2 text-pink-400" />,
    description: "Professional and interpersonal skills.",
    skills: ["Collaboration", "Teamwork", "Determination", "Communication", "Leadership"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-foreground/90 text-background">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Technical Proficiency
          </h2>
          <div className="w-20 h-1.5 bg-background rounded-full mb-6 opacity-80" />
          {/* Changed text-muted-foreground to text-background/60 for visibility */}
          <p className="max-w-[700px] text-background/60 md:text-xl">
            A comprehensive overview of my technical skills, specializing in Full Stack Development and AI/ML Engineering.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              // UPDATED CSS: Transparent background, light border, and light text
              className="group bg-background/5 border-background/10 text-background hover:bg-background/10 transition-all duration-300 backdrop-blur-sm"
            >
              <CardHeader>
                {/* Icon Container: Subtle transparency */}
                <div className="p-3 w-fit rounded-xl bg-background/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
                <CardDescription className="text-background/60">
                    {category.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline"
                      // UPDATED BADGE: Glass effect with light border
                      className="border-background/20 bg-background/5 hover:bg-background/20 text-background/90 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* "Currently Learning" Bottom Bar */}
        {/* UPDATED CSS: Matching the dark theme glass effect */}
        <div className="mt-16 p-6 rounded-2xl bg-background/5 border border-dashed border-background/20 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-background/10 rounded-full">
                    <Code2 className="h-6 w-6 text-background" />
                </div>
                <div>
                    <h4 className="font-semibold text-lg text-background">Continuous Learning</h4>
                    <p className="text-background/60 text-sm">Always expanding my technical arsenal.</p>
                </div>
            </div>
            <div className="flex gap-3">
                 <Badge variant="outline" className="text-base px-4 py-1 border-background/30 text-background">GenAI Architecture</Badge>
                 <Badge variant="outline" className="text-base px-4 py-1 border-background/30 text-background">System Design</Badge>
                 <Badge variant="outline" className="text-base px-4 py-1 border-background/30 text-background">Advanced RAG</Badge>
            </div>
        </div>

      </div>
    </section>
  );
}