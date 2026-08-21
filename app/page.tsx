import dynamic from "next/dynamic";

// IMPORTANTE: Cargamos Three.js de forma dinámica para evitar que Next.js 
// intente renderizar el canvas en el servidor (SSR) y lance errores.
const HeroCanvas = dynamic(() => import("@/components/HeroCanvas"), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden font-sans">
      {/* CAPA 0: Canvas 3D de fondo */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <HeroCanvas />
      </div>

      {/* CAPA 1: Interfaz de Usuario (UI) */}
      <div className="relative z-10 flex flex-col min-h-screen p-6 md:p-12 lg:p-24 pointer-events-none">
        
        {/* Header / Navegación */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-16 gap-6 pointer-events-auto">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold tracking-tighter uppercase">César.</h1>
            <p className="text-xs md:text-sm text-gray-400 font-mono uppercase tracking-widest">
              // 01. SERVICIOS // 02. SHOWCASE // 03. STACK
            </p>
          </div>
          <button className="text-sm font-mono tracking-widest uppercase border-b border-transparent hover:border-cyan-400 transition-colors pb-1 text-cyan-400">
            Contacto ↗
          </button>
        </header>

        {/* Hero Section (Contenido Principal) */}
        <div className="flex-1 flex flex-col justify-center max-w-4xl pointer-events-auto">
          <div className="flex items-center gap-3 text-cyan-400 mb-6 font-mono text-sm uppercase tracking-widest">
            <span className="text-xl animate-pulse">✧</span>
            <h2>Estudio de Ingeniería Creativa</h2>
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-8 uppercase">
            Ingeniería Web <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-600">
              De Ultra Impacto.
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
            Interfaces de alta gama, experiencias 3D inmersivas y arquitectura de software bespoke diseñadas para destacar.
          </p>

          {/* Botonera con espaciado correcto (Flex Gap) */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-12">
            <button className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest overflow-hidden rounded-sm transition-transform hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                Explorar Showcase
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>

            <button className="px-8 py-4 border border-white/20 text-white font-mono uppercase tracking-widest hover:bg-white/10 transition-colors rounded-sm backdrop-blur-sm">
              &gt;_ Tech Stack
            </button>
          </div>
        </div>

        {/* Footer Técnico */}
        <div className="mt-auto pt-8 border-t border-white/10 font-mono text-xs text-gray-500 uppercase tracking-widest flex flex-col md:flex-row justify-between gap-4">
          <p>FPS: 60 [STABLE] • WEBGL 2.0</p>
          <p>BUILT WITH NEXT.JS 14 & THREE.JS</p>
        </div>
      </div>
    </main>
  );
}
