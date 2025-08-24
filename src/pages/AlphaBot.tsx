import React, { useEffect } from 'react';
import { useLanguage } from '../hooks/use-language';
import Navigation from '../components/Navigation';
import AlphaBotSections from '../components/AlphaBotSections';
import AnimatedButton from '../components/ui/animated-button';
import {
  ArrowRight,
  Zap,
  Shield,
  BarChart3,
  Sparkles,
  Rocket,
  Brain,
} from 'lucide-react';

export const AlphaBot = () => {
  const { t } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-1000"></div>
      </div>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/20 rounded-full px-8 py-3 mb-8 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 group">
              <div className="relative">
                <Sparkles className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <div className="absolute inset-0 bg-purple-400/50 rounded-full blur-sm animate-pulse"></div>
              </div>
              <span className="text-purple-200 text-sm font-medium tracking-wide">
                {t('alphabot.hero.subtitle')}
              </span>
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
            </div>

            {/* Enhanced Title */}
            <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent leading-tight tracking-tight">
              <span className="inline-block transition-transform duration-300">
                {t('alphabot.hero.title')}
              </span>
            </h1>

            {/* Enhanced Description */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
              {t('alphabot.hero.description')}
            </p>

            {/* Enhanced CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AnimatedButton
                variant="gradient"
                size="lg"
                leftIcon={Rocket}
                rightIcon={ArrowRight}
                onClick={() =>
                  window.open(import.meta.env.VITE_ALPHABOT_SAAS_URL, '_blank')
                }
                className="font-bold"
              >
                {t('alphabot.hero.cta')}
              </AnimatedButton>

              <AnimatedButton
                variant="outline"
                size="lg"
                leftIcon={Brain}
              >
                {t('alphabot.hero.demo')}
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              {t('alphabot.features.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('alphabot.features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 - Enhanced */}
            <div className="group relative bg-gradient-to-br from-white/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-gradient-to-br hover:from-white/15 hover:via-purple-500/15 hover:to-pink-500/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-110">
                  <Zap className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-purple-200 transition-colors">
                  {t('alphabot.features.automation.title')}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors">
                  {t('alphabot.features.automation.description')}
                </p>
              </div>
            </div>

            {/* Feature 2 - Enhanced */}
            <div className="group relative bg-gradient-to-br from-white/10 via-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-gradient-to-br hover:from-white/15 hover:via-blue-500/15 hover:to-cyan-500/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110">
                  <Shield className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-blue-200 transition-colors">
                  {t('alphabot.features.security.title')}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors">
                  {t('alphabot.features.security.description')}
                </p>
              </div>
            </div>

            {/* Feature 3 - Enhanced */}
            <div className="group relative bg-gradient-to-br from-white/10 via-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-gradient-to-br hover:from-white/15 hover:via-green-500/15 hover:to-emerald-500/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-green-500/50 transition-all duration-300 group-hover:scale-110">
                  <BarChart3 className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-green-200 transition-colors">
                  {t('alphabot.features.reports.title')}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors">
                  {t('alphabot.features.reports.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informational Sections */}
      <AlphaBotSections />

      {/* Enhanced Footer */}
      <footer className="relative py-12 px-6 border-t border-white/10 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              <Sparkles className="w-6 h-6 text-purple-400" />
              AlphaBot
            </div>
          </div>
          <p className="text-gray-400 text-lg">
            {t('footer.text', { year: new Date().getFullYear() })}
          </p>
        </div>
      </footer>
    </div>
  );
};
