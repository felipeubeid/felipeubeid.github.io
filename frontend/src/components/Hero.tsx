import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to the "About" section
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background parallax"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Hero content */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-foreground/5 rounded-full blur-xl animate-float" />
      <div
        className="absolute bottom-40 right-20 w-48 h-48 bg-foreground/3 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up">
          <span className="text-gradient">Felipe Ubeid</span>
        </h1>
        <p
          className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in-up font-light tracking-wide"
          style={{ animationDelay: "0.2s" }}
        >
          Aspiring Software Engineer
        </p>

        <div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <button
            onClick={scrollToAbout}
            className="px-8 py-4 bg-foreground text-background font-medium rounded-full hover:bg-foreground/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Explore
          </button>

          <button
            onClick={scrollToContact}
            className="px-8 py-4 border border-foreground text-foreground font-medium rounded-full hover:bg-accent transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={scrollToAbout}
      >
        <ChevronDown className="w-6 h-6 text-foreground" />
      </div>
    </section>
  );
};

export default Hero;
