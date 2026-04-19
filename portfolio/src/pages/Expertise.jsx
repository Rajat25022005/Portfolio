import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const Expertise = () => {
  return (
    <div className="min-h-screen">
      <div className="px-[2.5rem] pt-[5rem] pb-[4rem] border-b border-border max-md:px-[1.2rem] max-md:pt-[3rem]">
        <h1 className="font-display text-[clamp(3rem,8vw,7rem)] font-extrabold leading-[0.93] tracking-[-0.04em] mb-[1.5rem]">
          My<br/><em className="italic font-[Georgia,serif] font-normal">Expertise</em>
        </h1>
        <p className="text-[0.95rem] leading-[1.7] opacity-80 max-w-[400px]">
          A breakdown of the technologies, frameworks, and domains I specialize in to build autonomous intelligence.
        </p>
      </div>

      <div className="grid grid-cols-1 border-b border-border">
        {skills.map((skill, index) => (
          <div 
            key={skill.id} 
            className="grid grid-cols-[1fr_2fr] border-b border-border last:border-b-0 max-md:grid-cols-1"
          >
            <div className="p-[3rem_2.5rem] border-r border-border max-md:border-r-0 max-md:border-b max-md:p-[2rem_1.2rem]">
              <div className="text-[0.75rem] tracking-[0.1em] uppercase opacity-40 mb-[1rem]">0{index + 1}</div>
              <h2 className="text-[2rem] font-bold tracking-[-0.03em] leading-none mb-[1rem]">
                {skill.title}
              </h2>
            </div>
            <div className="p-[3rem_2.5rem] flex flex-wrap gap-[1rem] items-center max-md:p-[2rem_1.2rem]">
              {skill.tags.map(tag => (
                <span 
                  key={tag} 
                  className="px-[1.5rem] py-[0.7rem] border border-border rounded-full text-[0.85rem] font-bold tracking-[0.02em] hover:bg-fg hover:text-bg transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA SECTION */}
      <section className="p-[6rem_2.5rem] text-center">
        <div className="text-[clamp(2rem,5vw,4.5rem)] font-extrabold tracking-[-0.04em] leading-[0.95] mb-[2.5rem]">
          Ready to build something<br/><em className="italic font-[Georgia,serif] font-normal">extraordinary?</em>
        </div>
        <a href="/#/contact" className="inline-flex items-center gap-[0.6rem] bg-fg text-bg font-display text-[0.85rem] font-bold tracking-[0.04em] p-[0.9rem_2.2rem] rounded-full border-none cursor-pointer transition-all duration-200 hover:opacity-85 hover:scale-105 after:content-['→']">
          Get in touch
        </a>
      </section>
    </div>
  );
};

export default Expertise;
