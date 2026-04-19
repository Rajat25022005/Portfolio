import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

const ProjectCard = ({ project }) => {
  const { enterProject, leaveProject } = useCursor();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative block w-full mb-24 cursor-none"
      onMouseEnter={enterProject}
      onMouseLeave={leaveProject}
    >
      <div className="relative aspect-[4/5] bg-lightText dark:bg-darkText border border-lightText/10 dark:border-darkText/10 overflow-hidden group">
        
        {/* Abstract solid block or image replacement */}
        <div className="absolute inset-0 flex items-center justify-center bg-darkBg dark:bg-lightBg transition-transform duration-[1.5s] group-hover:scale-105 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <i className={`fa-solid ${project.icon} text-9xl opacity-20 text-lightText dark:text-darkText transition-opacity duration-500 group-hover:opacity-40 group-hover:text-accent`}></i>
        </div>

        {/* Hover overlay text block */}
        <div className="absolute inset-0 bg-accent/90 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <div className="flex gap-6 text-white font-mono text-xs uppercase font-bold tracking-widest">
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noreferrer" className="hover:opacity-50 transition-opacity">
                [ CODE ]
              </a>
            )}
            {project.links.live && (
              <a href={project.links.live} target="_blank" rel="noreferrer" className="hover:opacity-50 transition-opacity">
                [ LIVE ]
              </a>
            )}
            {project.links.huggingface && (
              <a href={project.links.huggingface} target="_blank" rel="noreferrer" className="hover:opacity-50 transition-opacity">
                [ MODEL ]
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Info Label underneath the project card */}
      <div className="mt-4 flex justify-between items-start font-mono uppercase">
        <h3 className="text-xl font-display font-bold text-lightText dark:text-darkText tracking-tighter">
          {project.title}
        </h3>
        <p className="text-xs opacity-60 max-w-[200px] text-right">
          {project.category}
        </p>
      </div>

      <div className="mt-2 text-xs opacity-60 font-mono uppercase">
        {project.tags.slice(0, 3).join(' / ')}
      </div>

    </motion.div>
  );
};

export default ProjectCard;
