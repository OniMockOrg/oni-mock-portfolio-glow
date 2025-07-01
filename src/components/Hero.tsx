import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../hooks/use-language';
import { useMemo } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const { t } = useLanguage();

  const titles = useMemo(
    () => [
      t('hero.titles.0'),
      t('hero.titles.1'),
      t('hero.titles.2'),
      t('hero.titles.3'),
      t('hero.titles.4'),
      t('hero.titles.5'),
    ],
    [t]
  );

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const nextIndex = (currentIndex + 1) % titles.length;
    const nextTitle = titles[nextIndex];

    const getCommonPrefix = (a, b) => {
      let i = 0;
      while (i < a.length && i < b.length && a[i] === b[i]) i++;
      return a.slice(0, i);
    };

    const commonPrefix = getCommonPrefix(currentTitle, nextTitle);

    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Deleta só até o prefixo comum
        if (displayText.length > commonPrefix.length) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex(nextIndex);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, titles]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image - Tech/Crypto themed */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=2000"
          alt="Blockchain and cryptocurrency technology background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background/90"></div>
      </div>

      {/* Additional Tech Overlay */}
      <div className="absolute inset-0 z-5">
        <img
          src="https://images.pexels.com/photos/6764234/pexels-photo-6764234.jpeg?auto=format&fit=crop&w=2000&q=80"
          alt="Programming code background"
          className="w-full h-full object-cover opacity-5 mix-blend-overlay"
        />
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"
          style={{ animationDelay: '4s' }}
        ></div>
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
            {t('hero.description')}
          </p>

          <div className="flex gap-6 justify-center flex-wrap">
            <a
              href="#projects"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              {t('hero.viewProjects')}
            </a>
            <a
              href="#about"
              className="px-8 py-4 glass-card hover:bg-white/10 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              {t('hero.aboutMe')}
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
