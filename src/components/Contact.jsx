import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-12">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-3xl font-bold text-white">Let’s build something smart together</h3>
            <p className="mt-3 text-slate-300">
              I’m looking for roles and collaborations in applied AI, full‑stack, and research‑driven product teams.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="mailto:youremail@example.com"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 font-medium text-slate-900 transition hover:bg-emerald-300"
              >
                <Mail className="h-5 w-5" />
                Email me
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-white backdrop-blur transition hover:bg-white/10"
              >
                <Github className="h-5 w-5" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-white backdrop-blur transition hover:bg-white/10"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
            <form className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:border-emerald-300 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:border-emerald-300 focus:outline-none"
              />
              <textarea
                rows="4"
                placeholder="Tell me about your project or role..."
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:border-emerald-300 focus:outline-none"
              />
              <button
                type="button"
                className="rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-slate-900 transition hover:bg-emerald-300"
                onClick={() => alert('Thanks! This demo form does not submit yet.')}
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-slate-400">© {new Date().getFullYear()} Your Name — Built with React, Tailwind, and a playful 3D twist.</p>
    </section>
  );
};

export default Contact;
