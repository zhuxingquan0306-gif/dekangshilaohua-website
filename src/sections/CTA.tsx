import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function CTA() {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-brand-orange overflow-hidden"
    >
      {/* Decorative Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className={`absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 transition-all duration-1000 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
          }`}
          style={{ animation: 'spin 30s linear infinite' }}
        />
        <div 
          className={`absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-white/10 transition-all duration-1000 delay-200 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
          }`}
          style={{ animation: 'spin 40s linear infinite reverse' }}
        />
        <div 
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5 transition-all duration-1000 delay-400 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
          }`}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: CTA Content */}
          <div>
            <h2 
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              准备好改变您的
              <br />
              养老空间了吗？
            </h2>
            <p 
              className={`text-white/80 text-lg mb-8 transition-all duration-800 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              联系我们的专业团队，获取免费的适老化空间设计方案和报价
            </p>
            <div 
              className={`flex flex-wrap gap-4 transition-all duration-800 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <Button 
                size="lg"
                className="bg-white text-brand-orange hover:bg-gray-100 px-8 py-6 text-base font-medium group"
              >
                立即咨询
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-orange px-8 py-6 text-base font-medium"
              >
                下载产品手册
              </Button>
            </div>
          </div>

          {/* Right: Contact Info */}
          <div 
            className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 transition-all duration-800 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <h3 className="text-xl font-bold text-white mb-6">联系我们</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white/60 text-sm mb-1">咨询热线</div>
                  <div className="text-white font-semibold text-lg">400-888-8888</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white/60 text-sm mb-1">电子邮箱</div>
                  <div className="text-white font-semibold">contact@dekang.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white/60 text-sm mb-1">公司地址</div>
                  <div className="text-white font-semibold">广东省佛山市顺德区家具产业园</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
