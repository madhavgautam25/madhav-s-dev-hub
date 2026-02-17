import { aboutText } from '@/data/portfolio';
import { motion } from 'framer-motion';
import { Code2, Rocket, Brain, ChevronRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

const stats = [
  { label: 'Projects', value: '10+', icon: Code2 },
  { label: 'Technologies', value: '15+', icon: Rocket },
  { label: 'Learning', value: '24/7', icon: Brain },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="About Me" />
        <div className="grid md:grid-cols-5 gap-10 items-start">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:col-span-3 space-y-4"
          >
            {aboutText.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="flex gap-3"
              >
                <ChevronRight size={16} className="text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">{p}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-3"
          >
            {stats.map(({ label, value, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3 }}
                whileHover={{ x: 4, borderColor: 'hsl(190 100% 50% / 0.3)' }}
                className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Icon size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-xl font-bold font-mono gradient-cyber-text">{value}</div>
                  <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
