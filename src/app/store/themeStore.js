import { create } from "zustand";

const useThemeStore = create((set) => ({
  isDarkMode: (() => {
    
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("isDarkMode");
      return savedTheme !== null ? JSON.parse(savedTheme) : false;
    }
    return false; 
  })(),
  toggleTheme: () =>
    set((state) => {
      const newMode = !state.isDarkMode;
      

      if (typeof window !== "undefined") {
        localStorage.setItem("isDarkMode", newMode);
      }
      return { isDarkMode: newMode };
    }),
}));

export default useThemeStore;
