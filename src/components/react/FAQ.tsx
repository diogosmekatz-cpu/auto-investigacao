import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Funciona para quem não tem nenhuma experiência espiritual?",
      answer: "Sim. A auto investigação não depende de crenças prévias, rituais ou dogmas. Na verdade, ter menos teorias acumuladas pode até facilitar a percepção direta do silêncio."
    },
    {
      question: "É mais um livro sobre meditação mindfulness?",
      answer: "Não. A maioria das meditações ensina você a relaxar o personagem (o 'eu'). A auto investigação ensina você a descobrir quem é que observa o personagem, dissolvendo a raiz do sofrimento."
    },
    {
      question: "Tenho ansiedade forte. Isso vai me ajudar?",
      answer: "A ansiedade se alimenta da identificação com o pensamento. Ao perceber que você não é a voz na sua cabeça, a ansiedade perde sua força gradativamente. O livro aponta exatamente como fazer isso."
    },

    {
      question: "Qual o formato do livro?",
      answer: "É um livro digital (E-book) em formato PDF. Você receberá o acesso logo após a confirmação do pagamento e poderá ler no celular, tablet ou computador."
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#0D0B0A] border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-[#F8F5F0] mb-16 text-balance">
          As últimas objeções
        </h2>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-panel overflow-hidden transition-all duration-300 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="p-6 flex items-center justify-between">
                <h3 className="font-serif text-xl text-[#F8F5F0] pr-4">{faq.question}</h3>
                <div className="text-[#D4AF37] flex-shrink-0">
                  {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </div>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 font-sans font-light text-[#F8F5F0]/85 leading-relaxed ${openIndex === index ? 'pb-6 max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pb-0'
                  }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
