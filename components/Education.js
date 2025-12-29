import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

// Edit this data with your actual details
const educationData = [
  {
    institution: "Vishwakarma Institute of Information Technology",
    degree: "B.Tech CSE-AI",
    year: "2023 - 2027 (Expected)",
    location: "Pune, Maharashtra",
    description: "8.9 CGPA",
    current: true, // Highlights this item
  },
  {
    institution: "Shivaji Junior Science College,",
    degree: "Higher Secondary Certificate (HSC)",
    year: "2020 - 2022",
    location: "Gadchiroli, Maharashtra",
    description: "86.18%",
    current: false,
  },
  {
    institution: "Platinum Jubilee School",
    degree: "Secondary School Certificate (SSC)",
    year: "2020",
    location: "Gadchiroli, Maharashtra",
    description: "92.80%",
    current: false,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
            Education Journey
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-primary/20 ml-4 md:ml-6 space-y-12">
          
          {educationData.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              
              {/* Timeline Dot */}
              <div className={`absolute top-0 -left-[9px] md:-left-[11px] h-5 w-5 md:h-6 md:w-6 rounded-full border-4 border-background ${item.current ? "bg-primary" : "bg-muted-foreground/30"}`} />
              
              <div className="flex flex-col sm:flex-row gap-4 justify-between sm:items-start">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold leading-none">{item.institution}</h3>
                  <p className="text-lg font-medium text-primary">{item.degree}</p>
                  
                  {/* Meta Info (Mobile View) */}
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground sm:hidden">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {item.year}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {item.location}
                    </div>
                  </div>

                  <p className="text-muted-foreground max-w-md pt-2">
                    {item.description}
                  </p>
                </div>

                {/* Meta Info (Desktop View - Right Side) */}
                <div className="hidden sm:flex flex-col items-end gap-2 text-sm text-muted-foreground min-w-[140px]">
                  <Badge variant={item.current ? "default" : "secondary"} className="mb-1">
                    {item.year}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {item.location}
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}