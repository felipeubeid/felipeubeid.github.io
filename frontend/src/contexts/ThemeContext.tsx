import React, { createContext, useContext, useEffect, useState } from "react";

// Set up a context for theme management
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// Create the context with a default value of undefined
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext); // acess the context value
  if (context === undefined) {
    // check if it is undefined
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// ThemeProvider component to provide the theme context to its children
interface ThemeProviderProps {
  children: React.ReactNode;
}

// ThemeProvider component
// Try to load the theme from localStorage (keeps user's preference), 'dark' if not found
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "dark";
  });

  // Effect to update the document's class based on the theme
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  // Function to toggle the theme between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Provide the theme and toggleTheme function to the context
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
