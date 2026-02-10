import { useState } from 'react';
import { Send, Mail, Linkedin, Github } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: 'Please fill in all fields', variant: 'destructive' });
      return;
    }
    toast({ title: 'Message sent!', description: "Thanks for reaching out. I'll get back to you soon." });
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="Get In Touch" />
        <div className="grid md:grid-cols-5 gap-10">
          <motion.form
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
            />
            <button
              type="submit"
              className="gradient-orange-btn text-white px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2 transition-all hover:scale-105 orange-glow"
            >
              Send Message <Send size={16} />
            </button>
          </motion.form>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            <p className="text-muted-foreground text-sm leading-relaxed">
              Feel free to reach out for collaborations, project ideas, or just a friendly chat!
            </p>
            <div className="space-y-3">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail size={18} /> {personalInfo.email}
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Github size={18} /> GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
