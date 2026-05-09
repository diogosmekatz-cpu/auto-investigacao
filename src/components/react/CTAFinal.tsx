import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CTAFinal: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
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
    <section id="checkout" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background with strong Parallax aesthetic */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=60&w=1920"
          alt="Céu aberto"
          className="w-full h-full object-cover opacity-20 object-center scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#12100E]/80 mix-blend-multiply"></div>
      </div>

      <div ref={contentRef} className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-tight text-[#F8F5F0] mb-8">
          Daqui a 30 dias, você pode estar no mesmo nível de cansaço mental... <br />
          <span className="italic text-[#D4AF37]">ou descansando no silêncio.</span>
        </h2>

        <p className="font-sans text-xl font-light text-[#F8F5F0]/80 mb-12 max-w-2xl">
          A porta está aberta. A decisão é sua. Pare de lutar contra a mente e venha reconhecer a paz absoluta que já existe dentro de você.
        </p>

        <div className="glass-panel p-8 flex flex-col items-center border-[#D4AF37]/20 w-full max-w-md shadow-2xl">
          <h3 className="font-serif text-2xl text-[#F8F5F0] mb-6 text-balance text-center">
            Dê o primeiro passo para o silêncio.
          </h3>
          <a
            href="#oferta"
            className="w-full bg-[#D4AF37] text-[#12100E] px-8 py-5 rounded-full font-bold text-xl hover:bg-[#F2C94C] transition-all hover:-translate-y-1 shadow-[0_0_30px_rgba(212,175,55,0.4)] text-center"
          >
            Ver o que está incluso
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;
