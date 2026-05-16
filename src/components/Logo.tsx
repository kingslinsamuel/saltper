import { motion } from "motion/react";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center gap-1 ${className}`}>
      <div className="relative w-10 h-10 overflow-hidden rounded-xl border border-white/10 shadow-lg">
        {/* Diagonal Split Background */}
        <div className="absolute inset-0 bg-white" />
        <div 
          className="absolute inset-0 bg-brand-black" 
          style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} 
        />
        
        {/* Small Logo Icon (Simplified version of the text if needed, or just the split) */}
        <div className="absolute inset-0 flex items-center justify-center font-display font-black text-[10px] tracking-tighter">
          <span className="text-brand-orange">S</span>
          <span className="text-white mix-blend-difference">P</span>
        </div>
      </div>
      
      <div className="flex items-center text-2xl font-display font-black tracking-tighter ml-1">
        <span className="text-brand-orange">Salt</span>
        <span className="text-white">Per</span>
        <div className="relative w-3 h-3 ml-0.5 mt-2 overflow-hidden rounded-[2px]">
          <div className="absolute inset-0 bg-blue-600" style={{ clipPath: 'inset(0 50% 0 0)' }} />
          <div className="absolute inset-0 bg-red-600" style={{ clipPath: 'inset(0 0 0 50%)' }} />
        </div>
      </div>
    </div>
  );
}
