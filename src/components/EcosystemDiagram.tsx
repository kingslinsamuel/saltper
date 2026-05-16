import { motion } from "motion/react";
import { Layers, Globe, BarChart, Bot, UserCheck, ShieldCheck } from "lucide-react";

const nodes = [
  { id: 'core', label: "Core Revenue Site", icon: Globe, pos: "center" },
  { id: 'ana', label: "ROI Analytics", icon: BarChart, pos: "tr" },
  { id: 'ai', label: "AI Sales Assistant", icon: Bot, pos: "tl" },
  { id: 'portal', label: "Client Portal", icon: UserCheck, pos: "br" },
  { id: 'sec', label: "Maintenance v5", icon: ShieldCheck, pos: "bl" },
];

export default function EcosystemDiagram() {
  return (
    <section className="py-32 bg-brand-dark text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">System Integration</span>
          <h2 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter mt-4 mb-6">
            THE SALTPER <span className="text-brand-orange">ECOSYSTEM.</span>
          </h2>
          <p className="text-xl text-white/50">
            A unified growth environment where every component feeds the other.
          </p>
        </div>

        <div className="relative h-[600px] flex items-center justify-center">
          {/* Central Hub */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="w-48 h-48 rounded-[3rem] bg-brand-orange flex flex-col items-center justify-center text-center p-6 z-20 shadow-2xl shadow-brand-orange/40"
          >
             <Layers className="w-10 h-10 mb-4" />
             <div className="font-display font-bold text-lg leading-tight uppercase tracking-tighter">Your Business <br /> Hub</div>
          </motion.div>

          {/* Connections & Satellites */}
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-[450px] h-[450px] border border-white/5 rounded-full border-dashed animate-spin-slow" />
             <div className="absolute w-[300px] h-[300px] border border-white/10 rounded-full border-dashed" />
          </div>

          {nodes.filter(n => n.pos !== "center").map((node, i) => {
            const positions: Record<string, string> = {
              tl: "-translate-x-48 -translate-y-48",
              tr: "translate-x-48 -translate-y-48",
              bl: "-translate-x-48 translate-y-48",
              br: "translate-x-48 translate-y-48",
            };
            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15 }}
                className={`absolute ${positions[node.pos]} glass-dark p-6 rounded-3xl flex items-center gap-4 min-w-[200px] z-30 border border-white/10`}
              >
                <div className="w-10 h-10 rounded-xl bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                   <node.icon className="w-5 h-5" />
                </div>
                <div className="font-bold text-sm uppercase tracking-widest">{node.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
