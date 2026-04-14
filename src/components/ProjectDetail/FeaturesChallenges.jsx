import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldAlert, Zap, Cpu } from "lucide-react";

const FeaturesChallenges = React.memo(({ project }) => {
  const hasFeatures = project.features && project.features.length > 0;
  const hasChallenges = project.challenges && project.challenges.length > 0;

  if (!hasFeatures && !hasChallenges) return null;

  return (
    <div className={`grid grid-cols-1 ${hasFeatures && hasChallenges ? 'md:grid-cols-2' : ''} gap-8 mb-16`}>
      {/* Features Section */}
      {hasFeatures && (
        <motion.div
          className="flex flex-col h-full"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-6 ml-2">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Zap className="text-primary h-5 w-5" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight">Core Innovations</h3>
          </div>

          <div className="flex-grow space-y-4">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-5 rounded-2xl bg-primary/[0.03] dark:bg-primary/[0.02] hover:bg-primary/[0.06] dark:hover:bg-primary/[0.04] transition-all duration-300 group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="h-5 w-5 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed transition-colors group-hover:text-foreground">
                    {feature}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Challenges Section */}
      {hasChallenges && (
        <motion.div
          className="flex flex-col h-full"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-6 ml-2">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
              <Cpu className="text-orange-500 h-5 w-5" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight">Engineering Solutions</h3>
          </div>

          <div className="flex-grow space-y-4">
            {project.challenges.map((challenge, index) => (
              <motion.div
                key={index}
                className="p-5 rounded-2xl bg-orange-500/[0.03] dark:bg-orange-500/[0.02] hover:bg-orange-500/[0.06] dark:hover:bg-orange-500/[0.04] transition-all duration-300 group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex gap-4">
                  <div className="mt-1">
                    <ShieldAlert className="h-5 w-5 text-orange-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed transition-colors group-hover:text-foreground">
                    {challenge}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
});

export default FeaturesChallenges;
