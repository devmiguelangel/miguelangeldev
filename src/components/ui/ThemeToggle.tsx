import React, { useEffect, useState } from 'react';
import { Monitor, Moon, Sun } from 'lucide-react';
import Button from './Button';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'system';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme: string) => {
    const root = document.documentElement;

    if (newTheme === 'system') {
      // Remove any manual override, let CSS handle it automatically
      root.style.colorScheme = 'light dark';
      // root.classList.remove('dark');
    } else if (newTheme === 'light') {
      // Force light mode
      root.style.colorScheme = 'light';
      // root.classList.add('light');
      root.classList.remove('dark');
    } else {
      // Force dark mode
      root.style.colorScheme = 'dark';
      root.classList.add('dark');
      // root.classList.remove('light');
    }
  };

  const toggleTheme = () => {
    const themes = ['system', 'light', 'dark'];
    const currentIndex = themes.indexOf(theme);
    const newTheme = themes[(currentIndex + 1) % themes.length];

    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun size={20} />;
      case 'dark':
        return <Moon size={20} />;
      default:
        return <Monitor size={20} />;
    }
  };

  const getLabel = () => {
    const nextTheme = {
      system: 'light',
      light: 'dark',
      dark: 'system'
    }[theme];
    return `Switch to ${nextTheme} mode`;
  };



  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      aria-label={getLabel()}
      className="rounded-full p-2 cursor-pointer"
    >
      {getIcon()}
    </Button>
  );
};

export default ThemeToggle;
