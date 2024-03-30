import { useEffect } from 'react';

import iconMoon from '../assets/icon-moon.svg';
import iconSun from '../assets/icon-sun.svg';
import { useThemeStore } from '../hooks/use-theme-store';

export default function Header() {
  const { theme, toggle } = useThemeStore();

  useEffect(() => {
    theme === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [theme]);

  return (
    <header>
      <div className="container flex items-center justify-between pb-10 pt-12 md:pt-16">
        <h1 className="text-xl font-bold tracking-[12px] text-white md:text-4xl">
          TODO
        </h1>
        <button type="button" onClick={toggle}>
          {theme === 'light' ? (
            <img src={iconMoon} alt="theme" className="size-5 md:size-7" />
          ) : (
            <img src={iconSun} alt="theme" className="size-5 md:size-7" />
          )}
        </button>
      </div>
    </header>
  );
}
