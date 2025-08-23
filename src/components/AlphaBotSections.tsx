import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../hooks/use-language';
import { Bot, Bell, Shield } from 'lucide-react';

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
  gradientTo
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
        rootMargin: '0px 0px -50px 0px'
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
    <div
      ref={sectionRef}
      className="py-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className={`flex flex-col ${imagePosition === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}>
          <ImageComponent
            imageAnimationClass={imageAnimationClass}
            icon={icon}
            gradientFrom={gradientFrom}
            gradientTo={gradientTo}
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
}

const ImageComponent: React.FC<ImageComponentProps> = ({ imageAnimationClass, icon, gradientFrom, gradientTo }) => (
  <div
    className={`flex-1 flex justify-center items-center transform transition-all duration-700 ease-out will-change-transform ${imageAnimationClass}`}
  >
    <div className={`relative w-80 h-80 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-3xl flex items-center justify-center shadow-2xl border border-white/10 backdrop-blur-sm`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
      <div className="relative text-white text-7xl drop-shadow-lg">{icon}</div>
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

const TextComponent: React.FC<TextComponentProps> = ({ textAnimationClass, titleKey, descriptionKey, feature1Key, feature2Key, feature3Key }) => {
  const { t } = useLanguage();
  return (
    <div
      className={`flex-1 space-y-8 transform transition-all duration-700 ease-out delay-200 will-change-transform ${textAnimationClass}`}
    >
      <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent leading-tight">
        {t(titleKey)}
      </h3>
      <p className="text-xl text-gray-300 leading-relaxed">
        {t(descriptionKey)}
      </p>
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
          <p className="text-lg text-gray-300">{t(feature1Key)}</p>
        </div>
        <div className="flex items-start space-x-4">
          <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
          <p className="text-lg text-gray-300">{t(feature2Key)}</p>
        </div>
        <div className="flex items-start space-x-4">
          <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
          <p className="text-lg text-gray-300">{t(feature3Key)}</p>
        </div>
      </div>
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      
      <div className="relative">
        {sections.map((section, index) => (
          <div key={section.id}>
            <Section {...section} />
            {index < sections.length - 1 && (
              <div className="flex justify-center py-8">
                <div className="w-px h-16 bg-gradient-to-b from-purple-500/50 via-purple-400/30 to-transparent"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AlphaBotSections;