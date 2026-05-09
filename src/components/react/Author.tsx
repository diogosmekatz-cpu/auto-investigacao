import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Author: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imageRef.current,
        { scale: 1.05, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          }
        }
      );

      gsap.fromTo(textRef.current?.children ? Array.from(textRef.current.children) : [],
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
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

  return (
    <section id="sobre" ref={sectionRef} className="py-32 px-6 bg-[#0D0B0A] relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        <div ref={imageRef} className="w-full md:w-[40%] relative">
          <div className="aspect-[3/4] rounded-3xl overflow-hidden grayscale relative">
            <div className="absolute inset-0 bg-[#D4AF37]/10 mix-blend-multiply z-10"></div>
            <img 
              src="/emerson.jpg" 
              alt="Emerson Rodrigues" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div ref={textRef} className="w-full md:w-[60%] flex flex-col gap-6 items-center md:items-start text-center md:text-left">
          <h2 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] text-[#F8F5F0] text-balance">
            Quem é Emerson Rodrigues?
          </h2>
          <div className="h-px w-24 bg-[#D4AF37] mb-4"></div>
          
          <div className="font-sans font-light text-[#F8F5F0]/80 text-lg leading-relaxed flex flex-col gap-6">
            <p>
              "Perdi meu pai aos 3 anos. Na adolescência, perdi minha mãe. Desde pequeno, algo dentro de mim perguntava: Quem sou eu?"
            </p>
            <p>
              Passei anos buscando respostas na espiritualidade, no silêncio e nas dores. Muitas madrugadas foram marcadas por ataques espirituais, projeções e fenômenos que ninguém conseguia explicar. A busca se tornou um cansaço constante.
            </p>
            <p>
              Até que, em meio ao vazio existencial profundo, percebi algo absurdamente simples: o despertar espiritual não é conquistar nada novo. <strong>É reconhecer aquilo que sempre esteve aqui.</strong>
            </p>
            <p>
              Neste livro, não ensino técnicas mágicas. Apenas aponto o caminho que destrói a identificação com o sofrimento para que você descubra, por experiência própria, o silêncio que resta quando o "eu" desaparece.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;
