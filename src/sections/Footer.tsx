import { Armchair, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    products: [
      { name: '适老化床具', href: '#' },
      { name: '适老化座椅', href: '#' },
      { name: '适老化桌台', href: '#' },
      { name: '适老化柜类', href: '#' },
      { name: '辅助设施', href: '#' }
    ],
    services: [
      { name: '空间设计', href: '#' },
      { name: '适老化改造', href: '#' },
      { name: '产品定制', href: '#' },
      { name: '安装服务', href: '#' },
      { name: '售后维护', href: '#' }
    ],
    company: [
      { name: '关于我们', href: '#' },
      { name: '工厂实力', href: '#' },
      { name: '新闻动态', href: '#' },
      { name: '加入我们', href: '#' },
      { name: '联系我们', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-brand-orange flex items-center justify-center">
                <Armchair className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-xl">德康适老</div>
                <div className="text-xs text-gray-400">DEKANG ELDERLY CARE</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              德康适老化家具是一家集设计、研发、生产、销售、服务于一体的养老家具品牌，旨在打造养老机构硬件设施综合服务商。
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-6">产品中心</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-brand-orange transition-colors underline-animation"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">服务支持</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-brand-orange transition-colors underline-animation"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-6">关于德康</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-brand-orange transition-colors underline-animation"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              © 2024 德康适老化家具. 保留所有权利.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-brand-orange transition-colors">
                隐私政策
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-orange transition-colors">
                服务条款
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-orange transition-colors">
                网站地图
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
