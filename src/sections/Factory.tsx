import { useEffect, useRef, useState } from 'react';
import { Check, FactoryIcon, Cog, Award } from 'lucide-react';

export default function Factory() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: FactoryIcon,
      title: '上万平米',
      subtitle: '现代化生产基地'
    },
    {
      icon: Cog,
      title: '欧洲设备',
      subtitle: '先进生产流水线'
    },
    {
      icon: Award,
      title: '70+项',
      subtitle: '专利技术产品'
    }
  ];

  const certifications = [
    '中国生命关怀协会医养融合机构联盟理事单位',
    '中国智能家居行业最具竞争力十大诚信品牌',
    'ISO9001质量管理体系认证',
    '国家环保标准认证'
  ];

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-gray-900 text-white overflow-hidden"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <span 
              className={`inline-block text-sm font-semibold text-brand-orange uppercase tracking-wider mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              工厂实力
            </span>
            <h2 
              className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight transition-all duration-800 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              现代化生产
              <br />
              <span className="text-brand-orange">智造品质</span>
            </h2>
            <p 
              className={`text-gray-400 text-lg leading-relaxed mb-8 transition-all duration-800 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              公司拥有上万平米的现代化生产基地，引进欧洲先进生产流水线设备，从原材料到成品，每一道工序都严格把控，确保产品品质。
            </p>

            {/* Highlights */}
            <div 
              className={`grid grid-cols-3 gap-6 mb-8 transition-all duration-800 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {highlights.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-brand-orange/20 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-7 h-7 text-brand-orange" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{item.title}</div>
                  <div className="text-xs text-gray-400">{item.subtitle}</div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div 
              className={`transition-all duration-800 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                荣誉认证
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-brand-orange" />
                    </div>
                    <span className="text-sm text-gray-300">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Images */}
          <div className="relative">
            {/* Main Image */}
            <div 
              className={`relative z-10 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="./factory-1.jpg"
                  alt="现代化工厂"
                  className="w-full h-[350px] object-cover"
                />
              </div>
            </div>
            
            {/* Secondary Image */}
            <div 
              className={`absolute -bottom-8 -left-8 w-2/3 z-20 transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-900">
                <img
                  src="/factory-2.jpg"
                  alt="智能生产线"
                  className="w-full h-[200px] object-cover"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div 
              className={`absolute -top-4 -right-4 w-24 h-24 bg-brand-orange/20 rounded-full z-0 transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`} 
            />
            <div 
              className={`absolute bottom-1/4 -right-8 w-16 h-16 bg-brand-orange/30 rounded-full z-0 transition-all duration-1000 delay-800 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
