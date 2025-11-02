import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* subtle gradient and noise overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-950/70" />
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20% 10%, rgba(255,255,255,0.08) 0, transparent 40%)' }} />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur">
          <Sparkles className="h-4 w-4 text-emerald-300" />
          <span className="text-slate-200">CSE + AI Portfolio</span>
        </div>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
          Building intelligent experiences
          <span className="block bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">with AI, code, and curiosity</span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-200/90 md:text-lg">
          Fresh graduate in Computer Science & AI focused on applied machine learning, LLM-driven products,
          and delightful interfaces. I love turning ideas into interactive prototypes and scalable apps.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 font-medium text-slate-900 transition hover:bg-emerald-300"
          >
            <Rocket className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            Explore Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
