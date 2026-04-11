import React from "react";
import { motion } from "framer-motion";
import { Info, Terminal, Activity } from "lucide-react";

const PerformanceNote = React.memo(({ note }) => {
  if (!note) return null;

  // Handle both string and object notes
  const noteTitle = typeof note === 'object' ? note.title : "Optimization Log";
  const noteContent = typeof note === 'object' ? note.description : note;

  return (
    <motion.div
      className="max-w-2xl mx-auto mb-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative p-[1px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-border/10 to-transparent">
        <div className="bg-background/80 dark:bg-card/40 backdrop-blur-xl p-6 rounded-2xl relative overflow-hidden group">
          
          {/* Subtle Scanning Line Animation */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/20 -translate-y-full group-hover:animate-[scan_2s_linear_infinite]" />
          
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20">
              <Activity className="h-5 w-5 text-primary animate-pulse" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary/70">{noteTitle}</span>
                <div className="h-[1px] flex-1 bg-border/30" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                {noteContent}
              </p>
            </div>
          </div>
          
          {/* Bottom Readout Data */}
          <div className="mt-4 flex justify-end">
            <span className="text-[9px] font-mono text-muted-foreground/30 uppercase tracking-[0.3em]">Status: Nominal // Sync: Direct</span>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes scan {
            from { transform: translateY(-100%); }
            to { transform: translateY(300px); }
          }
        `}
      </style>
    </motion.div>
  );
});

export default PerformanceNote;
