
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 OniMock. Desenvolvido com ❤️ e muito café.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
