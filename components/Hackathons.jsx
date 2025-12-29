import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Calendar, Users, MapPin, Code, BookOpen } from "lucide-react"; // Added BookOpen icon
import Image from "next/image";

const achievements = [
  {
    type: "hackathon",
    title: "Smart India Hackathon 2025",
    organizer: "VIIT Pune",
    date: "Oct 2025",
    theme: "MedTech / BioTech",
    team: "Geeks",
    project: "Smart Health Monitoring System",
    description: "Proposed an AI/ML-based Early Warning System for water-borne diseases in Rural Northeast India. Integrated IoT for water quality monitoring and a multilingual mobile app.",
    role: "Full Stack & AI Lead",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1740&auto=format&fit=crop",
    tags: ["AI/ML", "IoT", "HealthTech", "Mobile App"],
    location: "Pune, India"
  },
  {
    type: "hackathon",
    title: "InnoHack 2.0",
    organizer: "VIT Pune",
    date: "Jul 2025",
    theme: "Healthcare Innovation",
    team: "Geeks Team",
    project: "ConnectCare",
    description: "Developed an AI-powered platform connecting patients with doctors. Features included smart diagnosis assistance and streamlined appointment booking. Focused on the React frontend.",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1740&auto=format&fit=crop",
    tags: ["React.js", "UI/UX", "Healthcare"],
    location: "Pune, India"
  },
  {
    type: "publication", // Distinct type
    title: "Int. Conference (C2I6) 2025",
    organizer: "IEEE / C2I6 Conference",
    date: "2025",
    theme: "Research Publication",
    team: "Research Team",
    project: "Real-Time Pose Correction System",
    description: "Presented a research paper titled 'Real-Time Upper Body Pose Correction and Feedback System Using MediaPipe'. Explored computer vision techniques for gym form correction to prevent injuries.",
    role: "Author & Presenter",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1740&auto=format&fit=crop", // Conference / Presentation Image
    tags: ["Research Paper", "Computer Vision", "MediaPipe", "Publication"],
    location: "Conference"
  }
];

export default function Hackathons() {
  return (
    <section id="hackathons" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="p-3 rounded-full bg-primary/10 mb-4">
             <Trophy className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Hackathons & Research
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-6" />
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            From rapid prototyping in hackathons to academic research contributions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {achievements.map((item, index) => (
            <Card key={index} className="flex flex-col overflow-hidden border-muted hover:border-primary/50 hover:shadow-xl transition-all duration-300 group">
              
              {/* Image Header */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image 
                   src={item.image} 
                   alt={item.title} 
                   fill 
                   className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                <div className="absolute bottom-4 left-4 text-white right-4">
                    <div className="flex justify-between items-start">
                        <Badge variant="secondary" className={`mb-2 border-none text-white ${item.type === 'publication' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-primary/90 hover:bg-primary'}`}>
                            {item.theme}
                        </Badge>
                    </div>
                    <h3 className="text-lg font-bold leading-tight line-clamp-2">{item.project}</h3>
                </div>
              </div>

              <CardHeader className="pb-2">
                <div className="flex justify-between items-start mb-2">
                   <div>
                       <CardTitle className="text-base font-semibold line-clamp-1" title={item.title}>{item.title}</CardTitle>
                       <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                          <MapPin className="h-3 w-3" /> {item.organizer}
                       </p>
                   </div>
                   <div className="flex flex-col items-end text-xs text-muted-foreground whitespace-nowrap">
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {item.date}</span>
                   </div>
                </div>
              </CardHeader>

              <CardContent className="flex-grow space-y-4">
                <CardDescription className="text-sm leading-relaxed line-clamp-3">
                   {item.description}
                </CardDescription>
                
                {/* Team & Role Info */}
                <div className="grid grid-cols-2 gap-2 p-2 bg-secondary/30 rounded-lg border border-border/50 text-xs">
                    <div className="flex flex-col gap-1">
                        <span className="font-semibold uppercase text-muted-foreground flex items-center gap-1">
                            <Users className="h-3 w-3" /> {item.type === 'publication' ? 'Authors' : 'Team'}
                        </span>
                        <span className="font-medium truncate">{item.team}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="font-semibold uppercase text-muted-foreground flex items-center gap-1">
                            {item.type === 'publication' ? <BookOpen className="h-3 w-3" /> : <Code className="h-3 w-3" />} Role
                        </span>
                        <span className="font-medium truncate">{item.role}</span>
                    </div>
                </div>
              </CardContent>

              <CardFooter className="pt-2 mt-auto">
                 <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-[10px] px-2 py-0">
                            {tag}
                        </Badge>
                    ))}
                 </div>
              </CardFooter>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}