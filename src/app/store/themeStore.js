import { create } from "zustand";

const useThemeStore = create((set) => ({
  isDarkMode: (() => {
    // Check if `window` is defined to avoid issues in server-side rendering
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("isDarkMode");
      return savedTheme !== null ? JSON.parse(savedTheme) : false;
    }
    return false; // Default to false if no `window`
  })(),
  toggleTheme: () =>
    set((state) => {
      const newMode = !state.isDarkMode;
      // Check if `window` is defined before accessing `localStorage`
      if (typeof window !== "undefined") {
        localStorage.setItem("isDarkMode", newMode);
      }
      return { isDarkMode: newMode };
    }),
}));

export default useThemeStore;
