import { memo } from 'react';
import { ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="h-[86px] flex items-center justify-between px-[clamp(24px,4vw,64px)] border-b border-black/10">
      <div className="flex items-center gap-4 shrink-0">
        <div className="font-serif text-3xl font-medium tracking-tight text-[#111]">AW</div>
        <div className="flex flex-col text-[10px] tracking-[0.18em] font-medium text-gray-600 uppercase leading-tight">
          <span>Abednego</span>
          <span>Lanang Wicaksono</span>
        </div>
      </div>
      
      <div className="hidden lg:flex items-center gap-8 text-sm font-medium whitespace-nowrap">
        <a href="#home" className="relative text-[#111] after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-black">Home</a>
        <a href="#about" className="text-gray-500 hover:text-black transition-colors">About</a>
        <a href="#experience" className="text-gray-500 hover:text-black transition-colors">Experience</a>
        <a href="#skills" className="text-gray-500 hover:text-black transition-colors">Skills</a>
        <a href="#contact" className="text-gray-500 hover:text-black transition-colors">Contact</a>
      </div>

      <button 
        className="flex items-center gap-2 bg-[#111] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors shrink-0"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Navigate to contact section"
      >
        Let's Connect
        <ArrowUpRight size={16} />
      </button>
    </nav>
  );
};

export default memo(Navbar);