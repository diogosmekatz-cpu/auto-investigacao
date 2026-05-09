import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const DetailedPromise: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(elementsRef.current?.children ? Array.from(elementsRef.current.children) : [],
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const transformations = [
    {
      before: "Acreditar que cada pensamento ansioso é uma verdade absoluta.",
      after: "Você vai conseguir observar a mente sem se envolver, descobrindo um espaço de silêncio natural entre os pensamentos."
    },
    {
      before: "Lutar constantemente contra o seu 'personagem' e tentar ser perfeito.",
      after: "Você vai compreender que o 'eu' é apenas um pensamento. O cansaço de provar seu valor simplesmente desaparece."
    },
    {
      before: "Esperar por um despertar místico no futuro.",
      after: "Você vai reconhecer que a paz que você tanto procura já existe exatamente onde você está agora."
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6 relative bg-[#12100E] border-t border-white/5">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="text-center md:text-left">
          <h2 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.1] text-[#F8F5F0] mb-6 text-balance">
            O que acontece quando o <span className="text-[#D4AF37] italic">"eu"</span> desaparece?
          </h2>
          <p className="font-sans font-light text-lg text-[#F8F5F0]/85 mb-8 text-balance mx-auto md:mx-0">
            Este livro não promete superpoderes ou estados místicos. Ele entrega a única coisa que realmente importa: a liberdade de parar de sofrer pela própria mente.
          </p>
        </div>

        <div ref={elementsRef} className="flex flex-col gap-8">
          {transformations.map((item, index) => (
            <div key={index} className="flex flex-col gap-3">
              <div className="font-mono text-sm text-[#F8F5F0]/70 uppercase tracking-wider">
                De: {item.before}
              </div>
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0 text-[#D4AF37]">
                  <ArrowRight size={24} />
                </div>
                <div className="font-sans text-xl font-light text-[#F8F5F0]">
                  {item.after}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedPromise;
