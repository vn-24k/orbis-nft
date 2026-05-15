"use client";

import React, { useState } from "react";
import { Menu, X, ArrowUpRight, Mail, Globe } from "lucide-react";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#010828] text-[#EFF4FF] min-h-screen relative overflow-x-hidden antialiased">
      
      {/* NAVBAR: REATIVADA COM LIQUID GLASS E ALINHAMENTO FLEX STRICT */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-[1831px]">
        <div className="liquid-glass flex items-center justify-between rounded-[28px] px-8 py-5 border border-white/10">
          <span className="font-grotesk text-2xl tracking-wider text-[#EFF4FF]">ORBIS.NFT</span>
          
          <nav className="hidden lg:flex items-center gap-12">
            {[
              { label: "Início", href: "#inicio" },
              { label: "Galeria", href: "#galeria" },
              { label: "Sobre", href: "#sobre" },
              { label: "Contato", href: "#contato" },
            ].map((link) => (
              <a key={link.label} href={link.href} className="font-grotesk text-[14px] uppercase tracking-widest text-[#EFF4FF] transition-all duration-300 hover:text-[#6FFF00] hover:scale-105">
                {link.label}
              </a>
            ))}
          </nav>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-[#EFF4FF] hover:text-[#6FFF00] transition-colors p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="liquid-glass mt-3 flex flex-col gap-4 rounded-[24px] p-8 lg:hidden bg-[#010828]/95 border border-white/10 backdrop-blur-md">
            {[{ label: "Início", href: "#inicio" }, { label: "Galeria", href: "#galeria" }, { label: "Sobre", href: "#sobre" }, { label: "Contato", href: "#contato" }].map((link) => (
              <a key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="font-grotesk text-lg tracking-wider text-[#EFF4FF] hover:text-[#6FFF00] transition-colors py-3 border-b border-white/5 last:border-none">
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO: ALINHAMENTO PIXEL-PERFECT E FONTES GROTESK/CONDIMENT */}
      <section id="inicio" className="relative h-screen w-full flex items-center overflow-hidden rounded-b-[32px]">
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 h-full w-full object-cover z-0">
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#010828]/90 z-10" />

        <div className="relative z-20 mx-auto w-full max-w-[1831px] px-6 md:px-12 lg:px-24 flex items-center justify-between">
          <div className="relative max-w-[850px] lg:ml-32 flex flex-col items-start gap-4">
            <h1 className="font-grotesk text-[42px] sm:text-[64px] md:text-[80px] lg:text-[95px] uppercase tracking-tighter text-[#EFF4FF] leading-[1.0] text-left">
              ALÉM DA TERRA <br />
              E DE SUAS FRONTEIRAS <br />
              ( FAMILIARES )
            </h1>
            <span className="absolute -bottom-10 right-4 md:right-16 rotate-[-2deg] font-condiment text-[32px] sm:text-[48px] md:text-[64px] text-[#6FFF00] drop-shadow-[0_4px_10px_rgba(111,255,0,0.3)]">
              Coleção Nft
            </span>
          </div>
        </div>
      </section>

      {/* SOBRE: BLOCOS ESTRUTURAIS LIMPOS */}
      <section id="sobre" className="relative min-h-screen w-full bg-[#010828] py-32 flex items-center border-t border-white/5">
        <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover opacity-10 z-0">
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 mx-auto w-full max-w-[1831px] px-6 md:px-12 lg:px-24 flex flex-col justify-between gap-24">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12">
            <div className="relative inline-block space-y-2">
              <h2 className="font-grotesk text-[52px] sm:text-[72px] md:text-[90px] lg:text-[110px] uppercase leading-[0.9] tracking-tight text-[#EFF4FF]">OLÁ!<br />EU SOU ORBIS</h2>
              <span className="absolute -bottom-6 right-0 md:right-12 rotate-[-4deg] font-condiment text-[40px] md:text-[72px] text-[#6FFF00]">Orbis</span>
            </div>
            <p className="font-mono text-sm md:text-base uppercase tracking-widest text-[#EFF4FF]/90 max-w-[380px] leading-relaxed border-l-2 border-[#6FFF00] pl-6 lg:mt-6">
              UM OBJETO DIGITAL FIXADO ALÉM DO TEMPO E DO ESPAÇO. UMA EXPLORAÇÃO DE DISTÂNCIA, FORMA E SILÊNCIO NO VAZIO.
            </p>
          </div>
        </div>
      </section>

      {/* GALERIA: GRID RESPONSIVO E CARDS LIQUID GLASS */}
      <section id="galeria" className="w-full bg-[#010828] py-32 border-t border-white/5">
        <div className="mx-auto max-w-[1831px] px-6 md:px-12 lg:px-24 space-y-16">
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#6FFF00] tracking-widest block font-bold uppercase">EXPOSIÇÃO DIGITAL</span>
            <h2 className="font-grotesk text-[40px] sm:text-[60px] md:text-[80px] text-white leading-none uppercase">COLEÇÃO ATUAL</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { src: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4", id: "#001" },
              { src: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4", id: "#002" },
              { src: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4", id: "#003" }
            ].map((item) => (
              <div key={item.id} className="liquid-glass border border-white/10 rounded-[32px] p-6 hover:border-[#6FFF00]/30 transition-all duration-500 space-y-5">
                <div className="relative w-full aspect-square rounded-[24px] overflow-hidden bg-black/40">
                  <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                    <source src={item.src} type="video/mp4" />
                  </video>
                </div>
                <div className="flex items-center justify-between text-xs px-1">
                  <div>
                    <span className="text-[#EFF4FF]/50 block font-mono">INDEXADOR</span>
                    <span className="font-grotesk text-xl text-[#EFF4FF]">ORBIS-UNIT {item.id}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[#6FFF00] block font-mono">RARIDADE</span>
                    <span className="font-grotesk text-lg text-[#EFF4FF]">9.8 / 10</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA E RODAPÉ: ESPAÇAMENTO REFEITO E LINKS OPERACIONAIS */}
      <section id="contato" className="w-full bg-[#010828] border-t border-white/5">
        <div className="relative w-full min-h-[60vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 gap-10">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-25 z-0">
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#010828] via-transparent to-[#010828] z-10" />
          <div className="relative z-20 max-w-[850px] lg:ml-32 flex flex-col items-start gap-4 text-left">
            <h2 className="font-grotesk text-[32px] sm:text-[48px] md:text-[60px] text-white leading-tight uppercase">
              <span className="text-[#6FFF00]">JUNTE-SE A NÓS.</span><br />
              <span>REVELE O OCULTO.</span><br />
              <span>DEFINA O QUE VEM A SEGUIR.</span><br />
              <span className="text-[#EFF4FF]/80">SIGA O SINAL.</span>
            </h2>
          </div>
        </div>
        <div className="w-full border-t border-white/5 py-8 bg-[#000518] px-6">
          <div className="max-w-[1831px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#EFF4FF]/50">
            <span>© 2026 ORBIS.NFT. TODOS OS DIREITOS RESERVADOS.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#6FFF00]">TERMOS</a>
              <a href="#" className="hover:text-[#6FFF00]">PRIVACIDADE</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
