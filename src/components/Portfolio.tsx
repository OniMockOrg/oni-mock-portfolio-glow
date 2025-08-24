import { useEffect } from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';
import { useLanguage } from '../hooks/use-language';

const Portfolio = () => {
  const { t } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            {t('footer.text', { year: new Date().getFullYear() })}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
