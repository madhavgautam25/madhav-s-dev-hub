import { motion } from 'framer-motion';

export default function SectionHeading({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.4 }}
      className="mb-12"
    >
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      <div className="w-16 h-1 rounded-full gradient-orange" />
    </motion.div>
  );
}
