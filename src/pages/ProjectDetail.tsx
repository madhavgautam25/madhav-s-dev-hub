import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '@/data/portfolio';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Terminal, Code2, Layers, Clock, User, Activity, ChevronRight, Zap } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useTheme } from '@/hooks/useTheme';
import { useEffect } from 'react';

const easeOut = [0.16, 1, 0.3, 1] as [number, number, number, number];
const easeSmooth = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const glitchVariant = {
  hidden: { opacity: 0, x: -40, skewX: -5 },
  visible: { opacity: 1, x: 0, skewX: 0, transition: { duration: 0.5, ease: easeOut } },
};

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const fadeUp = { hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: easeSmooth } } };
const scaleIn = { hidden: { scale: 0.8, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: easeSmooth } } };

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { dark } = useTheme();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center font-mono">
          <h1 className="text-4xl font-bold mb-4 text-primary">404</h1>
          <p className="text-muted-foreground mb-4">Project not found</p>
          <Link to="/" className="text-primary hover:underline">← cd ~/home</Link>
        </div>
      </div>
    );
  }

  const statusColor = project.status === 'Completed' ? 'text-accent' : project.status === 'In Progress' ? 'text-primary' : 'text-muted-foreground';

  return (
    <div className={`min-h-screen bg-background text-foreground relative ${dark ? 'dark' : ''}`}>
      <AnimatedBackground />

      <main className="relative z-10">
        {/* Header */}
        <motion.header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="sticky top-0 z-40 glass border-b border-border/50"
        >
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <motion.button
              onClick={() => navigate('/')}
              whileHover={{ x: -4 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={18} />
              <span className="hidden sm:inline">cd ~/home</span>
            </motion.button>
            <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
              <Terminal size={14} className="text-primary" />
              <span>~/projects/</span>
              <ChevronRight size={12} />
              <span className="text-primary">{project.slug}</span>
            </div>
          </div>
        </motion.header>

        <div className="max-w-5xl mx-auto px-6 py-12">
          {/* Hero */}
          <motion.section variants={stagger} initial="hidden" animate="visible" className="mb-16">
            <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono font-semibold border ${
                project.status === 'Completed' ? 'border-accent/30 bg-accent/10' :
                project.status === 'In Progress' ? 'border-primary/30 bg-primary/10' : 'border-muted-foreground/30 bg-muted/50'
              } ${statusColor}`}>
                <Activity size={12} className="animate-pulse" />
                {project.status}
              </span>
            </motion.div>

            <motion.h1 variants={glitchVariant} className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight font-mono">
              <span className="gradient-cyber-text text-glow">{project.title}</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
              {project.longDescription}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card/50 text-sm font-mono">
                <User size={15} className="text-primary" />
                <span className="text-muted-foreground">{project.role}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card/50 text-sm font-mono">
                <Clock size={15} className="text-primary" />
                <span className="text-muted-foreground">{project.duration}</span>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px hsl(190 100% 50% / 0.4)' }}
                whileTap={{ scale: 0.97 }}
                className="gradient-cyber-btn text-primary-foreground px-6 py-3 rounded-lg font-semibold font-mono inline-flex items-center gap-2 cyber-glow"
              >
                <Github size={18} /> git clone
              </motion.a>
              {project.demo !== '#' && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="border border-border px-6 py-3 rounded-lg font-semibold font-mono inline-flex items-center gap-2 hover:bg-muted hover:border-primary/30 transition-all"
                >
                  <ExternalLink size={18} /> live demo
                </motion.a>
              )}
            </motion.div>
          </motion.section>

          {/* Tech Stack */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="mb-16">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Code2 size={16} className="text-primary" />
              </div>
              <h2 className="text-2xl font-bold font-mono">tech_stack<span className="text-primary">;</span></h2>
            </motion.div>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((t, i) => (
                <motion.span
                  key={t}
                  variants={scaleIn}
                  whileHover={{ scale: 1.1, y: -4, boxShadow: '0 8px 30px hsl(190 100% 50% / 0.2)' }}
                  className="px-4 py-2 rounded text-sm font-mono font-semibold bg-primary/10 text-primary border border-primary/20 cursor-default transition-shadow"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.section>

          {/* Features & Challenges */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Zap size={16} className="text-primary" />
                </div>
                <h2 className="text-2xl font-bold font-mono">features<span className="text-primary">[]</span></h2>
              </motion.div>
              <div className="space-y-3">
                {project.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ x: 6 }}
                    className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card/50 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <span className="mt-1 w-1.5 h-1.5 bg-primary flex-shrink-0" style={{ transform: 'rotate(45deg)' }} />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Layers size={16} className="text-primary" />
                </div>
                <h2 className="text-2xl font-bold font-mono">challenges<span className="text-accent">;</span></h2>
              </motion.div>
              <div className="space-y-3">
                {project.challenges.map((challenge, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ x: 6 }}
                    className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card/50 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <Terminal size={14} className="mt-0.5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{challenge}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Terminal info */}
          <motion.section
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="rounded-lg overflow-hidden border border-border">
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
                <div className="w-3 h-3 rounded-full bg-accent/60" />
                <span className="ml-3 text-xs text-muted-foreground font-mono">project-info.sh</span>
              </div>
              <div className="p-6 bg-card/30 font-mono text-sm space-y-2">
                {[
                  ['PROJECT_NAME', project.title],
                  ['ROLE', project.role],
                  ['DURATION', project.duration],
                  ['TECH_STACK', `[${project.tech.join(', ')}]`],
                ].map(([key, val], i) => (
                  <div key={key}>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>
                      <span className="text-primary">$</span> <span className="text-muted-foreground">echo</span> <span className="text-foreground">${key}</span>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.1 + 0.05 }} className="text-accent pl-4">
                      {val}
                    </motion.div>
                  </div>
                ))}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                  <span className="text-primary">$</span> <span className="animate-typing-cursor text-primary">▌</span>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Other Projects */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-2xl font-bold mb-6 font-mono">ls ~/other-projects<span className="text-primary">/</span></motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.filter((p) => p.slug !== slug).map((p) => (
                <motion.div key={p.slug} variants={scaleIn}>
                  <Link
                    to={`/project/${p.slug}`}
                    className="block p-5 rounded-lg border border-border bg-card/50 hover:border-primary/30 transition-all duration-300 cyber-glow-hover group"
                  >
                    <h3 className="font-bold text-sm mb-2 font-mono group-hover:text-primary transition-colors">{p.title}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{p.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.slice(0, 3).map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-primary/10 text-primary border border-primary/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Back */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-16 text-center">
            <motion.button
              onClick={() => navigate('/')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="border border-border px-8 py-3 rounded-lg font-semibold font-mono inline-flex items-center gap-2 hover:bg-muted hover:border-primary/30 transition-all"
            >
              <ArrowLeft size={18} /> cd ~/home
            </motion.button>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
