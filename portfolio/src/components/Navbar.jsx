import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
  const { toggleTheme } = useTheme();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '/';
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleLogoClick = (e) => {
    if (window.location.hash === '#/' || window.location.hash === '') {
      e.preventDefault();
      window.location.reload();
    }
  };

  return (
    <nav className="flex items-center justify-between py-[1.4rem] px-[2.5rem] border-b border-border sticky top-0 bg-bg z-[100] transition-colors duration-400 max-md:py-[1rem] max-md:px-[1.2rem]">
      <div className="text-[1.05rem] font-bold tracking-[-0.02em]">
        <Link to="/" onClick={handleLogoClick}>
          Rajat <em className="italic font-[Georgia,serif] font-normal">Malik</em>
        </Link>
      </div>
      <div className="flex gap-[2rem] text-[0.8rem] tracking-[0.08em] uppercase opacity-85 max-md:hidden">
        <Link to="/" className="hover:opacity-100 transition-opacity">Home</Link>
        <Link to="/projects" className="hover:opacity-100 transition-opacity">Work</Link>
        <Link to="/expertise" className="hover:opacity-100 transition-opacity">Expertise</Link>
        <button onClick={() => scrollToSection('about')} className="hover:opacity-100 transition-opacity uppercase tracking-[0.08em]">About</button>
        <Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
      </div>
      <div className="flex items-center gap-[1.5rem]">
        <button 
          onClick={toggleTheme}
          className="bg-transparent border border-border text-fg font-display text-[0.75rem] tracking-[0.08em] uppercase py-[0.45rem] px-[1rem] cursor-pointer rounded-full transition-all duration-200 hover:bg-fg hover:text-bg"
        >
          Dark / Light
        </button>
        <Link to="/contact" className="bg-fg text-bg font-display text-[0.75rem] tracking-[0.08em] uppercase py-[0.45rem] px-[1.2rem] cursor-pointer border-none rounded-full font-semibold transition-all duration-200 hover:opacity-85 inline-block">
          Let's talk
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
