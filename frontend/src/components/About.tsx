import { useEffect, useRef } from 'react';
import picture from '../assets/images/100_0532.jpg'

const About = () => {
  // Ref to the section element
  const sectionRef = useRef<HTMLElement>(null);

  // Effect to observe elements with the 'reveal' class and add 'active' when they scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
  
    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    reveals?.forEach((reveal) => observer.observe(reveal));

    return () => observer.disconnect();
  }, []);

  const skills = ['React', 'Flask', 'C++', 'Python', 'HTML5', 'CSS', ,'JavaScript', 'C#', 
  '.NET', 'Git', 'Tailwind', 'Postman', 'RESTful APIs', 'TypeScript']

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-8 text-gradient">
              About Me
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Born and raised in São Paulo, Brazil, I'm currently a student at
                Florida State University, pursuing a degree in Computer Science. 
              </p>
              <p className="text-lg">
                My time at FSU has helped me build a solid foundation in programming,
                algorithms, and software development principles. I'm eager to put these 
                skills to work in a professional environment, creating innovative solutions 
                and designing user-centric experiences.
                
              </p>
              <p className="text-lg">
                In my free time, you'll find me listening to music, or watching sports - 
                especially soccer, which I'm a die-hard fan of. Some of my skills include:
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground hover:bg-accent/80 transition-colors duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="reveal">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-muted to-background rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-foreground/10 to-transparent flex items-center justify-center">
                  <img 
                  src={picture}
                  alt="Profile" 
                  className="object-cover w-full h-full"
                  />
                </div>
              </div>
                          
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
