import { useEffect, useRef, useState } from 'react';
import { Armchair, Package, Home, Handshake } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  isVisible: boolean;
  delay: number;
}

function ServiceCard({ icon: Icon, title, description, isVisible, delay }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative group cursor-pointer transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-500 ${
          isHovered ? 'shadow-2xl scale-[1.02]' : ''
        }`}
      >
        {/* Background gradient on hover */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`} 
        />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div 
            className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${
              isHovered ? 'bg-brand-orange' : 'bg-brand-orange/10'
            }`}
          >
            <Icon 
              className={`w-8 h-8 transition-colors duration-500 ${
                isHovered ? 'text-white' : 'text-brand-orange'
              }`} 
            />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>

          {/* Description */}
          <p 
            className={`text-gray-600 leading-relaxed transition-all duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-80'
            }`}
          >
            {description}
          </p>

          {/* Learn more link */}
          <div 
            className={`mt-6 flex items-center text-brand-orange font-medium transition-all duration-500 ${
              isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
          >
            了解更多
            <svg 
              className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
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

  const services = [
    {
      icon: Armchair,
      title: '适老化家具',
      description: '专业设计生产的适老化床、椅、桌、柜等家具，采用圆角设计、防滑材质，为长者打造安全舒适的居住环境。'
    },
    {
      icon: Package,
      title: '适老化产品',
      description: '提供全方位的适老化辅助产品，包括扶手、护栏、无障碍设施等，满足长者日常生活的各种需求。'
    },
    {
      icon: Home,
      title: '适老化改造',
      description: '专业团队提供居家和机构的适老化改造服务，从空间规划到产品配置，打造安全便利的适老环境。'
    },
    {
      icon: Handshake,
      title: '养老运营服务',
      description: '为养老机构提供从规划设计到运营管理的全流程服务支持，助力打造高品质的养老服务品牌。'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className={`inline-block text-sm font-semibold text-brand-orange uppercase tracking-wider mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            我们的服务
          </span>
          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 transition-all duration-800 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            一站式<span className="text-brand-orange">适老化</span>解决方案
          </h2>
          <p 
            className={`text-gray-600 text-lg transition-all duration-800 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            从设计到生产，从改造到运营，我们为养老机构提供全方位的服务支持
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              isVisible={isVisible}
              delay={300 + index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}