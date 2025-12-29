export default function About() {
  return (
    <section id="about" className="py-20 bg-foreground/90 text-background">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center md:text-left">
        
        {/* Simple Heading */}
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
          About Me
        </h2>
        
        {/* The Paragraph */}
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          I am a Third Year Computer Science & Engineering student with a passion for 
          building intelligent web applications. Specializing in <strong>Full Stack Development </strong> 
          using the <strong>Next.js ecosystem</strong>, I strive to bridge the gap between complex backend logic 
          and intuitive user experiences. Beyond coding, I am an active researcher and 
          recently presented a paper at the <strong>2025 C2I6 International Conference</strong>. 
          I am currently looking for internship opportunities where I can apply my skills in 
          modern web technologies to solve real-world problems.
        </p>

      </div>
    </section>
  );
}