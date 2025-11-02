import React from 'react';
import { Brain, Code, Cpu, Sparkles } from 'lucide-react';

const skills = [
  {
    icon: Brain,
    title: 'Machine Learning',
    desc: 'Supervised/unsupervised learning, model evaluation, feature engineering.'
  },
  {
    icon: Cpu,
    title: 'Deep Learning',
    desc: 'CNNs, RNNs, Transformers, training and inference optimization.'
  },
  {
    icon: Code,
    title: 'MLOps & Backend',
    desc: 'FastAPI, vector DBs, pipelines, testing, and deployment automation.'
  },
  {
    icon: Sparkles,
    title: 'Generative AI',
    desc: 'Prompt engineering, RAG, fine-tuning, and tool-using agents.'
  }
];

const Skills = () => {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Core Skills</h2>
        <p className="mt-3 text-slate-300">
          A toolbelt focused on building intelligent, reliable, and user-first products.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {skills.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{
              background: 'radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(52, 211, 153, 0.15), transparent 40%)'
            }} />
            <div className="relative z-10">
              <div className="mb-4 inline-flex rounded-lg bg-emerald-400/10 p-3 text-emerald-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
