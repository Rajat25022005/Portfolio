import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { projects } from '../data/projects';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'research', label: 'Research' },
  { id: 'agents', label: 'Agents' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'misc', label: 'Misc' }
];

const Projects = () => {
  const [searchParams] = useSearchParams();
  const initialFilter = searchParams.get('filter') || 'all';
  const [activeFilter, setActiveFilter] = useState(initialFilter);

  useEffect(() => {
    const filter = searchParams.get('filter');
    if (filter) {
      setActiveFilter(filter);
    }
  }, [searchParams]);

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen">
      <div className="px-[2.5rem] pt-[5rem] pb-[4rem] border-b border-border max-md:px-[1.2rem] max-md:pt-[3rem]">
        <h1 className="font-display text-[clamp(3rem,8vw,7rem)] font-extrabold leading-[0.93] tracking-[-0.04em] mb-[1.5rem]">
          Selected<br/><em className="italic font-[Georgia,serif] font-normal">Works</em>
        </h1>
        <p className="text-[0.95rem] leading-[1.7] opacity-80 max-w-[400px]">
          Index of selected works, experiments, and research architectures.
        </p>
      </div>

      <div className="flex flex-wrap gap-[1rem] p-[2rem_2.5rem] border-b border-border max-md:px-[1.2rem]">
        {filters.map(filter => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-[1.5rem] py-[0.6rem] text-[0.75rem] font-bold uppercase tracking-[0.08em] rounded-full border border-border transition-all duration-200 ${
              activeFilter === filter.id
                ? 'bg-fg text-bg'
                : 'bg-transparent hover:bg-cardBg'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-2 max-md:grid-cols-1 border-b border-border">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => {
            const colors = [
              'rgba(83,74,183,.18)',
              'rgba(29,158,117,.18)',
              'rgba(216,90,48,.18)',
              'rgba(136,135,128,.18)'
            ];
            const gradient = `linear-gradient(135deg, ${colors[idx % 4]}, rgba(0,0,0,0))`;

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`aspect-[4/3] bg-cardBg border-b border-border relative overflow-hidden group ${idx % 2 === 0 ? 'border-r max-md:border-r-0' : ''}`}
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
                  <div className="flex gap-[1rem] mt-[1rem] opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noreferrer" className="text-[0.7rem] font-bold uppercase tracking-[0.08em] bg-fg text-bg px-[1rem] py-[0.4rem] rounded-full hover:opacity-80">
                        Code
                      </a>
                    )}
                    {project.links.live && (
                      <a href={project.links.live} target="_blank" rel="noreferrer" className="text-[0.7rem] font-bold uppercase tracking-[0.08em] bg-fg text-bg px-[1rem] py-[0.4rem] rounded-full hover:opacity-80">
                        Live
                      </a>
                    )}
                  </div>
                </div>
                <div className="absolute bottom-[1.5rem] left-[1.5rem] right-[1.5rem] flex justify-between items-end pointer-events-none">
                  <div className="text-[0.9rem] font-semibold">{project.title}</div>
                  <div className="text-[0.75rem] opacity-40">{project.tags[0]}</div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;
