import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // DARK THEME BACKGROUND
    <footer className="border-t border-background/20 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight text-background">Sejal Godbole</h3>
            <p className="text-background/60 max-w-xs leading-relaxed">
              Full Stack Developer & AI Enthusiast based in Pune, India. 
              Building digital experiences that matter.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/90">Explore</h4>
            <nav className="flex flex-col gap-3 text-background/60">
              <Link href="#about" className="hover:text-white transition-colors w-fit">About Me</Link>
              <Link href="#projects" className="hover:text-white transition-colors w-fit">Projects</Link>
              <Link href="#skills" className="hover:text-white transition-colors w-fit">Skills</Link>
              <Link href="#certifications" className="hover:text-white transition-colors w-fit">Certifications</Link>
            </nav>
          </div>

          {/* Column 3: Connect */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/90">Connect</h4>
            <div className="flex flex-col gap-3">
              <Link 
                href="https://linkedin.com/in/sejal-godbole" 
                target="_blank" 
                className="flex items-center gap-2 text-background/60 hover:text-white transition-colors w-fit group"
              >
                <Linkedin className="h-4 w-4" /> 
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              
              <Link 
                href="https://github.com/sejal-godbole" 
                target="_blank" 
                className="flex items-center gap-2 text-background/60 hover:text-white transition-colors w-fit group"
              >
                <Github className="h-4 w-4" /> 
                <span>GitHub</span>
                <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              
              <Link 
                href="mailto:sejalgodbole02@gmail.com" 
                className="flex items-center gap-2 text-background/60 hover:text-white transition-colors w-fit group"
              >
                <Mail className="h-4 w-4" /> 
                <span>Email</span>
                <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-12 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/40">
          <p>© {currentYear} Sejal Godbole. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Built with</span>
            <span className="font-medium text-background/70">Next.js</span>
            <span>&</span>
            <span className="font-medium text-background/70">Shadcn UI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}