import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Leaf, Shield } from 'lucide-react';

export default function About() {
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

  const features = [
    {
      icon: Shield,
      title: '安全保障',
      description: '圆角设计、防滑材质，每一个细节都为长者安全考虑'
    },
    {
      icon: Leaf,
      title: '环保材质',
      description: 'A级木材，环保油漆，符合国家环保标准'
    },
    {
      icon: Award,
      title: '品质认证',
      description: '70+项专利产品，行业权威认证'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-white overflow-hidden"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Images */}
          <div className="relative">
            {/* Main Image */}
            <div 
              className={`relative z-10 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              <div className="img-hover-zoom rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="./about-room-1.jpg"
                  alt="适老化客厅"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
            
            {/* Secondary Image */}
            <div 
              className={`absolute -bottom-8 -right-8 w-2/3 z-20 transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
            >
              <div className="img-hover-zoom rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="./about-room-2.jpg"
                  alt="适老化家具"
                  className="w-full h-[250px] object-cover"
                />
              </div>
            </div>

            {/* Decorative element */}
            <div 
              className={`absolute -top-4 -left-4 w-24 h-24 bg-brand-orange/10 rounded-full z-0 transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`} 
            />
            <div 
              className={`absolute top-1/2 -right-12 w-16 h-16 bg-brand-orange/20 rounded-full z-0 transition-all duration-1000 delay-700 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`} 
            />
          </div>

          {/* Right: Content */}
          <div>
            {/* Tag */}
            <div 
              className={`mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="text-sm font-semibold text-brand-orange uppercase tracking-wider">
                关于我们
              </span>
            </div>

            {/* Title */}
            <h2 
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-800 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              以精准与关怀
              <br />
              打造<span className="text-brand-orange">适老空间</span>
            </h2>

            {/* Description */}
            <p 
              className={`text-gray-600 text-lg leading-relaxed mb-8 transition-all duration-800 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              德康适老化家具是一家集设计、研发、生产、销售、服务于一体的养老家具品牌。我们将建筑美学与适老化功能相结合，为养老机构提供从设计到落地的全流程服务。每一件家具都经过人体工程学验证，确保长者的安全与舒适。
            </p>

            {/* Features */}
            <div 
              className={`space-y-4 mb-8 transition-all duration-800 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-brand-orange/5 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-orange/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div 
              className={`transition-all duration-800 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <Button 
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 text-base font-medium group"
              >
                了解更多
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
