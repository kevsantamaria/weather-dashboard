import { create } from 'zustand';

interface ThemeState {
  darkMode: boolean;
  changeTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  darkMode: false,
  changeTheme: () => {
    const current = get().darkMode;
    const changeTheme = !current;
    set({ darkMode: changeTheme });
  
    if (changeTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  },
}));
