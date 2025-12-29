"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Linkedin, Github, Send } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    // LIGHT THEME BACKGROUND
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-bold md:text-5xl mb-4 tracking-tight text-foreground">
            Get in Touch
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-6" />
          <p className="max-w-xl text-muted-foreground text-lg">
            Currently looking for internships in Full Stack Development & AI.
            Have a question or want to work together? Drop me a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
           
           {/* Left Column: Contact Info */}
           <div className="space-y-8">
              <div>
                  <h3 className="text-2xl font-semibold mb-2 text-foreground">Let's Connect</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  </p>
              </div>

              <div className="space-y-6">
                 {/* Email Item */}
                 <div className="flex items-start gap-4">
                    <div className="p-3 bg-background rounded-lg border shadow-sm text-primary">
                        <Mail className="h-6 w-6" />
                    </div>
                    <div>
                        <h4 className="font-medium text-lg text-foreground">Email Me</h4>
                        <Link 
                            href="mailto:sejalgodbole02@gmail.com" 
                            className="text-muted-foreground hover:text-primary transition-colors text-base"
                        >
                            sejalgodbole02@gmail.com
                        </Link>
                    </div>
                 </div>

                 {/* Location Item */}
                 <div className="flex items-start gap-4">
                    <div className="p-3 bg-background rounded-lg border shadow-sm text-primary">
                        <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                        <h4 className="font-medium text-lg text-foreground">Location</h4>
                        <p className="text-muted-foreground text-base">Pune, Maharashtra, India</p>
                    </div>
                 </div>
              </div>

              {/* Social Buttons */}
              <div className="flex gap-4 pt-4">
                 <Button asChild size="icon" variant="outline" className="h-12 w-12 rounded-full border-muted-foreground/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    <Link href="https://linkedin.com/in/sejal-godbole" target="_blank">
                        <Linkedin className="h-5 w-5" />
                    </Link>
                 </Button>
                 <Button asChild size="icon" variant="outline" className="h-12 w-12 rounded-full border-muted-foreground/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    <Link href="https://github.com/sejal-godbole" target="_blank">
                        <Github className="h-5 w-5" />
                    </Link>
                 </Button>
              </div>
           </div>

           {/* Right Column: Contact Form */}
           <Card className="bg-background border-muted shadow-xl">
              <CardContent className="p-6 sm:p-8">
                 <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
                            <Input 
                                id="name" 
                                placeholder="Your name" 
                                className="bg-muted/20 border-muted focus-visible:ring-primary h-11" 
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                            <Input 
                                id="email" 
                                type="email" 
                                placeholder="Your email" 
                                className="bg-muted/20 border-muted focus-visible:ring-primary h-11" 
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">Subject</label>
                        <Input 
                            id="subject" 
                            placeholder="Project or Internship Opportunity" 
                            className="bg-muted/20 border-muted focus-visible:ring-primary h-11" 
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                        <Textarea 
                            id="message" 
                            placeholder="Type your message here..." 
                            className="min-h-[150px] bg-muted/20 border-muted focus-visible:ring-primary resize-none" 
                        />
                    </div>
                    <Button className="w-full h-12 text-base font-bold shadow-md transition-transform hover:scale-[1.02]">
                        Send Message <Send className="ml-2 h-4 w-4" />
                    </Button>
                 </form>
              </CardContent>
           </Card>
        </div>
      </div>
    </section>
  );
}