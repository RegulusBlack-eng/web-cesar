"use client";

import dynamic from "next/dynamic";
import { ArrowUpRight, Sparkles, Terminal } from "lucide-react";

const HeroCanvas = dynamic(() => import("../components/HeroCanvas"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-obsidian-void -z-10" />,
});

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col justify-between p-6 md:p-12 overflow-hidden bg-obsidian-void text-titanium">
      <HeroCanvas />

      {/* Header */}
      <header className="flex justify-between items-center w-full max-w-7xl mx-auto z-10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-photonic-blue animate-pulse" />
          <span className="font-syne font-extrabold text-xl tracking-wider text-white">
            CÉSAR<span className="text-photonic-blue">.</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-mono text-titanium-muted">
          <span className="text-white hover:text-photonic-blue transition-colors cursor-pointer">// 01. SERVICIOS</span>
          <span className="hover:text-photonic-blue transition-colors cursor-pointer">// 02. SHOWCASE</span>
          <span className="hover:text-photonic-blue transition-colors cursor-pointer">// 03. STACK</span>
        </nav>

        <button className="glass-panel px-5 py-2.5 rounded-full text-xs font-mono flex items-center gap-2 hover:border-photonic-blue transition-all">
          <span>CONTACTO</span>
          <ArrowUpRight className="w-4 h-4 text-photonic-blue" />
        </button>
      </header>

      {/* Hero Content */}
      <section className="w-full max-w-7xl mx-auto my-auto py-20 z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-9 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-obsidian-border bg-obsidian-card/50 text-xs font-mono text-solar-amber">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ESTUDIO DE INGENIERÍA CREATIVA</span>
          </div>

          <h1 className="font-syne font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight text-white leading-none">
            INGENIERÍA WEB <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-photonic-blue via-titanium to-solar-amber">
              DE ULTRA IMPACTO.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-titanium-muted max-w-2xl font-sans font-normal leading-relaxed">
            Interfaces de alta gama, experiencias 3D inmersivas y arquitectura de software bespoke diseñadas para destacar.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-4 rounded-xl bg-photonic-blue hover:bg-blue-600 text-white font-mono text-sm font-semibold transition-all glow-cobalt flex items-center gap-2">
              <span>EXPLORAR SHOWCASE</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button className="glass-card px-8 py-4 rounded-xl font-mono text-sm font-semibold text-titanium flex items-center gap-2">
              <Terminal className="w-4 h-4 text-photonic-blue" />
              <span>TECH STACK</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer Bar */}
      <footer className="w-full max-w-7xl mx-auto z-10 flex flex-col md:flex-row justify-between items-center pt-8 border-t border-obsidian-border text-xs font-mono text-titanium-muted gap-4">
        <div className="flex items-center gap-4">
          <span>FPS: 60 [STABLE]</span>
          <span>•</span>
          <span>WEBGL 2.0</span>
        </div>
        <div>
          <span>BUILT WITH NEXT.JS 14 & THREE.JS</span>
        </div>
      </footer>
    </main>
  );
}
