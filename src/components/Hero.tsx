import { ArrowDown, Download, Sparkles } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { motion } from 'framer-motion';

const easeOut = [0.25, 0.46, 0.45, 0.94] as const;

const textReveal = {
  hidden: { y: 40, opacity: 0, filter: 'blur(10px)' },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { delay: i * 0.15, duration: 0.6, ease: easeOut as unknown as [number, number, number, number] },
  }),
};

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16 relative overflow-hidden">
      {/* Animated rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[600px] h-[600px] rounded-full border border-primary/[0.06]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[800px] h-[800px] rounded-full border border-primary/[0.04]"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="mx-auto mb-8 w-32 h-32 rounded-full p-1 bg-gradient-to-br from-foreground/80 via-primary to-primary/60 relative group"
        >
          <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-3xl font-bold text-muted-foreground">
            MG
          </div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-1 -right-1 w-8 h-8 rounded-full gradient-orange flex items-center justify-center"
          >
            <Sparkles size={14} className="text-white" />
          </motion.div>
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textReveal}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
        >
          Hi, I'm{' '}
          <span className="gradient-orange-text relative">
            {personalInfo.name}
            <motion.span
              className="absolute -bottom-2 left-0 right-0 h-1 rounded-full gradient-orange"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              style={{ transformOrigin: 'left' }}
            />
          </span>
          <br />
          <motion.span
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textReveal}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground"
          >
            {personalInfo.headline}
          </motion.span>
        </motion.h1>

        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={textReveal}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={textReveal}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px hsl(25 95% 53% / 0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="gradient-orange-btn text-white px-8 py-3 rounded-xl font-semibold inline-flex items-center justify-center gap-2 transition-all orange-glow"
          >
            View Projects <ArrowDown size={18} />
          </motion.a>
          <motion.a
            href={personalInfo.resumeUrl}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="border border-border px-8 py-3 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-muted transition-all"
          >
            Download Resume <Download size={18} />
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 mx-auto flex items-start justify-center p-1.5"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
