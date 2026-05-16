import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ai, chatModel, SYSTEM_INSTRUCTION } from "@/src/lib/gemini";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm your SaltPer AI Assistant. How can I help you build your digital growth engine today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !ai) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: chatModel,
        contents: [
          { role: "user", parts: [{ text: SYSTEM_INSTRUCTION }] },
          ...messages.map(m => ({
            role: m.role === "assistant" ? "model" as const : "user" as const,
            parts: [{ text: m.content }]
          })),
          { role: "user", parts: [{ text: userMessage }] }
        ],
      });

      const assistantMessage = response.text || "I'm sorry, I couldn't process that. Please try again.";
      setMessages((prev) => [...prev, { role: "assistant", content: assistantMessage }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages((prev) => [...prev, { role: "assistant", content: "Something went wrong. Please check your connection." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-brand-orange text-white rounded-full shadow-lg shadow-brand-orange/20 flex items-center justify-center group"
      >
        <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 z-50 w-[420px] max-w-[90vw] h-[650px] max-h-[75vh] liquid-glass rounded-[3rem] overflow-hidden flex flex-col shadow-3xl border-white/30"
          >
            {/* Header */}
            <div className="p-8 bg-brand-orange/10 backdrop-blur-3xl text-white flex items-center justify-between border-b border-white/10 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-orange flex items-center justify-center shadow-lg shadow-brand-orange/30 group-hover:rotate-12 transition-transform duration-500">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-black text-xl leading-tight tracking-tight">SALTPER INTELLIGENCE</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Systems Active</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-xl transition-colors border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth"
            >
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: m.role === "user" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex gap-3 max-w-[85%] ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg ${m.role === "user" ? "bg-brand-blue" : "bg-white/10 backdrop-blur-md border border-white/10"}`}>
                      {m.role === "user" ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-brand-orange" />}
                    </div>
                    <div className={`p-5 rounded-[2rem] text-sm leading-relaxed ${m.role === "user" ? "bg-brand-orange text-white" : "bg-white/5 text-white border border-white/10 backdrop-blur-3xl"}`}>
                      {m.content}
                    </div>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-3 max-w-[85%]">
                    <div className="w-8 h-8 rounded-full bg-brand-graphite flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 text-brand-grey-light border border-white/10 italic">
                      Typing...
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-6 pt-2 bg-brand-dark/50 border-t border-white/10">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about SEO, Web Design, AI..."
                  className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-6 pr-14 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-orange transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-2 bottom-2 px-4 bg-brand-orange text-white rounded-xl hover:bg-brand-orange-hover transition-colors disabled:opacity-50 disabled:grayscale"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
