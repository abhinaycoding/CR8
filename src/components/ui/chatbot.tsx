import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getBotResponse } from '../../data/chatbot-responses';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
}

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', text: "Hey. I'm the CR8 Bot. Ask me about our services, pricing, or how we work.", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg: Message = { id: Date.now().toString(), text: input.trim(), sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput('');

        // Simulate typing delay
        setTimeout(() => {
            const botResponseText = getBotResponse(userMsg.text);
            const botMsg: Message = { id: (Date.now() + 1).toString(), text: botResponseText, sender: 'bot' };
            setMessages(prev => [...prev, botMsg]);
        }, 600);
    };

    return (
        <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[9999] flex flex-col items-end">
            
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-6 w-[85vw] max-w-[340px] md:w-[400px] md:max-w-none h-[550px] max-h-[calc(100vh-140px)] bg-[#0B0D0A]/90 backdrop-blur-2xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden rounded-2xl relative"
                    >
                        {/* Header */}
                        <div className="px-6 py-5 flex justify-between items-center border-b border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="relative flex items-center justify-center">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#D7FF3E] z-10"></div>
                                    <div className="absolute w-2.5 h-2.5 rounded-full bg-[#D7FF3E] animate-ping opacity-75"></div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-sm tracking-[0.2em] uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>CR8 Studios AI</h3>
                                </div>
                            </div>
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 flex flex-col gap-6 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full">
                            {messages.map((msg) => (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={msg.id} 
                                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} w-full`}
                                >
                                    <span className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                        {msg.sender === 'user' ? 'YOU' : 'CR8 AI'}
                                    </span>
                                    <div 
                                        className={`max-w-[95%] sm:max-w-[90%] p-4 rounded-xl text-sm leading-relaxed break-words whitespace-pre-wrap ${msg.sender === 'user' ? 'bg-[#D7FF3E] text-[#0B0D0A] rounded-tr-sm' : 'bg-white/5 text-gray-200 border border-white/5 rounded-tl-sm'}`}
                                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                                    >
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} className="p-4 bg-transparent border-t border-white/5 flex gap-3 items-center">
                            <input 
                                type="text" 
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask me anything..." 
                                className="flex-1 bg-white/5 text-white border border-white/10 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-[#D7FF3E]/50 transition-colors placeholder-gray-500 font-light"
                                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                            />
                            <button 
                                type="submit"
                                className="bg-[#D7FF3E] text-[#0B0D0A] w-11 h-11 rounded-full flex items-center justify-center hover:scale-105 transition-transform flex-shrink-0"
                            >
                                <svg className="w-5 h-5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Toggle Button */}
            <motion.button 
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-all z-50 overflow-hidden relative ${isOpen ? 'bg-[#111] border border-white/10' : 'bg-[#D7FF3E]'}`}
            >
                {/* Glow effect when closed */}
                {!isOpen && <div className="absolute inset-0 bg-white/20 blur-md rounded-full"></div>}
                
                {isOpen ? (
                    <svg className="w-6 h-6 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                ) : (
                    <svg className="w-6 h-6 text-[#0B0D0A] relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                )}
            </motion.button>
            
        </div>
    );
}
