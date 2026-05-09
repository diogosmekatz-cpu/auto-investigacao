import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SocialProof: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(scrollRef.current?.children ? Array.from(scrollRef.current.children) : [],
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
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

  const testimonials = [
    {
      name: "Rafael M.",
      before: "10 anos lendo sobre espiritualidade",
      after: "Pela primeira vez a 'mente parou'. O alívio é inexplicável.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      name: "Carolina S.",
      before: "Sofria de ansiedade e excesso de pensamentos",
      after: "Entendi que não sou a voz na minha cabeça. Isso me devolveu a vida.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      name: "João P.",
      before: "Cansado de dogmas e métodos complexos",
      after: "Um caminho direto, sem misticismo. Exatamente o que eu precisava.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      name: "Mariana T.",
      before: "Sempre sentia que faltava algo",
      after: "O vazio existencial simplesmente sumiu ao aplicar a auto investigação.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ];

  return (
    <section id="depoimentos" ref={sectionRef} className="py-24 bg-[#12100E] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <h2 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] text-[#F8F5F0]">
          Quem já reconheceu.
        </h2>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-12 px-6 md:px-[calc(50vw-36rem)] snap-x snap-mandatory hide-scrollbar"
      >
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="glass-panel p-8 min-w-[300px] md:min-w-[400px] snap-center flex-shrink-0 relative group"
          >
            <Quote size={40} className="absolute top-6 right-6 text-[#D4AF37]/10 group-hover:text-[#D4AF37]/20 transition-colors" />
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-16 h-16 rounded-full object-cover grayscale opacity-80 border border-white/10"
                loading="lazy"
              />
              <div>
                <h4 className="font-serif text-xl text-[#F8F5F0]">{testimonial.name}</h4>
                <div className="font-mono text-xs text-[#D4AF37] uppercase tracking-wider mt-1">
                  Antes: {testimonial.before}
                </div>
              </div>
            </div>
            <p className="font-sans text-lg font-light text-[#F8F5F0]/80 leading-relaxed italic">
              "{testimonial.after}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialProof;
