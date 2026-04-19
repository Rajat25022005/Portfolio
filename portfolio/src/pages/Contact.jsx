import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { SOCIAL_LINKS, META } from '../data/constants';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState({ loading: false, message: '', type: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: '', type: '' });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'dummy';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'dummy';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'dummy';

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setStatus({ loading: false, message: 'Message sent successfully.', type: 'success' });
        formRef.current.reset();
      }, () => {
        setStatus({ loading: false, message: 'Failed to send. Please email directly.', type: 'error' });
      });
  };

  return (
    <div className="min-h-screen border-b border-border">
      <div className="grid grid-cols-2 max-md:grid-cols-1">
        
        {/* Left: Info */}
        <div className="p-[5rem_2.5rem] border-r border-border max-md:border-r-0 max-md:border-b max-md:p-[3rem_1.2rem]">
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] font-extrabold leading-[0.93] tracking-[-0.04em] mb-[4rem]">
            Say<br/><em className="italic font-[Georgia,serif] font-normal">hello.</em>
          </h1>
          
          <div className="flex flex-col gap-[2.5rem]">
            <div>
              <p className="text-[0.75rem] tracking-[0.1em] uppercase opacity-70 mb-[0.5rem]">Email</p>
              <a href={`mailto:${META.email}`} className="text-[1.2rem] font-bold tracking-[-0.02em] hover:opacity-70 transition-opacity">
                {META.email}
              </a>
            </div>
            <div>
              <p className="text-[0.75rem] tracking-[0.1em] uppercase opacity-70 mb-[0.5rem]">Location</p>
              <p className="text-[1.2rem] font-bold tracking-[-0.02em]">{META.location}</p>
            </div>
            <div>
              <p className="text-[0.75rem] tracking-[0.1em] uppercase opacity-70 mb-[1rem]">Social</p>
              <div className="flex gap-[1.5rem]">
                {SOCIAL_LINKS.filter(l => l.id !== 'email').map(link => (
                  <a key={link.id} href={link.url} target="_blank" rel="noreferrer" className="text-[1.2rem] hover:opacity-70 transition-opacity">
                    <i className={link.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="p-[5rem_2.5rem] max-md:p-[3rem_1.2rem] bg-cardBg">
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-[2.5rem]">
            <div className="relative border-b border-border">
              <input 
                type="text" 
                name="name" 
                required
                placeholder="What's your name?"
                className="w-full bg-transparent py-[1rem] text-[1.2rem] font-display font-bold focus:outline-none placeholder:opacity-30"
              />
            </div>
            <div className="relative border-b border-border">
              <input 
                type="email" 
                name="email" 
                required
                placeholder="Your email address"
                className="w-full bg-transparent py-[1rem] text-[1.2rem] font-display font-bold focus:outline-none placeholder:opacity-30"
              />
            </div>
            <div className="relative border-b border-border">
              <textarea 
                name="message" 
                rows="4"
                required
                placeholder="Tell us about your project"
                className="w-full bg-transparent py-[1rem] text-[1.2rem] font-display font-bold focus:outline-none placeholder:opacity-30 resize-none"
              ></textarea>
            </div>

            {status.message && (
              <p className={`text-[0.8rem] font-bold tracking-[0.05em] uppercase ${status.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                {status.message}
              </p>
            )}

            <button 
              type="submit" 
              disabled={status.loading}
              className="mt-[1rem] inline-flex self-start items-center gap-[0.6rem] bg-fg text-bg font-display text-[0.85rem] font-bold tracking-[0.04em] p-[0.9rem_2.2rem] rounded-full border-none cursor-pointer transition-all duration-200 hover:opacity-85 hover:scale-105 after:content-['→'] disabled:opacity-50"
            >
              {status.loading ? 'Sending...' : 'Send message'}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
