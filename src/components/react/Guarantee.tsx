import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Guarantee: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="garantia" ref={sectionRef} className="py-24 px-6 bg-[#12100E]">
      <div className="max-w-4xl mx-auto glass-panel p-10 md:p-16 flex flex-col md:flex-row items-center gap-10 border-[#D4AF37]/20">
        <div className="flex-shrink-0 w-32 h-32 rounded-full border-2 border-[#D4AF37]/30 flex items-center justify-center bg-[#D4AF37]/5 text-[#D4AF37]">
          <ShieldCheck size={64} strokeWidth={1} />
        </div>
        
        <div>
          <h2 className="font-serif text-3xl md:text-4xl text-[#F8F5F0] mb-4">
            Risco absolutamente zero.
          </h2>
          <p className="font-sans font-light text-[#F8F5F0]/70 text-lg leading-relaxed mb-6">
            Se você ler os primeiros capítulos e não sentir clareza na auto investigação, ou se achar que é apenas mais um livro espiritual cheio de teorias, basta solicitar o reembolso em até 7 dias.
          </p>
          <p className="font-mono text-sm text-[#D4AF37] uppercase tracking-wider">
            Sem perguntas, sem ressentimentos, sem formulários chatos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
