import { GraduationCap } from 'lucide-react';
import { education } from '@/data/portfolio';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="Education" />
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className="glass rounded-2xl p-6 border border-border flex gap-5 items-start"
        >
          <div className="w-12 h-12 rounded-xl gradient-orange flex items-center justify-center flex-shrink-0">
            <GraduationCap className="text-white" size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg">{education.degree}</h3>
            <p className="text-primary font-medium text-sm">{education.institution}</p>
            <p className="text-xs text-muted-foreground mb-2">{education.period}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{education.description}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
