
import { MapPin, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="w-full max-w-[1440px] mx-auto min-h-[clamp(680px,78vh,820px)] lg:grid lg:grid-cols-[minmax(280px,0.9fr)_minmax(520px,1.4fr)_minmax(320px,0.9fr)] relative text-[#111]">
      
      {/* LEFT COLUMN */}
      <div className="z-10 lg:self-center lg:pt-[160px] max-w-full lg:max-w-[420px] px-[22px] lg:px-0 lg:pl-[clamp(24px,4vw,64px)] mt-6 lg:mt-0">
        <div className="flex items-center gap-4 mb-4 lg:mb-0 lg:absolute lg:top-[90px]">
          <div className="h-[1px] w-8 lg:w-12 bg-gray-400"></div>
          <span className="text-[13px] lg:text-[15px] tracking-[0.18em] font-medium text-gray-500 uppercase">Industrial Engineering Graduate</span>
        </div>
        
        <div className="mt-4 lg:mt-[210px] space-y-6">
          <div>
            <p className="text-[13px] lg:text-[15px] font-bold tracking-[0.12em] mb-2 uppercase">SUPPLY CHAIN • OPERATIONS • DATA ANALYTICS</p>
            <p className="text-[14px] lg:text-[16px] text-gray-600">Industrial Engineering Graduate | FMCG | Process Improvement</p>
          </div>

          <div className="pt-4 lg:pt-8">
            <h3 className="text-[14px] font-bold tracking-[0.12em] mb-3 uppercase">About</h3>
            <p className="text-[15px] lg:text-[17px] text-gray-600 leading-relaxed">
              Industrial Engineering graduate with hands-on experience in process improvement, compliance, project control, and supply chain operations.
            </p>
          </div>

          <blockquote className="border-l-[3px] border-black pl-4 py-1 italic text-gray-800 text-[16px] lg:text-[18px]">
            "Driven to optimize systems, improve workflows, and create sustainable business impact."
          </blockquote>
        </div>
      </div>

      {/* MIDDLE STAGE (ABSOLUTE LAYERING) */}
      <div className="relative z-0 h-[430px] md:h-[520px] lg:h-[560px] min-w-0 overflow-visible mt-6 lg:mt-0">
        <img 
          src="/assets/font hero.png" 
          alt="Abednego Typography" 
          className="absolute z-10 w-[760px] md:w-[clamp(700px,120vw,980px)] lg:w-[clamp(900px,76vw,1280px)] max-w-none left-1/2 top-[30%] lg:top-[42%] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-95 lg:opacity-100 object-contain"
        />
        <img 
          src="/assets/Design front hero.png" 
          alt="Abednego Lanang Wicaksono" 
          className="absolute z-20 h-[390px] md:h-[clamp(430px,62vw,560px)] lg:h-[clamp(520px,58vw,680px)] w-auto left-1/2 bottom-[0px] lg:-bottom-[38px] -translate-x-1/2 object-contain drop-shadow-[0_24px_32px_rgba(0,0,0,0.18)]"
        />
      </div>

      {/* RIGHT COLUMN */}
      <div className="z-20 lg:self-center lg:pt-[180px] px-[22px] lg:px-0 lg:pr-[clamp(24px,4vw,64px)] pb-12 lg:pb-0 flex flex-col items-center lg:items-end mt-8 lg:mt-0">
        <div className="flex items-center gap-2 mb-8 lg:absolute lg:top-[90px] lg:right-[clamp(24px,4vw,64px)] text-gray-600 text-[14px] lg:text-[15px]">
          <MapPin size={18} className="text-[#111]" />
          <span>Tangerang Selatan, Indonesia</span>
        </div>

        <div className="w-full max-w-[520px] lg:w-[min(100%,360px)] border border-black/10 rounded-[16px] bg-white/80 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-5">
          <h4 className="text-[13px] font-bold tracking-[0.12em] mb-4 uppercase">FMCG Experience</h4>
          <div className="relative h-36 lg:h-40 w-full mb-4 rounded-xl overflow-hidden bg-gray-100">
            <img 
              src="/assets/pic1.jpeg" 
              alt="Unilever Experience" 
              className="object-cover w-full h-full"
            />
          </div>
          <h5 className="font-bold text-[16px] mb-1">PT Unilever Tbk</h5>
          <p className="text-[13px] text-brand-blue font-semibold tracking-wide mb-2 uppercase">FMCG Industry Exposure</p>
          <p className="text-[14px] text-gray-600 leading-relaxed mb-4">
            Contributed to process improvement, data analysis, and operational excellence in a fast-paced FMCG environment.
          </p>
          <a href="#experience" className="text-[13px] font-bold flex items-center gap-1.5 hover:text-brand-blue transition-colors">
            View More <ArrowRight size={14} />
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;