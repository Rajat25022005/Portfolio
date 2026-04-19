import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light') {
      setTheme('light');
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
      localStorage.setItem('portfolio-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.body.classList.toggle('light', newTheme === 'light');
    localStorage.setItem('portfolio-theme', newTheme);
  };

  return { theme, toggleTheme };
}
