import { motion } from 'framer-motion';

const gridLines = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  x: (i + 1) * 12.5,
  delay: Math.random() * 3,
  duration: Math.random() * 4 + 6,
}));

const dataStreams = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  delay: Math.random() * 8,
  duration: Math.random() * 6 + 5,
  char: ['0', '1', '{', '}', '<', '>', '/', '*'][Math.floor(Math.random() * 8)],
}));

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Base grid */}
      <div className="absolute inset-0 circuit-pattern opacity-60" />

      {/* Gradient orbs - cyan themed */}
      <motion.div
        animate={{ x: [0, 30, -20, 0], y: [0, -30, 15, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, -30, 20, 0], y: [0, 20, -30, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-[100px]"
      />

      {/* Vertical data streams */}
      {dataStreams.map((s) => (
        <motion.div
          key={s.id}
          initial={{ y: '-10%', opacity: 0 }}
          animate={{ y: '110vh', opacity: [0, 0.3, 0.3, 0] }}
          transition={{ duration: s.duration, repeat: Infinity, delay: s.delay, ease: 'linear' }}
          className="absolute font-mono text-primary/20 text-xs"
          style={{ left: `${s.x}%` }}
        >
          {s.char}
        </motion.div>
      ))}

      {/* Horizontal scan lines */}
      <div className="absolute inset-0 scanlines" />
    </div>
  );
}
