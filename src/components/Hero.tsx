import { ArrowDown, Download } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Avatar placeholder */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 w-32 h-32 rounded-full p-1 bg-gradient-to-br from-foreground/80 via-primary to-primary/60"
        >
          <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-3xl font-bold text-muted-foreground">
            MG
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
        >
          Hi, I'm{' '}
          <span className="gradient-orange-text">{personalInfo.name}</span>
          <br />
          <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground">
            {personalInfo.headline}
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="gradient-orange-btn text-white px-8 py-3 rounded-xl font-semibold inline-flex items-center justify-center gap-2 transition-all hover:scale-105 orange-glow"
          >
            View Projects <ArrowDown size={18} />
          </a>
          <a
            href={personalInfo.resumeUrl}
            download
            className="border border-border px-8 py-3 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-muted transition-all hover:scale-105"
          >
            Download Resume <Download size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
