import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Layers, FileText, Code2, Dumbbell, Leaf } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Data with specific Unsplash images matching the topics
const projects = [
  {
    title: "Avion - AI Career Toolkit",
    description: "An intelligent platform for job preparation. Engineered AI-driven features using the Gemini-Flash-2.5 model to enhance application processes. Implemented type-safe architecture with Server Actions.",
    tech: ["Next.js", "JavaScript", "Gemini API", "Clerk Auth", "Zod"],
    github: "https://github.com/sejal-godbole/AIVION",
    live: "#", 
    // Image: Abstract AI / Tech connection
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop", 
    icon: <Layers className="h-6 w-6 text-blue-500" />,
    date: "Oct 2025 - Dec 2025"
  },
  {
    title: "AI Shredder++",
    description: "Security tool for auto-redaction and classification. Uses Tesseract OCR and OpenCV to extract text and redact sensitive entities. Features hybrid detection (NER + Regex) for risk scoring.",
    tech: ["Python", "OpenCV", "Tesseract", "NER", "NLP"],
    github: "https://github.com/sejal-godbole/AI-Shredder",
    live: "#",
    // Image: Cyber Security / Lock / Code
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1740&auto=format&fit=crop",
    icon: <FileText className="h-6 w-6 text-green-500" />,
    date: "July 2025 - Sept 2025"
  },
  {
    title: "Takumi - UI Generator",
    description: "Generative AI tool that converts natural language into interactive JSX components. Features a live coding environment using Monaco Editor and instant preview capabilities.",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Gemini API"],
    github: "https://github.com/sejal-godbole/takumi",
    live: "#",
    // Image: Coding / Monitor Setup
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1738&auto=format&fit=crop",
    icon: <Code2 className="h-6 w-6 text-purple-500" />,
    date: "Nov 2025 - Dec 2025"
  },
  {
    title: "Gym Pose Estimation",
    description: "Real-time gym pose estimation using MediaPipe Pose and OpenCV, enabling accurate exercise form tracking and repetition counting to prevent injuries.",
    tech: ["MediaPipe", "OpenCV", "Streamlit", "Python"],
    github: "https://github.com/sejal-godbole/Gym_Pose_Estimation",
    live: "#",
    // Image: Gym / Weights
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1740&auto=format&fit=crop",
    icon: <Dumbbell className="h-6 w-6 text-red-500"/>,
    date: "Feb 2025 - March 2025"
  },
  {
    title: "Potato Leaf Disease",
    description: "An end-to-end potato leaf disease classifier (Early blight, Late blight, Healthy) with a TensorFlow model, FastAPI serving layer, and a Vite/React frontend.",
    tech: ["Python", "TensorFlow", "Keras", "FastAPI"],
    github: "https://github.com/sejal-godbole/Gym_Pose_Estimation",
    live: "#",
    // Image: Green Leaves / Nature
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1740&auto=format&fit=crop",
    icon: <Leaf className="h-6 w-6 text-emerald-500"/>,
    date: "Nov 2025 - Dec 2025"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/80">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-6" />
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            A showcase of my work in Full Stack Development, AI integration, and Computer Vision.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col h-full hover:shadow-xl transition-all duration-300 border-muted hover:border-primary/50 group overflow-hidden">
              
              {/* IMAGE CONTAINER */}
              <div className="relative w-full h-48 overflow-hidden bg-muted">
                <Image 
                   src={project.image} 
                   alt={project.title} 
                   fill 
                   className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay Gradient for text readability if needed */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2 text-primary">
                        {project.icon}
                    </div>
                    <Badge variant="outline" className="text-xs text-muted-foreground">
                        {project.date}
                    </Badge>
                </div>
                <CardTitle className="mt-3 text-xl group-hover:text-primary transition-colors">
                    {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-3 mt-2">
                    {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="px-2 py-0.5 text-xs font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="pt-4 mt-auto border-t bg-muted/20">
                <div className="flex gap-4 w-full">
                    <Button asChild variant="outline" size="sm" className="w-full gap-2 hover:bg-background hover:text-primary">
                        <Link href={project.github} target="_blank">
                            <Github className="h-4 w-4" /> View Code
                        </Link>
                    </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}