import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, Headphones, Infinity } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Inventory: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardRef.current,
        { scale: 0.95, opacity: 0, y: 30 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="oferta" ref={sectionRef} className="py-24 px-6 bg-[#12100E] relative">
      <div className="max-w-4xl mx-auto">
        <div ref={cardRef} className="glass-panel p-8 md:p-12 relative overflow-hidden">
          {/* Decorative blur */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="flex flex-col justify-center">
              <h3 className="font-sans text-sm tracking-widest text-[#D4AF37] uppercase mb-4">O que você recebe imediatamente</h3>
              <h2 className="font-serif text-3xl md:text-4xl text-[#F8F5F0] mb-6">
                Livro Digital: Auto Investigação
              </h2>
              <p className="font-sans font-light text-[#F8F5F0]/70 text-lg mb-8 leading-relaxed">
                Um guia prático e direto para destruir a identificação com a mente e reconhecer a paz absoluta do silêncio. Sem misticismo, sem dogmas.
              </p>
              
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <BookOpen size={18} className="text-[#D4AF37]" />
                  </div>
                  <span className="font-sans text-[#F8F5F0]">10 Capítulos de Leitura Profunda</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <Headphones size={18} className="text-[#D4AF37]" />
                  </div>
                  <span className="font-sans text-[#F8F5F0]">Meditações Práticas Guiadas em Texto</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <Infinity size={18} className="text-[#D4AF37]" />
                  </div>
                  <span className="font-sans text-[#F8F5F0]">Acesso Vitalício ao Material</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center justify-center bg-[#0D0B0A]/50 rounded-2xl p-8 border border-white/5">
               <div className="text-center w-full">
                  <div className="font-sans text-[#F8F5F0]/40 line-through text-lg mb-1">De R$ 97,00 por apenas</div>
                  <div className="font-serif text-5xl md:text-6xl text-[#D4AF37] mb-2">R$ 27,00</div>
                  <div className="font-sans text-[#F8F5F0]/60 text-sm mb-8">Pagamento único e seguro</div>

                  <a 
                    href="https://wa.me/5549991143539?text=Emerson%2C%20quero%20adquirir%20a%20minha%20c%C3%B3pia%20do%20Livro%20Auto%20Investiga%C3%A7%C3%A3o" 
                    className="block w-full bg-[#D4AF37] text-[#12100E] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#F2C94C] transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                  >
                    Garantir meu acesso agora
                  </a>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inventory;
