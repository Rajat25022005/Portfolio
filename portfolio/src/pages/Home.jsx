import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { skills } from '../data/skills';


const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  useEffect(() => {
    if (!loading && window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [loading]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative"
    >
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }}
            className="fixed inset-0 z-[100] bg-bg flex flex-col items-center justify-center pointer-events-none"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ 
                opacity: 0, 
                scale: 15, 
                filter: "blur(20px)",
                transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
              }}
              className="flex flex-col items-center gap-6"
            >
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-fg">
                <path d="M0.643 1.475c0 0.814 0.668 1.475 1.49 1.475H14.49c1.408 0 2.568 0.43 3.48 1.29 0.91 0.861 1.366 1.967 1.366 3.32 0 1.25 -0.456 2.274 -1.367 3.072 -0.911 0.78 -2.07 1.168 -3.479 1.168H9.12c-0.824 0 -1.491 0.66 -1.491 1.475 0 0.815 0.667 1.475 1.491 1.475h5.93l5.342 8.482c0.332 0.512 0.797 0.768 1.398 0.768 0.663 0 1.129 -0.256 1.398 -0.768 0.269 -0.533 0.217 -1.096 -0.155 -1.69l-4.753 -7.56c1.284 -0.574 2.299 -1.414 3.044 -2.52 0.746 -1.127 1.119 -2.427 1.119 -3.902 0 -1.496 -0.342 -2.807 -1.026 -3.934 -0.662 -1.127 -1.594 -2.008 -2.795 -2.643C17.42 0.327 16.044 0 14.49 0H2.134C1.311 0 0.643 0.66 0.643 1.475Z" fill="currentColor"></path>
              </svg>
              <span className="text-2xl font-display font-black tracking-widest text-fg">
                RM
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BACKGROUND SPINNING RM */}
      <div className="fixed inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
          style={{ willChange: "transform" }}
          className="text-[50vw] md:text-[40vw] font-display font-black leading-none opacity-10 text-fg select-none transform-gpu"
        >
          RM
        </motion.div>
      </div>

      {/* TICKER */}
      <div className="border-b border-border overflow-hidden py-[0.7rem]">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 22 }}
          style={{ willChange: "transform" }}
          className="flex gap-[3rem] whitespace-nowrap text-[0.75rem] tracking-[0.1em] uppercase opacity-70 w-max transform-gpu"
        >
          {/* Double up the content for seamless infinite loop */}
          <div className="flex gap-[3rem]">
            <span>Agents</span><span>·</span>
            <span>LLMs</span><span>·</span>
            <span>RAG Systems</span><span>·</span>
            <span>Full-Stack AI</span><span>·</span>
            <span>Model Fine-Tuning</span><span>·</span>
            <span>Computer Vision</span><span>·</span>
            <span>MLOps</span><span>·</span>
          </div>
          <div className="flex gap-[3rem]">
            <span>Agents</span><span>·</span>
            <span>LLMs</span><span>·</span>
            <span>RAG Systems</span><span>·</span>
            <span>Full-Stack AI</span><span>·</span>
            <span>Model Fine-Tuning</span><span>·</span>
            <span>Computer Vision</span><span>·</span>
            <span>MLOps</span><span>·</span>
          </div>
        </motion.div>
      </div>

      {/* HERO */}
      <section className="pt-[5rem] px-[2.5rem] pb-[4rem] border-b border-border max-md:pt-[3rem] max-md:px-[1.2rem] max-md:pb-[2.5rem]">
        <div className="text-[0.75rem] tracking-[0.15em] uppercase opacity-70 mb-[2.5rem] flex items-center gap-[0.6rem] before:content-[''] before:inline-block before:w-[18px] before:h-[1px] before:bg-current">
          AI Engineer · Researcher
        </div>
        <h1 className="font-display text-[clamp(3rem,8vw,7rem)] font-extrabold leading-[0.93] tracking-[-0.04em] mb-[2.5rem] max-w-[900px] max-md:text-[clamp(2.5rem,10vw,4rem)]">
          I architect bold<br/>systems & <em className="italic font-[Georgia,serif] font-normal">clean</em><br/>code.
        </h1>
        <div className="flex justify-between items-end flex-wrap gap-[1rem]">
          <p className="text-[0.95rem] leading-[1.7] opacity-65 max-w-[340px]">
            It's never "just an API." Every layer matters. I craft autonomous experiences. Your infrastructure — my obsession.
          </p>
          <div className="text-[0.72rem] tracking-[0.12em] uppercase opacity-60 flex items-center gap-[0.5rem] after:content-['↓']">
            Scroll to explore
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <div id="about" className="grid grid-cols-2 border-b border-border max-md:grid-cols-1">
        <div className="p-[3rem_2.5rem] border-r border-border max-md:border-r-0 max-md:border-b">
          <h2 className="text-[1.8rem] font-bold tracking-[-0.03em] mb-[1rem]">
            Latent reasoning.<br/>Autonomous agents.
          </h2>
          <p className="text-[0.9rem] leading-[1.75] opacity-80 max-w-[400px]">
            Focused on building systems that don't just generate text, but reason through complex environments. From spatio-temporal video graph reasoning to pure latent space models.
          </p>
          <div className="flex gap-[3rem] mt-[2rem]">
            <div>
              <div className="text-[2.5rem] font-extrabold tracking-[-0.04em]">15+</div>
              <div className="text-[0.75rem] tracking-[0.08em] uppercase opacity-70 mt-[0.2rem]">Open Source Projects</div>
            </div>
            <div>
              <div className="text-[2.5rem] font-extrabold tracking-[-0.04em]">∞</div>
              <div className="text-[0.75rem] tracking-[0.08em] uppercase opacity-70 mt-[0.2rem]">Curiosity</div>
            </div>
          </div>
        </div>
        <div className="p-[3rem_2.5rem]">
          <h2 className="text-[1.8rem] font-bold tracking-[-0.03em] mb-[1rem]">
            Average<br/>isn't my thing.
          </h2>
          <p className="text-[0.9rem] leading-[1.75] opacity-60 max-w-[400px]">
            I take on a limited number of research projects each quarter to give every architecture the attention it deserves. If you're ready to invest in intelligence that works, let's talk.
          </p>
          <div className="mt-[2rem]">
            <Link to="/projects" className="inline-flex items-center gap-[0.6rem] bg-fg text-bg font-display text-[0.8rem] font-bold tracking-[0.04em] py-[0.7rem] px-[1.6rem] rounded-full border-none cursor-pointer transition-all duration-200 hover:opacity-85 hover:scale-105 after:content-['→']">
              See my work
            </Link>
          </div>
        </div>
      </div>

      {/* EXPERTISE / SERVICES */}
      <div id="expertise" className="flex items-center justify-between p-[2rem_2.5rem] border-b border-border">
        <span className="text-[0.75rem] tracking-[0.15em] uppercase opacity-75">Expertise</span>
        <span className="text-[0.75rem] tracking-[0.15em] uppercase opacity-75">04 domains →</span>
      </div>
      <div className="grid grid-cols-4 border-b border-border max-md:grid-cols-2 max-sm:grid-cols-1">
        {skills.slice(0, 4).map((skill, index) => {
          const filterMap = {
            'languages': 'all',
            'ai-ml': 'research',
            'backend': 'agents',
            'frontend': 'fullstack'
          };
          const filter = filterMap[skill.id] || 'all';
          
          return (
            <Link 
              to="/expertise"
              key={skill.id} 
              className={`p-[2rem_2rem_2.5rem] border-r border-border cursor-pointer transition-colors duration-200 hover:bg-cardBg group ${index === 3 ? 'border-r-0' : ''} max-md:border-r-0 max-md:border-b max-md:last:border-b-0`}
            >
              <div className="text-[0.7rem] opacity-60 tracking-[0.1em] mb-[1.5rem]">0{index + 1}</div>
              <div className="text-[1.15rem] font-bold tracking-[-0.02em] mb-[0.5rem]">{skill.title}</div>
              <div className="text-[0.8rem] opacity-70 uppercase tracking-[0.08em] truncate">{skill.tags[0]}</div>
              <div className="mt-[3rem] text-[1.2rem] opacity-50 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1">↗</div>
            </Link>
          );
        })}
      </div>

      {/* WORK GRID */}
      <div className="flex items-center justify-between p-[2rem_2.5rem] border-b border-border">
        <span className="text-[0.75rem] tracking-[0.15em] uppercase opacity-50">Selected works</span>
        <Link to="/projects" className="text-[0.75rem] tracking-[0.15em] uppercase opacity-50 hover:opacity-100 transition-opacity">View all →</Link>
      </div>
      <div className="grid grid-cols-2 border-b border-border max-md:grid-cols-1">
        {projects.slice(0, 4).map((project, idx) => {
          // Recreate the gradient colors from HTML
          const colors = [
            'rgba(83,74,183,.18)',
            'rgba(29,158,117,.18)',
            'rgba(216,90,48,.18)',
            'rgba(136,135,128,.18)'
          ];
          const gradient = `linear-gradient(135deg, ${colors[idx % 4]}, rgba(0,0,0,0))`;
          
          return (
            <Link 
              to="/projects" 
              key={project.id} 
              className={`aspect-[4/3] bg-cardBg border-b border-border relative cursor-pointer overflow-hidden group ${idx % 2 === 0 ? 'border-r max-md:border-r-0' : ''} ${idx >= 2 ? 'border-b-0 max-md:border-b' : ''} max-md:last:border-b-0`}
            >
              <div 
                className="w-full h-full flex items-center justify-center flex-col gap-[0.8rem] transition-transform duration-400 group-hover:scale-105"
                style={{ background: gradient }}
              >
                <div className="text-[1.4rem] font-extrabold tracking-[-0.03em] opacity-50 text-center">
                  {project.title}
                </div>
                <div className="text-[0.7rem] tracking-[0.1em] uppercase opacity-40">
                  {project.category}
                </div>
              </div>
              <div className="absolute bottom-[1.5rem] left-[1.5rem] right-[1.5rem] flex justify-between items-end">
                <div className="text-[0.9rem] font-semibold">{project.title}</div>
                <div className="text-[0.75rem] opacity-40">2024</div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* PROCESS */}
      <div className="flex items-center justify-between p-[2rem_2.5rem] border-b border-border">
        <span className="text-[0.75rem] tracking-[0.15em] uppercase opacity-50">My approach</span>
      </div>
      <div className="grid grid-cols-3 border-b border-border max-md:grid-cols-1">
        <div className="p-[2.5rem_2rem] border-r border-border max-md:border-r-0 max-md:border-b">
          <div className="text-[3.5rem] font-extrabold opacity-[0.08] tracking-[-0.05em] leading-[1] mb-[1rem]">01</div>
          <div className="text-[1rem] font-bold tracking-[-0.01em] mb-[0.6rem]">Discover & Define</div>
          <div className="text-[0.85rem] leading-[1.7] opacity-50">I dig into the data, edge cases, and architectures to build a sharp technical brief that aligns everyone from day one.</div>
        </div>
        <div className="p-[2.5rem_2rem] border-r border-border max-md:border-r-0 max-md:border-b">
          <div className="text-[3.5rem] font-extrabold opacity-[0.08] tracking-[-0.05em] leading-[1] mb-[1rem]">02</div>
          <div className="text-[1rem] font-bold tracking-[-0.01em] mb-[0.6rem]">Train & Evaluate</div>
          <div className="text-[0.85rem] leading-[1.7] opacity-50">Bold models, refined in detail. I iterate fast and push validation metrics until every parameter earns its place.</div>
        </div>
        <div className="p-[2.5rem_2rem]">
          <div className="text-[3.5rem] font-extrabold opacity-[0.08] tracking-[-0.05em] leading-[1] mb-[1rem]">03</div>
          <div className="text-[1rem] font-bold tracking-[-0.01em] mb-[0.6rem]">Deploy & Scale</div>
          <div className="text-[0.85rem] leading-[1.7] opacity-50">I bring it to life in production with smooth latencies, clean APIs, and a system that performs beautifully.</div>
        </div>
      </div>

      {/* CTA */}
      <section className="p-[6rem_2.5rem] text-center border-b border-border">
        <div className="text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold tracking-[-0.04em] leading-[0.95] mb-[2.5rem]">
          Let's work<br/><em className="italic font-[Georgia,serif] font-normal">together</em>
        </div>
        <p className="text-[0.95rem] opacity-80 mb-[2.5rem] max-w-[360px] mx-auto leading-[1.7]">
          Work with me if average isn't your thing. Complex architecture, autonomous agent, or just feel like chatting?
        </p>
        <Link to="/contact" className="inline-flex items-center gap-[0.6rem] bg-fg text-bg font-display text-[0.85rem] font-bold tracking-[0.04em] p-[0.9rem_2.2rem] rounded-full border-none cursor-pointer transition-all duration-200 hover:opacity-85 hover:scale-105 after:content-['→']">
          Say hello
        </Link>
      </section>

    </motion.div>
  );
};

export default Home;
