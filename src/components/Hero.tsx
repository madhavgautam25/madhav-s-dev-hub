import { ArrowDown, Download, Terminal, ChevronRight } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { motion } from 'framer-motion';
import madhavPhoto from '@/assets/madhav-photo.jpg';

const easeOut = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const textReveal = {
  hidden: { y: 40, opacity: 0, filter: 'blur(8px)' },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { delay: i * 0.15, duration: 0.6, ease: easeOut },
  }),
};

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Geometric rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[500px] h-[500px] rounded-full border border-primary/[0.06]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[700px] h-[700px] border border-dashed border-primary/[0.04]"
          style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
        />
      </div>

      <div className="max-w-5xl w-full mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Terminal prompt */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textReveal}
            className="flex items-center gap-2 mb-6 justify-center lg:justify-start"
          >
            <span className="font-mono text-xs text-muted-foreground flex items-center gap-1.5 px-3 py-1.5 rounded bg-muted/50 border border-border">
              <Terminal size={12} className="text-primary" />
              ~/portfolio <ChevronRight size={10} /> <span className="text-primary">init</span>
              <span className="animate-typing-cursor text-primary">▌</span>
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textReveal}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
          >
            Hi, I'm{' '}
            <span className="gradient-cyber-text relative whitespace-nowrap text-glow">
              {personalInfo.name}
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-accent to-transparent"
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
            className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={textReveal}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px hsl(190 100% 50% / 0.4)' }}
              whileTap={{ scale: 0.97 }}
              className="gradient-cyber-btn text-primary-foreground px-8 py-3 rounded-lg font-semibold font-mono inline-flex items-center justify-center gap-2 transition-all cyber-glow"
            >
              ./view-projects <ArrowDown size={18} />
            </motion.a>
            <motion.a
              href={personalInfo.resumeUrl}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="border border-border px-8 py-3 rounded-lg font-semibold font-mono inline-flex items-center justify-center gap-2 hover:bg-muted hover:border-primary/30 transition-all"
            >
              download resume <Download size={18} />
            </motion.a>
          </motion.div>
        </div>

        {/* Profile photo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="relative flex-shrink-0"
        >
          <div className="w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-lg p-[2px] bg-gradient-to-br from-primary via-accent to-primary/40 cyber-glow">
            <img
              src={madhavPhoto}
              alt="Madhav Gautam"
              className="w-full h-full rounded-lg object-cover object-top"
            />
          </div>
          {/* Corner brackets */}
          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-primary/50" />
          <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-primary/50" />
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-primary/50" />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-accent/50" />
          {/* Status indicator */}
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-3 -right-3 flex items-center gap-1.5 px-2 py-1 rounded bg-card border border-border text-[10px] font-mono text-accent"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            ONLINE
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground/50"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-primary/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
