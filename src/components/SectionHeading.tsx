import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export default function SectionHeading({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="mb-12"
    >
      <div className="flex items-center gap-3 mb-3">
        <Terminal size={18} className="text-primary" />
        <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">// section</span>
      </div>
      <h2 className="text-3xl font-bold mb-3 font-mono">{title}<span className="text-primary animate-typing-cursor">_</span></h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        style={{ transformOrigin: 'left' }}
        className="w-20 h-[2px] bg-gradient-to-r from-primary via-accent to-transparent"
      />
    </motion.div>
  );
}
