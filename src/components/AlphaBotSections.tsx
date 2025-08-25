import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../hooks/use-language';
import AnimatedButton from './ui/animated-button';
import { Bot, Bell, Shield, Sparkles, Rocket, Star } from 'lucide-react';
import { SiDiscord } from 'react-icons/si';

interface SectionProps {
  id: string;
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
  feature1Key: string;
  feature2Key: string;
  feature3Key: string;
  imagePosition: 'left' | 'right';
  gradientFrom: string;
  gradientTo: string;
  showButton?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  icon,
  titleKey,
  descriptionKey,
  feature1Key,
  feature2Key,
  feature3Key,
  imagePosition,
  gradientFrom,
  gradientTo,
}) => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  const imageAnimationClass = isVisible
    ? 'translate-x-0 opacity-100 scale-100'
    : imagePosition === 'left'
    ? '-translate-x-full opacity-0 scale-95'
    : 'translate-x-full opacity-0 scale-95';

  const textAnimationClass = isVisible
    ? 'translate-x-0 opacity-100 scale-100'
    : imagePosition === 'left'
    ? 'translate-x-full opacity-0 scale-95'
    : '-translate-x-full opacity-0 scale-95';

  return (
    <div ref={sectionRef} className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          className={`flex flex-col ${
            imagePosition === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
          } gap-16 items-center`}
        >
          <ImageComponent
            imageAnimationClass={imageAnimationClass}
            icon={icon}
            gradientFrom={gradientFrom}
            gradientTo={gradientTo}
            isFirstSection={id === 'automation'}
            isSecondSection={id === 'notifications'}
          />
          <TextComponent
            textAnimationClass={textAnimationClass}
            titleKey={titleKey}
            descriptionKey={descriptionKey}
            feature1Key={feature1Key}
            feature2Key={feature2Key}
            feature3Key={feature3Key}
          />
        </div>
      </div>
    </div>
  );
};

interface ImageComponentProps {
  imageAnimationClass: string;
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
  isFirstSection?: boolean;
  isSecondSection?: boolean;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  imageAnimationClass,
  icon,
  gradientFrom,
  gradientTo,
  isFirstSection = false,
  isSecondSection = false,
}) => (
  <div
    className={`flex-1 flex justify-center items-center transform transition-all duration-700 ease-out will-change-transform ${imageAnimationClass}`}
  >
    <div className="relative group">
      {/* Enhanced Glow Effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-cyan-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-75 group-hover:opacity-100"></div>

      {/* Discord Emoji - For first and second sections */}
      {(isFirstSection || isSecondSection) && (
        <div className="absolute -top-6 -left-6 z-20 transform group-hover:scale-110 transition-all duration-500">
          <div className="relative">
            <div className="absolute inset-0 bg-[#5865F2] rounded-full blur-lg opacity-60 animate-pulse"></div>
            <div className="relative bg-[#5865F2] text-white text-lg w-12 h-12 rounded-full flex items-center justify-center shadow-2xl border-2 border-white/30 backdrop-blur-sm hover:shadow-[#5865F2]/50 transition-all duration-300">
              <SiDiscord className="w-6 h-6" />
            </div>
          </div>
        </div>
      )}

      {/* Glass Container */}
      <div
        className={`relative w-80 h-80 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-3xl flex items-center justify-center shadow-2xl border border-white/20 backdrop-blur-xl group-hover:shadow-purple-500/25 transition-all duration-500 group-hover:scale-105 overflow-hidden`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>

        {isFirstSection ? (
          <img
            src="/alphabot_01.jpg"
            alt="AlphaBot"
            className="w-full h-full object-cover rounded-3xl group-hover:scale-110 transition-transform duration-500"
          />
        ) : isSecondSection ? (
          <img
            src="/alphabot_02.jpg"
            alt="AlphaBot 2"
            className="w-full h-full object-cover rounded-3xl group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="relative text-white text-7xl drop-shadow-lg group-hover:scale-110 transition-transform duration-500">
            {icon}
          </div>
        )}

        {/* Floating Elements */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-white/20 to-white/10 rounded-full p-2 shadow-lg backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-white animate-pulse" />
        </div>
      </div>
    </div>
  </div>
);

interface TextComponentProps {
  textAnimationClass: string;
  titleKey: string;
  descriptionKey: string;
  feature1Key: string;
  feature2Key: string;
  feature3Key: string;
}

const TextComponent: React.FC<TextComponentProps> = ({
  textAnimationClass,
  titleKey,
  descriptionKey,
  feature1Key,
  feature2Key,
  feature3Key,
}) => {
  const { t } = useLanguage();
  return (
    <div
      className={`flex-1 space-y-8 transform transition-all duration-700 ease-out delay-200 will-change-transform ${textAnimationClass}`}
    >
      <h3 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
        {t(titleKey)}
      </h3>
      <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
        {t(descriptionKey)}
      </p>
      <div className="space-y-6">
        <div className="flex items-start space-x-4 group">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-2 shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <p className="text-lg text-gray-300 group-hover:text-gray-200 transition-colors">
            {t(feature1Key)}
          </p>
        </div>
        <div className="flex items-start space-x-4 group">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-2 shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <p className="text-lg text-gray-300 group-hover:text-gray-200 transition-colors">
            {t(feature2Key)}
          </p>
        </div>
        <div className="flex items-start space-x-4 group">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-2 shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <p className="text-lg text-gray-300 group-hover:text-gray-200 transition-colors">
            {t(feature3Key)}
          </p>
        </div>
      </div>

      {/* Enhanced CTA Button - Only show for management section */}
      {titleKey === 'alphabot.sections.management.title' && (
        <div className="mt-12">
          <AnimatedButton
            variant="gradient"
            size="md"
            leftIcon={Rocket}
            rightIcon={Star}
            className="font-bold"
          >
            {t('alphabot.sections.learnMore')}
          </AnimatedButton>
        </div>
      )}
    </div>
  );
};

const AlphaBotSections: React.FC = () => {
  const sections: SectionProps[] = [
    {
      id: 'automation',
      icon: <Bot />,
      titleKey: 'alphabot.sections.automation.title',
      descriptionKey: 'alphabot.sections.automation.description',
      feature1Key: 'alphabot.sections.automation.feature1',
      feature2Key: 'alphabot.sections.automation.feature2',
      feature3Key: 'alphabot.sections.automation.feature3',
      imagePosition: 'left',
      gradientFrom: 'from-purple-600',
      gradientTo: 'to-pink-600',
    },
    {
      id: 'notifications',
      icon: <Bell />,
      titleKey: 'alphabot.sections.notifications.title',
      descriptionKey: 'alphabot.sections.notifications.description',
      feature1Key: 'alphabot.sections.notifications.feature1',
      feature2Key: 'alphabot.sections.notifications.feature2',
      feature3Key: 'alphabot.sections.notifications.feature3',
      imagePosition: 'right',
      gradientFrom: 'from-blue-600',
      gradientTo: 'to-cyan-600',
    },
    {
      id: 'management',
      icon: <Shield />,
      titleKey: 'alphabot.sections.management.title',
      descriptionKey: 'alphabot.sections.management.description',
      feature1Key: 'alphabot.sections.management.feature1',
      feature2Key: 'alphabot.sections.management.feature2',
      feature3Key: 'alphabot.sections.management.feature3',
      imagePosition: 'left',
      gradientFrom: 'from-green-600',
      gradientTo: 'to-emerald-600',
    },
  ];

  return (
    <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden py-8">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1500"></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2500"></div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>

      <div className="relative z-10">
        {sections.map((section, index) => (
          <div key={section.id}>
            <Section {...section} />
            {index < sections.length - 1 && (
              <div className="flex justify-center py-8">
                <div className="flex flex-col items-center">
                  <div className="w-px h-16 bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-transparent"></div>
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg animate-pulse"></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AlphaBotSections;
