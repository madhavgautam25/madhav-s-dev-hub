import { ExternalLink, Github, ArrowUpRight, Terminal } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0, opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto relative">
        <SectionHeading title="Projects" />

        {/* Terminal header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-8 text-xs text-muted-foreground font-mono"
        >
          <Terminal size={14} className="text-primary" />
          <span>~/madhav/projects</span>
          <span className="text-primary">$</span>
          <span>ls --detailed</span>
          <span className="animate-typing-cursor text-primary">▌</span>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="rounded-lg p-6 border border-border bg-card/50 hover:border-primary/30 transition-all duration-300 cyber-glow-hover group relative overflow-hidden"
            >
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-primary/20" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-primary/20" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-primary/20" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-accent/20" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-mono text-xs">&gt;_</span>
                    <h3 className="text-xl font-bold font-mono group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <Link to={`/project/${project.slug}`}>
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 45 }}
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                    >
                      <ArrowUpRight size={20} />
                    </motion.div>
                  </Link>
                </div>

                <div className="mb-3">
                  <span className={`text-[10px] font-mono uppercase tracking-wider ${
                    project.status === 'Completed' ? 'text-accent' : 'text-primary'
                  }`}>
                    [{project.status}]
                  </span>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-primary/10 text-primary border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 2 }}
                      className="inline-flex items-center gap-1.5 text-sm font-mono font-medium text-muted-foreground hover:text-primary transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={14} /> src
                    </motion.a>
                    {project.demo !== '#' && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 2 }}
                        className="inline-flex items-center gap-1.5 text-sm font-mono font-medium text-muted-foreground hover:text-primary transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={14} /> demo
                      </motion.a>
                    )}
                  </div>
                  <Link
                    to={`/project/${project.slug}`}
                    className="text-xs font-mono text-primary hover:text-accent transition-colors"
                  >
                    cat README.md →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
