"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Award, Eye } from "lucide-react";
import Image from "next/image";

// --- DATA SECTION ---
const certifications = [
  {
    title: "AWS Academy Graduate - GenAI Foundations",
    issuer: "AWS Academy",
    date: "Oct 2025",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1744&auto=format&fit=crop", 
    credentialImage: "/aws.png", 
  },
  {
    title: "Complete Web Development Course",
    issuer: "Udemy",
    date: "Sep 2025",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=1740&auto=format&fit=crop",
    credentialImage: "/web_dev.png",
  },
  {
    title: "Six Sigma: Green Belt",
    issuer: "LinkedIn Learning",
    date: "Sep 2025",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    credentialImage: "/sixsigma.png",
  },
  {
    title: "Bootcamp on Artificial Intelligence",
    issuer: "C-DAC & FutureSkills PRIME",
    date: "Oct 2024",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
    credentialImage: "/bootcampAI.png",
  },
  {
    title: "CCNAv7: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "Jul 2024",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
    credentialImage: "/ccna.png",
  },
  {
    title: "Basic Certificate in Artificial Intelligence",
    issuer: "C-DAC",
    date: "Jun 2024",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop",
    credentialImage: "/cdac.png",
  },
  {
    title: "Complete Microsoft Power BI Bootcamp",
    issuer: "Udemy",
    date: "Apr 2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740&auto=format&fit=crop",
    credentialImage: "/powerbi.png",
  },
  {
    title: "Tableau Visualization Tool Program",
    issuer: "VIIT, Pune",
    date: "Feb 2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740&auto=format&fit=crop",
    credentialImage: "/tableau.png",
  },
];

export default function Certifications() {
  return (
    // DARK SECTION BACKGROUND
    <section id="certifications" className="py-20 bg-foreground/90 text-background">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Certifications & Licenses
          </h2>
          {/* Light divider line */}
          <div className="w-20 h-1.5 bg-background/80 rounded-full mb-6" />
          
          {/* Light text for description */}
          <p className="max-w-[700px] text-background/70 md:text-xl">
            A verified track record of continuous learning in Cloud Computing, AI, Data Science, and Full Stack Development.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card 
                key={index} 
                // GLASS CARD STYLING
                className="group overflow-hidden bg-background/5 border-background/10 hover:bg-background/10 transition-all duration-300 hover:shadow-2xl hover:shadow-background/5 flex flex-col h-full backdrop-blur-sm"
            >
              
              {/* Image Banner */}
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute top-3 right-3">
                  <Badge className="bg-background/90 text-foreground hover:bg-white text-xs shadow-sm border-none">
                    {cert.date}
                  </Badge>
                </div>
              </div>

              <CardHeader className="relative pb-2 flex-grow">
                {/* Floating Icon - Glassy Look */}
                <div className="absolute -top-6 left-5 p-2 rounded-xl bg-background/20 backdrop-blur-md shadow-lg border border-background/20">
                  <Award className="h-5 w-5 text-yellow-300" /> {/* Yellow icon for contrast */}
                </div>
                
                <div className="pt-6">
                  {/* Issuer Text - Light Grey */}
                  <p className="text-xs font-semibold text-background/60 uppercase tracking-wider mb-1">
                    {cert.issuer}
                  </p>
                  {/* Title Text - White */}
                  <CardTitle className="text-lg leading-tight text-background group-hover:text-yellow-300 transition-colors">
                    {cert.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="pt-0 mt-auto pb-6">
                
                {/* --- MODAL DIALOG START --- */}
                <Dialog>
                  <DialogTrigger asChild>
                    {/* Button Styling for Dark Mode */}
                    <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full gap-2 text-xs border-background/20 bg-transparent text-background hover:bg-background hover:text-foreground transition-all"
                    >
                      <Eye className="h-3 w-3" /> View Credential
                    </Button>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-6xl w-full p-0 overflow-hidden bg-transparent border-none shadow-none">
                      
                      <DialogHeader className="sr-only">
                         <DialogTitle>Certificate: {cert.title}</DialogTitle>
                         <DialogDescription>Issued by {cert.issuer}</DialogDescription>
                      </DialogHeader>

                      {/* White container for the image so it looks like paper */}
                      <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-white shadow-2xl">
                         {/* UNCOMMENT THIS WHEN IMAGES ARE READY: */}
                         <Image 
                            src={cert.credentialImage} 
                            alt={`Certificate for ${cert.title}`}
                            fill
                            className="object-contain"
                         />

                         {/* <div className="flex flex-col items-center justify-center h-full w-full bg-neutral-100 text-neutral-500 p-8 text-center">
                             <Award className="h-16 w-16 mb-4 opacity-20" />
                             <p className="font-semibold text-black">Certificate Image Placeholder</p>
                             <p className="text-sm">Upload "{cert.credentialImage}" to public folder</p>
                         </div> */}
                      </div>
                  </DialogContent>
                </Dialog>
                {/* --- MODAL DIALOG END --- */}

              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}