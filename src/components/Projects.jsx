import React from 'react';
import { ExternalLink, Rocket, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'LLM Study Buddy',
    description:
      'An interactive study assistant that summarizes lecture videos, generates quizzes, and chats over PDFs using RAG.',
    tags: ['React', 'FastAPI', 'RAG', 'OpenAI'],
    link: '#'
  },
  {
    title: 'Vision-Language Notes',
    description:
      'Mobile-friendly app that turns whiteboard photos into structured, searchable notes with OCR + captioning.',
    tags: ['PyTorch', 'OCR', 'CLIP', 'Tailwind'],
    link: '#'
  },
  {
    title: 'AI Dev Portfolio Generator',
    description:
      'CLI tool that scaffolds project readmes, previews, and badges using model-assisted templates.',
    tags: ['Node', 'TypeScript', 'LLM'],
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Selected Projects</h2>
        <p className="mt-3 text-slate-300">
          A snapshot of things I loved building — from prototypes to production-ready tools.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-400/0 via-emerald-400/0 to-emerald-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative z-10">
              <div className="mb-4 inline-flex items-center gap-2 text-emerald-300">
                <Rocket className="h-5 w-5" />
                <span className="text-xs font-medium">AI Project</span>
              </div>
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                className="mt-6 inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200"
              >
                View project
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
