import { create } from 'zustand';

interface ThemeState {
  darkMode: boolean;
  changeTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  darkMode: false,
  changeTheme: () => set((state) => ({ darkMode: !state.darkMode })),
}));
