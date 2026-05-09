import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eye, Waves, MessageCircleQuestion } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Method: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current?.children ? Array.from(cardsRef.current.children) : [],
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const pillars = [
    {
      icon: <Eye size={32} className="text-[#D4AF37]" />,
      title: "Observação Neutra",
      description: "Você aprende a notar o pensamento surgindo e desaparecendo, sem tentar pará-lo. O silêncio não vem de fazer, mas de ver o movimento do 'eu'."
    },
    {
      icon: <MessageCircleQuestion size={32} className="text-[#D4AF37]" />,
      title: "A Pergunta Certa",
      description: "A auto investigação direta: 'Para quem esse pensamento apareceu?' e 'Quem sou eu?'. Uma âncora que destrói a identificação quase instantaneamente."
    },
    {
      icon: <Waves size={32} className="text-[#D4AF37]" />,
      title: "Descanso no Silêncio",
      description: "Como permanecer na presença pura, percebendo que a consciência não precisa ser criada — ela já existe antes da mente ficar agitada."
    }
  ];

  return (
    <section id="metodo" ref={sectionRef} className="py-32 px-6 relative bg-[#12100E]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl aspect-square bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] leading-tight text-[#F8F5F0] text-balance inline-block">
            Por que esse caminho funciona<br />
            <span className="italic text-[#D4AF37]">quando outros falharam?</span>
          </h2>
          <p className="mt-6 font-sans text-xl font-light text-[#F8F5F0]/70 max-w-2xl mx-auto text-balance">
            Porque nós não tentamos consertar o personagem. Nós descobrimos quem está observando o personagem.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="glass-panel p-10 flex flex-col items-center text-center hover:-translate-y-3 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(212,175,55,0.05)] border-white/5"
            >
              <div className="w-20 h-20 rounded-2xl bg-[#12100E] border border-[#D4AF37]/20 flex items-center justify-center mb-8 shadow-inner shadow-[#D4AF37]/10">
                {pillar.icon}
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#F8F5F0] mb-4">{pillar.title}</h3>
              <p className="font-sans font-light text-[#F8F5F0]/70 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;
