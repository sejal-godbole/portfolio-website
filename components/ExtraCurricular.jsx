import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, PenTool, Users } from "lucide-react";

const activities = [
  {
    organization: "CEC VIIT",
    role: "Design Team Member",
    year: "2025 - 2026",
    description: "Designing professional assets and social media creatives for CEC. Collaborating with the core team to maintain visual consistency across all official events and drives.",
    icon: <PenTool className="h-8 w-8 text-purple-400" />, // Lighter icon for dark bg
    tags: ["Graphic Design", "Branding", "Teamwork"],
  },
  {
    organization: "Gandharva 2025",
    role: "Design Team",
    year: "2025",
    description: "Played a key role in the visual direction of Gandharva, the annual cultural festival. Created event posters and banners that helped drive student engagement and participation.",
    icon: <Palette className="h-8 w-8 text-pink-400" />, // Lighter icon for dark bg
    tags: ["Event Design", "Creativity"],
  },
];

export default function ExtraCurricular() {
  return (
    // DARK BACKGROUND
    <section id="extra-curricular" className="py-20 bg-foreground/90 text-background">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          {/* Glass Icon Circle */}
          <div className="p-3 rounded-full bg-background/10 mb-4 backdrop-blur-sm border border-background/20">
             <Users className="h-8 w-8 text-background" />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Beyond Coding
          </h2>
          <div className="w-20 h-1.5 bg-background/80 rounded-full mb-6" />
          <p className="max-w-[700px] text-background/70 md:text-xl">
            My contributions to campus life, leadership roles, and creative communities.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {activities.map((item, index) => (
            <Card 
                key={index} 
                // GLASS CARD STYLING
                className="flex flex-col bg-background/5 border-background/10 text-background hover:bg-background/10 transition-all duration-300 hover:shadow-2xl hover:shadow-background/5 backdrop-blur-sm"
            >
              <CardHeader className="flex flex-row items-start gap-4 pb-2">
                {/* Icon Container */}
                <div className="p-3 bg-background/10 rounded-xl border border-background/10 shadow-sm">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold">{item.organization}</h3>
                      {/* Badge Styling */}
                      <Badge variant="outline" className="text-xs font-normal border-background/20 text-background/90">
                        {item.year}
                      </Badge>
                  </div>
                  <p className="text-purple-300 font-medium mt-1">{item.role}</p>
                </div>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-4 text-background/70">
                  {item.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs bg-background/10 text-background/80 hover:bg-background/20">
                      # {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}