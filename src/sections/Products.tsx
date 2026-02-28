import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
}

export default function Products() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

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

  const products: Product[] = [
    {
      id: 1,
      name: '适老化餐椅',
      category: '座椅系列',
      image: '/product-chair.png',
      description: '人体工程学设计，圆角处理，舒适安全'
    },
    {
      id: 2,
      name: '适老化沙发',
      category: '沙发系列',
      image: './product-sofa.png',
      description: '加高靠背，扶手支撑，便于起身'
    },
    {
      id: 3,
      name: '适老化茶几',
      category: '桌台系列',
      image: '/product-table.png',
      description: '圆角设计，高度适中，方便轮椅使用'
    },
    {
      id: 4,
      name: '多功能护理床',
      category: '床具系列',
      image: './product-bed.png',
      description: '电动升降，护栏保护，医用级品质'
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-gray-50 overflow-hidden"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span 
              className={`inline-block text-sm font-semibold text-brand-orange uppercase tracking-wider mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              产品展示
            </span>
            <h2 
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 transition-all duration-800 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              精选<span className="text-brand-orange">适老化</span>家具
            </h2>
          </div>
          <p 
            className={`text-gray-600 max-w-md mt-4 md:mt-0 transition-all duration-800 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            融合安全功能与现代美学的设计，为长者打造舒适优雅的居住空间
          </p>
        </div>

        {/* Products Carousel */}
        <div 
          ref={carouselRef}
          className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  index === activeIndex ? 'scale-105 z-10' : 'scale-100'
                }`}
              >
                {/* Image */}
                <div className="relative h-64 bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-brand-orange/10 rounded-full">
                    <span className="text-xs font-medium text-brand-orange">{product.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                  <button className="flex items-center text-brand-orange font-medium text-sm group/btn">
                    查看详情
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* View All Button */}
        <div 
          className={`text-center mt-12 transition-all duration-800 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-8 py-6 text-base font-medium"
          >
            查看全部产品
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
