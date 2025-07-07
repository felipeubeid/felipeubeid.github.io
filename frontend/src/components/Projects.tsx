import { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { LuGithub } from "react-icons/lu";
import cop4870 from '../assets/images/cop4870.png'
import restaurantmanager from '../assets/images/restaurantmanager.png';
import personalwebsite from '../assets/images/personalwebsite.png';

// interface defines the structure of a project object
interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  live?: boolean; // Optional property for live demo
  gitHubUrl?: string;
  liveUrl?: string; // Optional property for live demo URL
}

const Projects = () => {
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

  const projects: Project[] = [
    {
      title: "Marketplace Inventory Management Application",
      description: "Created in my COP4870 course. Implements a full-stack inventory management system for a marketplace, featuring full CRUD operations and search on inventory and shopping cart, plus a checkout system.",
      tech: ["C#", ".NET", ".NET MAUI", "RESTful APIs"],
      image: cop4870,
      gitHubUrl: "https://github.com/felipeubeid/cop4870.git"
    },
    {
      title: "Restaurant Manager",
      description: "Developed a full-stack restaurant management application featuring CRUD functionality across finances, orders, menu, staff, and inventory modules.",
      tech: ["React", "Vite", "Tailwind CSS", "Flask", "Flask-SQLAlchemy"],
      image: restaurantmanager,
      gitHubUrl: "https://github.com/felipeubeid/restaurant-manager.git"
    },
    {
      title: "Personal Website",
      description: "The website you are seeing right now. Hope you are enjoying!",
      tech: ["React", "Tailwind CSS"],
      image: personalwebsite,
      live: true,
      gitHubUrl:"https://github.com/felipeubeid/personal-website.git"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            New projects coming soon!
          </p>
        </div>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
              <div 
              key={project.title}
              className="reveal group"
              style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="bg-card rounded-2xl p-6 h-full border border-border 
                hover:border-border/50 transition-all duration-500 transform hover:scale-[1.01] hover:shadow-2xl">
                  <div className="aspect-video rounded-xl mb-6 flex items-center justify-center 
                  text-4xl group-hover:scale-[1.01] transition-transform duration-300">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-3 
                  text-foreground group-hover:text-muted-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-accent rounded-full text-xs 
                        font-medium text-accent-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.gitHubUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground 
                      hover:text-foreground transition-colors duration-300">
                      <LuGithub className="w-4 h-4" />
                      Code
                    </a>
                    {project.live && (
                      <a
                      href={project.liveUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground 
                      hover:text-foreground transition-colors duration-300">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    )}
                  </div>

                </div>
              </div> 
            ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
