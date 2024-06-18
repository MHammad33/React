import { createContext, useContext } from "react";

// Create a context with a default value
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => { },
  lightTheme: () => { }
});

export const ThemeProvider = ThemeContext.Provider;

// Custom hook to use the context
export default function useTheme() {
  return useContext(ThemeContext);
}

