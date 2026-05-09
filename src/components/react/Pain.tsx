import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Pain: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          }
        }
      );

      gsap.fromTo(cardsRef.current?.children ? Array.from(cardsRef.current.children) : [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cards = [
    {
      situation: "A busca que não termina.",
      thought: "Você lê dezenas de livros, pratica dezenas de métodos, mas no fundo sente que está apenas colecionando teorias. A sensação de vazio existencial continua lá, intacta."
    },
    {
      situation: "O peso do 'ego espiritual'.",
      thought: "Você começa a se identificar com o caminho. Acredita que precisa meditar por horas ou atingir um estado iluminado inalcançável para finalmente ter paz."
    },
    {
      situation: "A mente que nunca desliga.",
      thought: "O sofrimento não vem apenas do que aconteceu, mas da repetição mental incessante. Você se sente exausto de carregar o peso de ser 'você' o tempo inteiro."
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6 relative bg-[#12100E] z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 ref={titleRef} className="text-center mb-16">
          <span className="block font-sans text-sm tracking-widest text-[#D4AF37] uppercase mb-4 text-balance">O Espelho</span>
          <span className="font-serif text-[clamp(2rem,4vw,3rem)] leading-tight text-[#F8F5F0] text-balance inline-block">
            O sofrimento não nasce da dor.<br />
            <span className="italic text-[#F8F5F0]/60">Nasce da identificação com ela.</span>
          </span>
        </h2>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="glass-panel p-8 flex flex-col gap-4 hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] font-mono text-lg mb-2">
                0{index + 1}
              </div>
              <h3 className="font-serif text-2xl text-[#F8F5F0]">{card.situation}</h3>
              <p className="font-sans font-light text-[#F8F5F0]/70 leading-relaxed">
                {card.thought}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pain;
