import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ThemeState {
  theme: 'light' | 'dark';
  toggle: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'light',
      toggle: () =>
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),
    }),
    {
      name: 'themeStore',
    },
  ),
);
