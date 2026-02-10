import { aboutText } from '@/data/portfolio';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="About Me" />
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3 space-y-4"
          >
            {aboutText.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
          </motion.div>
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-foreground/5 via-primary/20 to-primary/5 border border-border flex items-center justify-center">
              <div className="text-6xl">🚀</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
