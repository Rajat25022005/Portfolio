import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { skills } from '../data/skills';
import { experience } from '../data/experience';
import { META } from '../data/constants';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm Rajat's AI twin. Ask me anything about his projects, skills, or research." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Generate Context String
  const systemPrompt = `
    You are the AI Assistant of Rajat Malik, a highly skilled AI/ML Developer and Researcher. 
    Your goal is to answer questions about Rajat as if you are his digital twin.
    
    RAJAT'S PROFILE:
    - Role: AI/ML Developer & Independent Researcher.
    - Focus: Latent reasoning, Autonomous systems, LLM architectures.
    - Education: B.E. in CS (AI & ML) at Chandigarh University (2023-2027).
    
    EXPERTISE & SKILLS:
    ${skills.map(s => `- ${s.title}: ${s.tags.join(', ')}`).join('\n')}
    
    WORK EXPERIENCE:
    ${experience.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.bullets.join(' ')}`).join('\n')}
    
    SELECTED PROJECTS:
    ${projects.slice(0, 10).map(p => `- ${p.title}: ${p.description} (Category: ${p.category})`).join('\n')}
    
    TONE & STYLE:
    - Be professional, concise, and slightly intellectual (matching his "Brutalist Editorial" portfolio style).
    - Use first-person "I" when referring to Rajat's work (e.g., "I developed think-in-silence...").
    - If you don't know an answer, suggest they contact Rajat directly at ${META.email}.
    - Keep responses relatively short (under 3-4 sentences).
  `;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: import.meta.env.VITE_GROQ_MODEL || 'llama-3.3-70b-versatile',
          messages: [
            { role: 'system', content: systemPrompt },
            ...messages.map(m => ({ role: m.role, content: m.content })),
            userMessage
          ],
          max_tokens: 300
        })
      });

      const data = await response.json();
      const aiResponse = data.choices[0].message.content;
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I'm having trouble connecting to my neural network. Please try again later!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[1000]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[350px] h-[500px] bg-bg border border-border shadow-2xl rounded-2xl flex flex-col overflow-hidden max-md:fixed max-md:inset-4 max-md:w-auto max-md:h-auto max-md:bottom-24"
          >
            {/* Header */}
            <div className="p-4 border-b border-border bg-cardBg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-fg text-bg flex items-center justify-center font-bold text-xs">RM</div>
                <div>
                  <div className="text-[0.8rem] font-bold">RM Assistant</div>
                  <div className="text-[0.65rem] opacity-50 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    Online · Powered by Groq
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="opacity-50 hover:opacity-100 text-lg">×</button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-[0.85rem] leading-[1.5] ${
                    msg.role === 'user' 
                      ? 'bg-fg text-bg rounded-tr-none' 
                      : 'bg-cardBg border border-border rounded-tl-none'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-cardBg border border-border p-3 rounded-2xl rounded-tl-none flex gap-1">
                    <span className="w-1.5 h-1.5 bg-fg opacity-20 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-fg opacity-20 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-fg opacity-20 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-border flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                className="flex-1 bg-cardBg border border-border rounded-full px-4 py-2 text-[0.85rem] focus:outline-none focus:border-fg transition-colors"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="w-10 h-10 rounded-full bg-fg text-bg flex items-center justify-center disabled:opacity-50"
              >
                ↑
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 3.5, duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-6 h-14 rounded-full bg-fg text-bg shadow-xl border-2 border-bg transition-all duration-300"
      >
        {isOpen ? (
          <span className="text-xl font-bold">×</span>
        ) : (
          <>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2 22l5-1.338c1.47.851 3.179 1.338 5 1.338 5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.477 0-2.857-.405-4.033-1.107l-2.85.762.762-2.85A7.94 7.94 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
            </svg>
            <span className="text-[0.8rem] font-black uppercase tracking-[0.1em]">Ask my AI</span>
          </>
        )}
      </motion.button>
    </div>
  );
};

export default ChatBot;
