import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080706] pt-20 pb-10 px-6 rounded-t-[4rem] relative z-20 -mt-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="text-2xl font-serif font-bold tracking-wide text-[#F8F5F0] mb-8">
          AUTO<span className="text-[#D4AF37]">INVESTIGAÇÃO</span>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-12 mb-12 font-sans font-light text-sm text-[#F8F5F0]/80">
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Contato</a>
        </div>

        <div className="max-w-3xl text-center font-mono text-[10px] md:text-xs text-[#F8F5F0]/70 leading-relaxed mb-8">
          Aviso Legal: Os resultados alcançados através da auto investigação variam de pessoa para pessoa. Este livro não substitui tratamentos médicos ou psicológicos. O conteúdo reflete experiências individuais e um caminho de libertação da mente.
        </div>

        <div className="font-sans font-light text-[#F8F5F0]/70 text-sm">
          &copy; {new Date().getFullYear()} Emerson Rodrigues. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
