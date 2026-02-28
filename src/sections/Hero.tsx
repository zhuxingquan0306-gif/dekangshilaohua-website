import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className={`absolute right-0 top-0 h-full w-full lg:w-[55%] transition-all duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? 'scale-100 blur-0' : 'scale-110 blur-[10px]'
          }`}
        >
          <img
            src="./hero-living-room.jpg"
            alt="适老化家居环境"
            className="h-full w-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:from-white lg:via-white/60 lg:to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container-custom w-full">
          <div className="max-w-2xl">
            {/* Tag */}
            <div 
              className={`mb-6 inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-4 py-2 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="h-2 w-2 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-sm font-medium text-brand-orange">适老化专家</span>
            </div>

            {/* Title */}
            <h1 
              className={`mb-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              为长者打造
              <br />
              <span className="text-brand-orange">安全舒适</span>的空间
            </h1>

            {/* Description */}
            <p 
              className={`mb-8 text-lg leading-relaxed text-gray-600 transition-all duration-800 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              德康适老化家居将建筑精准与有机温暖完美融合，为养老机构和长者居所设计兼具安全性与优雅气质的家具。
            </p>

            {/* Buttons */}
            <div 
              className={`flex flex-wrap gap-4 transition-all duration-800 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <Button 
                size="lg" 
                className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 text-base font-medium group"
              >
                探索系列
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-gray-300 hover:border-brand-orange hover:text-brand-orange px-8 py-6 text-base font-medium group"
              >
                <Play className="mr-2 h-5 w-5" />
                观看影片
              </Button>
            </div>

            {/* Stats mini */}
            <div 
              className={`mt-12 flex gap-8 transition-all duration-800 delay-900 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div>
                <div className="text-3xl font-bold text-brand-orange">100+</div>
                <div className="text-sm text-gray-500">合作养老机构</div>
              </div>
              <div className="h-12 w-px bg-gray-200" />
              <div>
                <div className="text-3xl font-bold text-brand-orange">5000+</div>
                <div className="text-sm text-gray-500">适老化产品</div>
              </div>
              <div className="h-12 w-px bg-gray-200" />
              <div>
                <div className="text-3xl font-bold text-brand-orange">20+</div>
                <div className="text-sm text-gray-500">年行业经验</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
