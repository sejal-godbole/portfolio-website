"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Github, Linkedin } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Logo Area */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight">Sejal.</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Call to Action & Socials */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 border-r pr-4">
            <Link href="https://github.com" target="_blank">
                <Button variant="ghost" size="icon">
                    <Github className="h-5 w-5" />
                </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank">
                <Button variant="ghost" size="icon">
                    <Linkedin className="h-5 w-5" />
                </Button>
            </Link>
          </div>
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <Button>Download CV</Button>
          </Link>
               
              
        </div>

        {/* Mobile Menu (Sheet) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium hover:text-primary"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="h-px bg-border my-4" />
                <Button className="w-full">Download CV</Button>
                <div className="flex justify-center gap-4 mt-4">
                   <Link href="https://github.com" target="_blank">
                     <Github className="h-6 w-6" />
                   </Link>
                   <Link href="https://linkedin.com" target="_blank">
                     <Linkedin className="h-6 w-6" />
                   </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}