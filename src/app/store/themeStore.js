import { create } from 'zustand';

const useThemeStore = create((set) => ({
  isDarkMode: (() => {
    
    const savedTheme = localStorage.getItem('isDarkMode');
    return savedTheme !== null ? JSON.parse(savedTheme) : false;
  })(),
  toggleTheme: () =>
    set((state) => {
      const newMode = !state.isDarkMode; 
      localStorage.setItem('isDarkMode', newMode); 
      return { isDarkMode: newMode };
    }),
}));

export default useThemeStore;
