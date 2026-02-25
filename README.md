# 德康适老化家居公司官网

<p align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-blue.svg" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5.0.0-blue.svg" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind%20CSS-3.4.0-38B2AC.svg" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Vite-5.0.0-646CFF.svg" alt="Vite">
</p>

## 项目简介

德康适老化家居公司官网是一个专业的养老家具品牌展示网站，采用 React + TypeScript + Tailwind CSS + Vite 技术栈开发。网站展示了德康适老化家具的产品、服务、工厂实力和企业形象。

**在线预览**: https://vgybkjrnderf2.ok.kimi.link

## 项目结构

```
dekangshilaohua-website/
├── public/                     # 静态资源
│   ├── hero-living-room.jpg   # Hero 区域背景图
│   ├── about-room-1.jpg       # 关于我们图片1
│   ├── about-room-2.jpg       # 关于我们图片2
│   ├── factory-1.jpg          # 工厂图片1
│   ├── factory-2.jpg          # 工厂图片2
│   ├── product-chair.png      # 产品图-椅子
│   ├── product-sofa.png       # 产品图-沙发
│   ├── product-table.png      # 产品图-茶几
│   ├── product-bed.png        # 产品图-护理床
│   ├── scene-bedroom.jpg      # 场景图-卧室
│   ├── scene-dining.jpg       # 场景图-餐厅
│   └── scene-lounge.jpg       # 场景图-活动室
├── src/
│   ├── sections/              # 页面区块组件
│   │   ├── Navigation.tsx     # 导航栏
│   │   ├── Hero.tsx           # 主视觉区
│   │   ├── About.tsx          # 关于我们
│   │   ├── Stats.tsx          # 数据统计
│   │   ├── Services.tsx       # 服务板块
│   │   ├── Products.tsx       # 产品展示
│   │   ├── Solutions.tsx      # 解决方案
│   │   ├── Factory.tsx        # 工厂实力
│   │   ├── Testimonials.tsx   # 客户评价
│   │   ├── CTA.tsx            # 行动号召
│   │   └── Footer.tsx         # 页脚
│   ├── components/ui/         # UI 组件 (shadcn/ui)
│   ├── hooks/                 # 自定义 Hooks
│   ├── lib/                   # 工具函数
│   ├── App.tsx                # 主应用组件
│   ├── main.tsx               # 入口文件
│   └── index.css              # 全局样式
├── index.html                 # HTML 模板
├── package.json               # 项目依赖
├── tsconfig.json              # TypeScript 配置
├── vite.config.ts             # Vite 配置
├── tailwind.config.js         # Tailwind CSS 配置
└── README.md                  # 项目说明
```

## 功能特性

- **响应式设计**: 完美适配桌面端和移动端
- **动画效果**: 滚动触发动画、数字计数动画、卡片悬停效果
- **模块化组件**: 基于 React 组件化开发，易于维护
- **现代化样式**: 使用 Tailwind CSS 实现现代化 UI 设计
- **品牌色彩**: 以温暖的橙色为主色调，传递关怀与专业

## 页面模块

1. **Hero 主视觉区** - 品牌理念展示
2. **关于我们** - 公司介绍与核心优势
3. **数据统计** - 企业核心数据展示
4. **服务板块** - 四大核心服务介绍
5. **产品展示** - 精选适老化家具产品
6. **空间解决方案** - 四大空间配置方案
7. **工厂实力** - 生产基地与荣誉认证
8. **客户评价** - 合作客户真实反馈
9. **CTA 行动号召** - 联系咨询引导
10. **页脚** - 完整导航与版权信息

## 技术栈

- **前端框架**: React 18
- **开发语言**: TypeScript
- **样式工具**: Tailwind CSS
- **构建工具**: Vite
- **UI 组件库**: shadcn/ui
- **图标库**: Lucide React

## 本地开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 部署

构建完成后，`dist` 文件夹中的内容可直接部署到任何静态网站托管服务。

## 关于德康适老

德康适老化家具是一家集设计、研发、生产、销售、服务于一体的养老家具品牌，旨在打造养老机构硬件设施综合服务商。产业已经覆盖了适老化家具、适老化产品、适老化改造、养老运营服务等领域，为100+养老机构提供过适老空间整体解决方案。

---

<p align="center">
  由 <a href="https://github.com/zhuxingquan0306-gif">zhuxingquan0306-gif</a> 开发维护
</p>
