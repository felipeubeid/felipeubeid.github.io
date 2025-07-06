import { Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  // Use the custom hook to access the theme and toggle function
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-accent hover:bg-accent/80 transition-all duration-300 transform hover:scale-110"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-accent-foreground" />
      ) : (
        <Sun className="w-5 h-5 text-accent-foreground" />
      )}
    </button>
  );
};

export default ThemeToggle;
