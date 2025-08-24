import {
  Code,
  Coffee,
  Lightbulb,
  Rocket,
  Brain,
  Star,
  MapPin,
  Calendar,
  Heart,
  Zap,
  Smartphone,
  Database,
  Server,
  Cloud,
  Package,
  GitBranch,
} from 'lucide-react';
import { useLanguage } from '../hooks/use-language';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { AnimatedButton } from './ui/animated-button';

const About = () => {
  const { t } = useLanguage();

  const skills = [
    {
      name: 'JavaScript/TypeScript',
      icon: Code,
      color: 'from-yellow-400 to-orange-500',
      percentage: 85,
    },
    {
      name: 'Java/Kotlin',
      icon: Code,
      color: 'from-red-500 to-orange-600',
      percentage: 95,
    },
    {
      name: 'Android Studio',
      icon: Smartphone,
      color: 'from-green-500 to-emerald-600',
      percentage: 90,
    },
    {
      name: 'React/Next.js',
      icon: Zap,
      color: 'from-blue-400 to-cyan-500',
      percentage: 80,
    },
    {
      name: 'Node.js',
      icon: Server,
      color: 'from-green-400 to-emerald-500',
      percentage: 85,
    },
    {
      name: 'Python',
      icon: Code,
      color: 'from-green-500 to-teal-600',
      percentage: 75,
    },
    {
      name: 'Git/GitHub',
      icon: GitBranch,
      color: 'from-red-400 to-pink-500',
      percentage: 90,
    },
    {
      name: 'AWS/Cloud',
      icon: Cloud,
      color: 'from-orange-400 to-red-500',
      percentage: 65,
    },
    {
      name: 'Docker',
      icon: Package,
      color: 'from-blue-600 to-purple-600',
      percentage: 70,
    },
    {
      name: 'MongoDB/SQL',
      icon: Database,
      color: 'from-green-600 to-teal-700',
      percentage: 80,
    },
  ];

  const interests = [
    {
      icon: Code,
      title: t('about.interests.cleancode.title'),
      desc: t('about.interests.cleancode.desc'),
    },
    {
      icon: Lightbulb,
      title: t('about.interests.innovation.title'),
      desc: t('about.interests.innovation.desc'),
    },
    {
      icon: Rocket,
      title: t('about.interests.performance.title'),
      desc: t('about.interests.performance.desc'),
    },
    {
      icon: Coffee,
      title: t('about.interests.opensource.title'),
      desc: t('about.interests.opensource.desc'),
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 relative overflow-hidden border-b border-purple-800/30"
    >
      {/* Subtle gradient overlay for section distinction */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-purple-900/10 pointer-events-none" />
      {/* Code Matrix Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: '30px 30px',
            animation: 'grid-move 20s linear infinite',
          }}
        ></div>
      </div>

      {/* Floating Code Symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['<', '>', '{', '}', '(', ')', '[', ']', ';', '='].map((symbol, i) => (
          <div
            key={i}
            className="absolute text-emerald-400/20 text-2xl font-mono"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${6 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      {/* Gradient Orbs - Developer Theme */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/5 w-96 h-96 bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-gradient-to-br from-cyan-500/25 to-blue-500/25 rounded-full mix-blend-multiply filter blur-3xl opacity-35 animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute top-2/3 left-2/3 w-64 h-64 bg-gradient-to-br from-teal-500/20 to-green-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      {/* Binary Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-emerald-400/10 text-xs font-mono leading-tight"
            style={{
              left: `${10 + i * 12}%`,
              top: '-10%',
              animation: `fall ${8 + Math.random() * 4}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            {Array.from({ length: 20 }, () =>
              Math.random() > 0.5 ? '1' : '0'
            ).join('\n')}
          </div>
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
                {t('about.title')}
              </span>
            </h2>
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-2xl rounded-full opacity-50"></div>
          </div>
        </div>
        {/* Hero Profile Section */}
        <div className="flex justify-center mb-20">
          <div className="relative w-full max-w-5xl">
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-pink-500/20 blur-3xl rounded-3xl"></div>

            <div className="relative glass-card p-8 md:p-12 shadow-2xl bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Avatar Section */}
                <div className="flex-shrink-0 relative">
                  <div className="relative group">
                    {/* Animated Ring */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full opacity-75 group-hover:opacity-100 animate-spin-slow blur-sm"></div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 rounded-full opacity-50 group-hover:opacity-75 animate-pulse"></div>

                    <Avatar className="h-48 w-48 md:h-56 md:w-56 rounded-full border-4 border-white/20 group-hover:scale-105 transition-all duration-500 bg-white/10 relative z-10 shadow-2xl">
                      <AvatarImage
                        src="https://github.com/OniMock.png"
                        alt="OniMock GitHub Avatar"
                        className="object-cover h-full w-full rounded-full"
                      />
                      <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-purple-500 to-cyan-500 text-white">
                        OM
                      </AvatarFallback>
                    </Avatar>

                    {/* Floating Icons */}
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 text-center lg:text-left space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
                      OniMock
                    </h3>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                      {t('about.subtitle')}
                    </p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm text-gray-400">
                          {t('about.stats.location')}
                        </span>
                      </div>
                      <p className="text-white font-medium">
                        {t('about.stats.country')}
                      </p>
                    </div>

                    <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-gray-400">
                          {t('about.stats.experience')}
                        </span>
                      </div>
                      <p className="text-white font-medium">
                        {t('about.stats.years', { years: '3+' })}
                      </p>
                    </div>

                    <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 col-span-2 md:col-span-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm text-gray-400">
                          {t('about.stats.focus')}
                        </span>
                      </div>
                      <p className="text-white font-medium">
                        {t('about.stats.fullstack')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* My Journey Title */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t('about.journey')}
            </span>
          </h3>
        </div>

        {/* Journey and Technologies Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Journey Section */}
          <div className="flex flex-col justify-between animate-slide-in-left">
            {/* First text aligned with top of technologies card */}
            <div className="relative group mb-8">
              <div className="absolute -left-4 top-3 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
              <div className="glass-card p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <p className="text-gray-300 leading-relaxed text-lg">
                  {t('about.journey.p1')}
                </p>
              </div>
            </div>

            {/* Decorative Robot Element */}
            <div className="flex justify-center my-12">
              <div className="relative group w-full max-w-xs">
                <div className="w-full h-32 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl flex items-center justify-center relative overflow-hidden opacity-60 hover:opacity-80 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-purple-600/5 animate-pulse"></div>
                  <Rocket className="w-16 h-16 text-cyan-400/70 relative z-10 animate-bounce" />
                  <div className="absolute top-4 right-4 w-3 h-3 bg-green-400/50 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 bg-purple-400/20 rounded-full animate-pulse"></div>
                  <div
                    className="absolute top-1/2 left-4 w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse"
                    style={{ animationDelay: '1s' }}
                  ></div>
                  <div
                    className="absolute top-6 left-1/2 w-2 h-2 bg-pink-400/25 rounded-full animate-pulse"
                    style={{ animationDelay: '2s' }}
                  ></div>
                  <div
                    className="absolute bottom-6 right-6 w-1.5 h-1.5 bg-yellow-400/30 rounded-full animate-ping"
                    style={{ animationDelay: '1.5s' }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Second text aligned with bottom of technologies card */}
            <div className="relative group">
              <div className="absolute -left-4 top-3 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
              <div className="glass-card p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <p className="text-gray-300 leading-relaxed text-lg">
                  {t('about.journey.p2')}
                </p>
              </div>
            </div>
          </div>

          {/* Technologies Section */}
          <div className="relative animate-slide-in-right h-full">
            {/* Background Tech Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>
              <div className="grid grid-cols-6 gap-2 p-4">
                {Array.from({ length: 36 }, (_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-30"
                    style={{
                      animation: `pulse ${
                        2 + Math.random() * 3
                      }s ease-in-out infinite`,
                      animationDelay: `${Math.random() * 2}s`,
                    }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="relative glass-card p-8 bg-white/5 border border-white/10 rounded-3xl hover:scale-[1.02] transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {t('about.technologies')}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skills.map((skill, index) => {
                    const Icon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className="relative group/skill overflow-hidden rounded-xl h-full"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-20 group-hover/skill:opacity-30 transition-opacity duration-300 rounded-xl`}
                        ></div>

                        <div className="relative bg-white/5 border border-white/10 px-4 py-4 rounded-xl text-sm font-medium text-white hover:bg-white/10 transition-all duration-300 group-hover/skill:scale-105 group-hover/skill:shadow-lg h-full flex flex-col">
                          <div className="flex items-center gap-3 mb-3">
                            <Icon className="w-5 h-5 text-white flex-shrink-0" />
                            <span className="flex-1 text-left break-words min-w-0 overflow-hidden">
                              {skill.name}
                            </span>
                            <span className="text-xs text-white/70 flex-shrink-0">
                              {skill.percentage}%
                            </span>
                          </div>
                          <div className="w-full bg-white/20 rounded-full h-2 mt-auto">
                            <div
                              className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-500 group-hover/skill:shadow-lg`}
                              style={{ width: `${skill.percentage}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Floating Tech Icons */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-bounce opacity-60">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-pulse opacity-60">
                  <Star className="w-3 h-3 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 auto-rows-fr">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            const gradients = [
              {
                gradient: 'from-blue-500 to-cyan-500',
                hoverGradient: 'from-blue-400 to-cyan-400',
              },
              {
                gradient: 'from-purple-500 to-pink-500',
                hoverGradient: 'from-purple-400 to-pink-400',
              },
              {
                gradient: 'from-green-500 to-emerald-500',
                hoverGradient: 'from-green-400 to-emerald-400',
              },
              {
                gradient: 'from-orange-500 to-red-500',
                hoverGradient: 'from-orange-400 to-red-400',
              },
            ];
            return (
              <div key={interest.title} className="group relative">
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${gradients[index].gradient} rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200`}
                ></div>
                <div
                  className="relative glass-card p-8 group-hover:scale-[1.01] transition-all duration-500 hover:shadow-xl backdrop-blur-none h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`relative w-20 h-20 bg-gradient-to-r ${gradients[index].gradient} rounded-full flex items-center justify-center mb-6 group-hover:rotate-3 transition-transform duration-500`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${gradients[index].hoverGradient} rounded-full blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                    ></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-indigo-200 transition-colors duration-300 backdrop-blur-none">
                    {interest.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-400 transition-colors duration-300 backdrop-blur-none">
                    {interest.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <AnimatedButton
            variant="gradient"
            size="lg"
            leftIcon={Brain}
            rightIcon={Star}
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            {t('about.cta')}
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default About;
