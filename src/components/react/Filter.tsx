import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Filter: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".filter-col",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const paraQuem = [
    "Se você tem uma sensação constante de que falta algo, mesmo quando tudo parece bem.",
    "Se você já tentou meditar, mas sentiu que a sua mente nunca desliga.",
    "Se você quer uma espiritualidade real, sem egos, dogmas ou gurus dizendo o que vestir.",
    "Se você quer sentir paz agora, e não como uma promessa distante."
  ];

  const naoEParaQuem = [
    "Se você busca superpoderes espirituais, magia ou projeção astral.",
    "Se você quer usar a espiritualidade para alimentar seu ego e se sentir superior aos outros.",
    "Se você não está disposto a observar seus próprios pensamentos com honestidade.",
    "Se você quer uma técnica rápida para manifestar dinheiro ou coisas materiais."
  ];

  return (
    <section id="para-quem" ref={sectionRef} className="py-32 px-6 relative bg-[#0D0B0A] border-y border-white/5">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center font-serif text-[clamp(2rem,4vw,3rem)] text-[#F8F5F0] mb-20 text-balance">
          A verdade não serve para todos.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div className="filter-col flex flex-col gap-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6 text-center md:text-left">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mx-auto md:mx-0">
                <Check size={24} />
              </div>
              <h3 className="font-serif text-3xl text-[#F8F5F0] text-balance">Este livro é para você se...</h3>
            </div>
            {paraQuem.map((item, index) => (
              <div key={index} className="flex gap-4">
                <Check size={20} className="text-[#D4AF37] flex-shrink-0 mt-1" />
                <p className="font-sans font-light text-[#F8F5F0]/80 text-lg leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="filter-col flex flex-col gap-6 opacity-70">
             <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/40">
                <X size={24} />
              </div>
              <h3 className="font-serif text-3xl text-[#F8F5F0]/60">Não é para você se...</h3>
            </div>
            {naoEParaQuem.map((item, index) => (
              <div key={index} className="flex gap-4">
                <X size={20} className="text-white/40 flex-shrink-0 mt-1" />
                <p className="font-sans font-light text-[#F8F5F0]/60 text-lg leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
