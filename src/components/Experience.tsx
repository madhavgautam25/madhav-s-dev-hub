import { experiences } from '@/data/portfolio';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="Experience" />
        <div className="relative pl-8 border-l border-primary/20 space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              {/* Node */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 300, delay: i * 0.15 + 0.2 }}
                className="absolute -left-[calc(2rem+4px)] top-2 w-2 h-2 bg-primary border border-primary/50"
                style={{ transform: 'rotate(45deg)' }}
              >
                <motion.div
                  animate={{ scale: [1, 2, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  className="absolute inset-0 bg-primary"
                  style={{ transform: 'rotate(0deg)' }}
                />
              </motion.div>
              <motion.div
                whileHover={{ x: 4 }}
                className="rounded-lg p-5 border border-border bg-card/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="font-semibold text-lg font-mono">{exp.title}</h3>
                  <span className="text-[10px] text-muted-foreground font-mono tracking-wider uppercase">{exp.period}</span>
                </div>
                <p className="text-sm text-primary font-mono font-medium mb-2">{exp.org}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
