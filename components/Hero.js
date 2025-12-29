import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
      <div className="grid grid-cols-1 gap-12 items-center md:grid-cols-2">
        
        {/* Left Side - Information */}
        <div className="flex flex-col space-y-6 md:space-y-8 text-center md:text-left order-2 md:order-1 ml-10">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I&apos;m <br className="hidden lg:block" />
              <span className="text-primary">Sejal Sampat Godbole</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
              Full Stack Engineer & AI Enthusiast
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] mx-auto md:mx-0">
              I focus on learning, building, and growing through hands-on projects.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="gap-2">
              <Link href="#projects">
                View My Work <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="gap-2">
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Download CV <Download className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center order-1 md:order-2 relative">
           {/* Decorative background blob underneath image */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] bg-primary/10 rounded-full blur-3xl -z-10"></div>
           
          <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px]">
            {/* Replace '/profile-pic.jpg' with your actual image path inside the /public folder */}
            <Image
              src="/profile-pic.jpg" 
              alt="Alex Developer Profile Photo"
              fill
              className="object-cover rounded-3xl shadow-2xl border-4 border-background/50"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}