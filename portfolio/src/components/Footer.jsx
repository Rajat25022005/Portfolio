import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
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

  return (
    <footer className="py-[3rem] px-[2.5rem] grid grid-cols-[1fr_auto_1fr] items-center gap-[2rem] max-md:grid-cols-1 max-md:text-center">
      <div className="text-[0.9rem] font-bold">
        Rajat <em className="italic font-[Georgia,serif] font-normal">Malik</em>
      </div>
      <div className="flex gap-[2rem] text-[0.75rem] tracking-[0.08em] uppercase opacity-70 justify-center max-md:justify-center">
        <Link to="/" className="hover:opacity-100 transition-opacity">Home</Link>
        <Link to="/projects" className="hover:opacity-100 transition-opacity">Work</Link>
        <Link to="/expertise" className="hover:opacity-100 transition-opacity">Expertise</Link>
        <button onClick={() => scrollToSection('about')} className="hover:opacity-100 transition-opacity uppercase tracking-[0.08em]">About</button>
        <Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
      </div>
      <div className="flex gap-[1.5rem] justify-end text-[0.75rem] tracking-[0.08em] uppercase opacity-70 max-md:justify-center">
        <a href="https://github.com/rajatmalik" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity">GitHub</a>
        <a href="https://linkedin.com/in/rajatmalik" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity">LinkedIn</a>
        <a href="https://huggingface.co/rajatmalik" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity">HuggingFace</a>
      </div>
      <div className="col-span-full border-t border-border pt-[1.5rem] text-[0.73rem] opacity-30 flex justify-between max-md:flex-col max-md:gap-[0.5rem] max-md:text-center">
        <span>© {new Date().getFullYear()} Rajat Malik</span>
        <span>Chandigarh, India</span>
      </div>
    </footer>
  );
};

export default Footer;
