import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(bgRef.current, 
        { scale: 1.1, autoAlpha: 0 }, 
        { scale: 1, autoAlpha: 1, duration: 2, ease: "power2.out" }
      );

      gsap.fromTo([headlineRef.current, subheadRef.current, ctaRef.current],
        { y: 40, autoAlpha: 0 },
        { 
          y: 0, 
          autoAlpha: 1, 
          duration: 1.2, 
          stagger: 0.2, 
          ease: "power3.out",
          delay: 0.5 
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image & Gradient */}
      <div ref={bgRef} className="opacity-0 absolute inset-0 z-0" style={{ opacity: 0, visibility: 'hidden' }}>
        <img 
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=60&w=1920" 
          alt="Céu aberto e silêncio" 
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12100E] via-[#12100E]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col items-center justify-center">
        <div className="max-w-4xl text-center flex flex-col items-center mt-12 md:mt-0">
          <h1 ref={headlineRef} className="opacity-0 flex flex-col gap-4 w-full" style={{ opacity: 0, visibility: 'hidden' }}>
            <span className="font-sans font-bold text-sm md:text-lg tracking-[0.2em] uppercase text-[#D4AF37]">
              O guia para a sua iluminação espiritual
            </span>
            <span className="font-serif text-[clamp(2.5rem,8vw,5.5rem)] leading-[1.1] font-semibold text-[#F8F5F0] text-balance mx-auto">
              O despertar não é conquistar,
              <br />
              <span className="italic font-light text-[#D4AF37]">é reconhecer.</span>
            </span>
          </h1>
          
          <p ref={subheadRef} className="opacity-0 mt-8 text-lg md:text-2xl text-[#F8F5F0]/80 font-sans font-light leading-relaxed max-w-2xl mx-auto text-balance" style={{ opacity: 0, visibility: 'hidden' }}>
            Descubra quem você é antes do pensamento. Pare de lutar contra a mente e encontre a paz absoluta que sempre esteve no silêncio interior.
          </p>

          <div ref={ctaRef} className="opacity-0 mt-12 flex flex-col items-center gap-6 w-full" style={{ opacity: 0, visibility: 'hidden' }}>
            <a 
              href="#oferta" 
              className="bg-[#D4AF37] text-[#12100E] px-10 py-5 rounded-full font-bold text-xl hover:bg-[#F2C94C] transition-all hover:-translate-y-1 shadow-[0_0_40px_rgba(212,175,55,0.4)] inline-flex items-center justify-center gap-2 w-full md:w-auto"
            >
              Quero iniciar minha auto investigação
            </a>
            <div className="font-mono text-sm text-[#F8F5F0]/60 flex items-center justify-center gap-2">
              <span className="flex items-center text-[#D4AF37] text-lg">
                ★★★★★
              </span>
              Leitura transformadora.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
