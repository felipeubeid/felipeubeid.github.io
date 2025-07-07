import { useEffect, useRef } from "react";
import { Mail } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import resume from "../assets/resume/Resume_Ubeid_Felipe.pdf";

interface SocialLink {
  Icon: React.ComponentType<{ className?: string }>;
  link: string;
  label: string;
}

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((reveal) => observer.observe(reveal));

    return () => observer.disconnect();
  }, []);

  const socialLinks: SocialLink[] = [
    { Icon: LuGithub, link: "https://github.com/felipeubeid", label: "GitHub" },
    {
      Icon: FaLinkedinIn,
      link: "https://www.linkedin.com/in/felipeubeid/",
      label: "LinkedIn",
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="reveal">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Always looking for new opportunities
          </p>
        </div>

        <div className="reveal">
          <div className="space-y-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <div>
                <h3 className="font-playfair text-2xl font-semibold mb-6 text-foreground">
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:felipe.ubeid@hotmail.com"
                    className="flex items-center gap-4 text-muted-foreground 
                    hover:text-foreground transition-colors duration-300 group"
                  >
                    <div className="p-3 bg-accent rounded-full group-hover:bg-accent/80 transition-colors duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span>felipe.ubeid@hotmail.com</span>
                  </a>
                  <a
                    href="mailto:ft23@fsu.edu"
                    className="flex items-center gap-4 text-muted-foreground 
                    hover:text-foreground transition-colors duration-300 group"
                  >
                    <div className="p-3 bg-accent rounded-full group-hover:bg-accent/80 transition-colors duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span>ft23@fsu.edu</span>
                  </a>
                  <div className="flex gap-4 pt-4">
                    {socialLinks.map(({ Icon, link, label }) => (
                      <a
                        key={label}
                        href={link}
                        target="_blank"
                        className="p-3 bg-accent rounded-full hover:bg-accent/80 transition-all duration-300 transform hover:scale-110"
                        aria-label={label}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                  <div className="pt-6">
                    <a
                      href={resume}
                      target="_blank"
                      className="px-8 py-4 bg-foreground text-background font-medium rounded-full 
                      hover:bg-foreground/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                      Get My Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
