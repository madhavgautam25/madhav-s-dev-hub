import { experiences } from '@/data/portfolio';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="Experience" />
        <div className="relative pl-8 border-l-2 border-primary/30 space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative"
            >
              {/* Dot */}
              <div className="absolute -left-[calc(2rem+5px)] top-1.5 w-3 h-3 rounded-full bg-primary" />
              <div className="glass rounded-xl p-5 border border-border">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="font-semibold text-lg">{exp.title}</h3>
                  <span className="text-xs text-muted-foreground font-medium">{exp.period}</span>
                </div>
                <p className="text-sm text-primary font-medium mb-2">{exp.org}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
