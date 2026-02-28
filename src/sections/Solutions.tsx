import { useEffect, useRef, useState } from 'react';
import { Bed, UtensilsCrossed, Sofa, Stethoscope } from 'lucide-react';

interface SolutionCardProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  image: string;
  features: string[];
  isVisible: boolean;
  delay: number;
  isActive: boolean;
  onClick: () => void;
}

function SolutionCard({ 
  icon: Icon, 
  title, 
  subtitle, 
  image, 
  features,
  isVisible, 
  delay, 
  isActive,
  onClick 
}: SolutionCardProps) {
  return (
    <div
      className={`relative cursor-pointer transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${isActive ? 'flex-[3]' : 'flex-1'}`}
      style={{ transitionDelay: `${delay}ms` }}
      onClick={onClick}
    >
      <div 
        className={`relative h-[500px] rounded-2xl overflow-hidden transition-all duration-500 ${
          isActive ? 'shadow-2xl' : 'shadow-lg'
        }`}
      >
        {/* Background Image */}
        <img
          src={image}
          alt={title}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
            isActive ? 'scale-105' : 'scale-100'
          }`}
        />
        
        {/* Overlay */}
        <div 
          className={`absolute inset-0 transition-all duration-500 ${
            isActive 
              ? 'bg-gradient-to-t from-black/80 via-black/40 to-transparent' 
              : 'bg-black/60'
          }`} 
        />

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          {/* Icon */}
          <div 
            className={`w-12 h-12 rounded-xl bg-brand-orange flex items-center justify-center mb-4 transition-all duration-500 ${
              isActive ? 'scale-100' : 'scale-90'
            }`}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <p className="text-sm text-white/70 mb-4">{subtitle}</p>

          {/* Features - Only show when active */}
          <div 
            className={`space-y-2 transition-all duration-500 ${
              isActive ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
            }`}
          >
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                <span className="text-sm text-white/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Solutions() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  const solutions = [
    {
      icon: Bed,
      title: '卧室空间',
      subtitle: '安全舒适的休息环境',
      image: './scene-bedroom.jpg',
      features: [
        '护理床/自理床配置',
        '床头柜与衣柜',
        '紧急呼叫系统',
        '无障碍通道设计'
      ]
    },
    {
      icon: UtensilsCrossed,
      title: '餐厅空间',
      subtitle: '温馨愉悦的就餐体验',
      image: './scene-dining.jpg',
      features: [
        '适老化餐桌椅',
        '无障碍通道',
        '防滑地面处理',
        '充足的自然采光'
      ]
    },
    {
      icon: Sofa,
      title: '活动空间',
      subtitle: '丰富多彩的社交场所',
      image: './scene-lounge.jpg',
      features: [
        '舒适沙发座椅',
        '活动桌椅组合',
        '扶手护栏配置',
        '休闲娱乐设施'
      ]
    },
    {
      icon: Stethoscope,
      title: '护理空间',
      subtitle: '专业便捷的护理环境',
      image: '/about-room-1.jpg',
      features: [
        '多功能护理床',
        '医疗辅助设备',
        '无障碍卫生间',
        '康复训练设施'
      ]
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
            空间解决方案
          </span>
          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 transition-all duration-800 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            全方位<span className="text-brand-orange">适老化</span>空间配置
          </h2>
          <p 
            className={`text-gray-600 text-lg transition-all duration-800 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            从卧室到餐厅，从活动区到护理区，我们为养老机构提供完整的空间解决方案
          </p>
        </div>

        {/* Solutions Accordion */}
        <div className="flex gap-4">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              subtitle={solution.subtitle}
              image={solution.image}
              features={solution.features}
              isVisible={isVisible}
              delay={300 + index * 100}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
