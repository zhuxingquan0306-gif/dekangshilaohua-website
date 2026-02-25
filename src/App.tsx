import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Stats from './sections/Stats';
import Services from './sections/Services';
import Products from './sections/Products';
import Solutions from './sections/Solutions';
import Factory from './sections/Factory';
import Testimonials from './sections/Testimonials';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="hero">
          <Hero />
        </section>
        
        {/* About Section */}
        <section id="about">
          <About />
        </section>
        
        {/* Stats Section */}
        <Stats />
        
        {/* Services Section */}
        <Services />
        
        {/* Products Section */}
        <section id="products">
          <Products />
        </section>
        
        {/* Solutions Section */}
        <section id="solutions">
          <Solutions />
        </section>
        
        {/* Factory Section */}
        <section id="factory">
          <Factory />
        </section>
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* CTA Section */}
        <section id="cta">
          <CTA />
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Noise Overlay */}
      <div className="noise-overlay" />
    </div>
  );
}

export default App;
