import { skills } from '@/data/portfolio';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import SectionHeading from './SectionHeading';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0, opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const skillItemVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1, opacity: 1,
    transition: { type: 'spring' as const, stiffness: 260, damping: 20 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/3 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeading title="Tech Stack" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="rounded-lg p-6 border border-border bg-card/50 hover:border-primary/30 transition-all duration-300 cyber-glow-hover group relative overflow-hidden"
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/30" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/30" />

              <div className="relative z-10">
                <h3 className="font-bold text-sm mb-5 font-mono uppercase tracking-wider text-primary flex items-center gap-2">
                  <span className="text-muted-foreground">//</span> {group.category}
                </h3>
                <motion.div variants={containerVariants} className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={skillItemVariants}
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-3 py-2 rounded text-xs font-mono font-medium bg-muted/50 text-foreground hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20 transition-all duration-300 cursor-default"
                    >
                      {skill.icon ? (
                        <img src={skill.icon} alt={skill.name} className="w-4 h-4 object-contain" loading="lazy" />
                      ) : (
                        <Cpu size={12} className="opacity-60" />
                      )}
                      {skill.name}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
