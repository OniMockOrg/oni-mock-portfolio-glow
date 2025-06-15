
import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    'Desenvolvedor Full Stack',
    'Entusiasta de Tecnologia',
    'Criador de Soluções',
    'Problem Solver',
    'Code Enthusiast'
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const speed = isDeleting ? 50 : 100;
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, titles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80"
          alt="Technology background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background/90"></div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center z-20 relative">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-gradient">OniMock</span>
          </h1>
          
          <div className="h-20 flex items-center justify-center mb-8">
            <span className="text-2xl md:text-3xl font-light text-gray-300">
              {displayText}
              <span className="animate-pulse text-blue-400">|</span>
            </span>
          </div>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Transformando ideias em código, criando experiências digitais incríveis 
            e soluções inovadoras que fazem a diferença.
          </p>
          
          <div className="flex gap-6 justify-center flex-wrap">
            <a
              href="#projects"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Ver Projetos
            </a>
            <a
              href="#about"
              className="px-8 py-4 glass-card hover:bg-white/10 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Sobre Mim
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
