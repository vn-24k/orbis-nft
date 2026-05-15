import React, { useState } from "react";
import { Menu, X, ArrowUpRight, Mail, Globe } from "lucide-react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#010828] text-[#EFF4FF] min-h-screen font-mono antialiased relative selection:bg-[#6FFF00] selection:text-[#010828]">
      
      {/* NAVBAR */}
      <header className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-[1200px]">
        <div className="bg-[#010828]/80 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-3.5 flex items-center justify-between">
          <span className="font-sans font-black tracking-wider text-sm text-white">ORBIS.NFT</span>
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#EFF4FF] hover:text-[#6FFF00] transition-colors">
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {isOpen && (
          <div className="bg-[#010828]/95 backdrop-blur-lg border border-white/10 rounded-2xl p-4 mt-2 flex flex-col gap-3">
            <a href="#inicio" onClick={() => setIsOpen(false)} className="text-sm font-bold py-2 border-b border-white/5 text-white">INÍCIO</a>
            <a href="#sobre" onClick={() => setIsOpen(false)} className="text-sm font-bold py-2 border-b border-white/5 text-white">SOBRE</a>
            <a href="#galeria" onClick={() => setIsOpen(false)} className="text-sm font-bold py-2 border-b border-white/5 text-white">GALERIA</a>
            <a href="#contato" onClick={() => setIsOpen(false)} className="text-sm font-bold text-white">CONTATO</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="inicio" className="relative h-screen w-full flex flex-col justify-end overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#010828]/10 via-[#010828]/50 to-[#010828] z-10" />

        <div className="relative z-20 p-6 pb-16 w-full max-w-[600px] mx-auto space-y-4">
          <div className="inline-block bg-[#6FFF00]/10 border border-[#6FFF00]/30 rounded-full px-3 py-1">
            <span className="text-[10px] text-[#6FFF00] font-bold tracking-widest">COLEÇÃO EXCLUSIVA</span>
          </div>
          <h1 className="font-sans font-black text-3xl uppercase tracking-tighter leading-none text-white">
            ALÉM DA TERRA E DE SUAS FRONTEIRAS
          </h1>
          <p className="text-xs text-[#EFF4FF]/70 leading-relaxed font-mono">
            Exploração de silêncio, formas geométricas estruturadas e avatares espaciais no vazio criptográfico.
          </p>
          <div className="pt-2 flex gap-3">
            <a href="#galeria" className="flex-1 text-center font-sans font-black text-xs bg-[#6FFF00] text-[#010828] py-4 rounded-xl tracking-wider block">
              VER GALERIA
            </a>
            <a href="#sobre" className="flex-1 text-center font-sans font-bold text-xs bg-white/5 border border-white/10 text-white py-4 rounded-xl tracking-wider block">
              CONCEITO
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="w-full bg-[#010828] px-6 py-24 relative border-t border-white/5">
        <div className="max-w-[600px] mx-auto space-y-6">
          <span className="text-[10px] text-[#6FFF00] tracking-widest block font-bold">01 / IDENTIDADE</span>
          <h2 className="font-sans font-black text-4xl uppercase text-white leading-none">OLÁ!<br />EU SOU ORBIS</h2>
          <p className="text-sm text-[#EFF4FF] border-l-2 border-[#6FFF00] pl-4 py-1 leading-relaxed">
            Um objeto digital fixado além do tempo e do espaço. Uma exploração estética aplicada à engenharia de software.
          </p>
          <div className="space-y-4 pt-4 text-xs text-[#EFF4FF]/50 leading-relaxed border-t border-white/5">
            <p>• Dentro do horizonte de eventos nenhuma estrutura permanece idêntica. A matriz digital reorganiza a forma.</p>
            <p>• Produção coordenada sob regras específicas de engenharia com alta fidelidade visual.</p>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="w-full bg-[#010828] px-6 py-16 border-t border-white/5">
        <div className="max-w-[600px] mx-auto space-y-8">
          <div className="space-y-1">
            <span className="text-[10px] text-[#6FFF00] tracking-widest block font-bold">02 / EXPOSIÇÃO</span>
            <h2 className="font-sans font-black text-3xl uppercase text-white">OBJETOS ESPACIAIS</h2>
          </div>
          <div className="space-y-6">
            {[
              { src: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4", id: "#001", raridade: "9.8" },
              { src: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4", id: "#002", raridade: "9.4" },
              { src: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4", id: "#003", raridade: "8.9" }
            ].map((item) => (
              <div key={item.id} className="bg-white/[0.02] border border-white/10 rounded-2xl p-4 space-y-3">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-black/40">
                  <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                    <source src={item.src} type="video/mp4" />
                  </video>
                </div>
                <div className="flex items-center justify-between pt-1 text-xs px-1">
                  <div>
                    <span className="text-[#EFF4FF]/40 block text-[10px]">CÓDIGO</span>
                    <span className="font-bold text-white">ORBIS-UNIT {item.id}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[#6FFF00] block text-[10px]">RARIDADE</span>
                    <span className="font-bold text-white">{item.raridade} / 10</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA E RODAPÉ */}
      <section id="contato" className="w-full bg-[#010828] border-t border-white/5">
        <div className="relative w-full min-h-[60vh] flex flex-col justify-center px-6 py-20">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-25 z-0">
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#010828] via-transparent to-[#010828] z-10" />
          <div className="relative z-20 max-w-[600px] mx-auto w-full space-y-6">
            <span className="text-[10px] text-[#6FFF00] tracking-widest block font-bold">03 / COMUNIDADE</span>
            <h2 className="font-sans font-black text-3xl text-white leading-tight uppercase">
              JUNTE-SE A NÓS.<br />REVELE O OCULTO.<br />SIGA O SINAL.
            </h2>
            <div className="flex flex-col gap-2 pt-2">
              <a href="#" className="w-full bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 flex items-center justify-between text-xs tracking-wider text-white">
                <span className="flex items-center gap-3"><Mail size={16} /> ENTRAR DISCORD</span>
                <ArrowUpRight size={14} />
              </a>
              <a href="#" className="w-full bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 flex items-center justify-between text-xs tracking-wider text-white">
                <span className="flex items-center gap-3"><Globe size={16} /> SEGUIR TWITTER</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-white/5 py-8 bg-[#000518] px-6">
          <div className="max-w-[600px] mx-auto flex flex-col gap-3 text-[10px] text-[#EFF4FF]/40 tracking-wider">
            <span>© 2026 ORBIS.NFT. TODOS OS DIREITOS RESERVADOS.</span>
            <div className="flex gap-4 font-bold">
              <a href="#" className="hover:text-[#6FFF00] text-[#EFF4FF]/60">TERMOS</a>
              <a href="#" className="hover:text-[#6FFF00] text-[#EFF4FF]/60">PRIVACIDADE</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
