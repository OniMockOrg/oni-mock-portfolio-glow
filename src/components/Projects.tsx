import { useState, useEffect } from 'react';
import {
  ExternalLink,
  Star,
  GitFork,
  Github,
  Rocket,
  Code,
  Zap,
} from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { useLanguage } from '../hooks/use-language';
import { AnimatedButton } from './ui/animated-button';

const projectQuantity = 6;

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  languages_url: string;
}

const Projects = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/OniMock/repos?sort=updated&per_page=16'
        );
        const data = await response.json();
        const filtered = data
          .filter((repo: Repository) => !repo.name.includes('OniMock'))
          .slice(0, projectQuantity);

        const updatedRepos = await Promise.all(
          filtered.map(async (repo: Repository) => {
            if (repo.language === null && repo.languages_url) {
              try {
                const langRes = await fetch(repo.languages_url);
                const langs = await langRes.json();
                const mainLang =
                  Object.entries(langs).sort(
                    (a, b) => Number(b[1]) - Number(a[1])
                  )[0]?.[0] || null;
                return { ...repo, language: mainLang };
              } catch {
                return repo;
              }
            }
            return repo;
          })
        );
        setRepos(updatedRepos);
      } catch (error) {
        console.error(t('projects.error'), error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [t]);

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      JavaScript: 'bg-yellow-500',
      TypeScript: 'bg-blue-500',
      Python: 'bg-green-500',
      Java: 'bg-orange-500',
      Shell: 'bg-pink-400',
      HTML: 'bg-red-500',
      CSS: 'bg-purple-500',
      React: 'bg-cyan-500',
      Vue: 'bg-emerald-500',
      Angular: 'bg-red-600',
    };
    return colors[language] || 'bg-gray-500';
  };

  if (loading) {
    return (
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">{t('projects.title')}</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(projectQuantity)].map((_, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-25 animate-pulse"></div>
                <div className="relative glass-card p-6 animate-pulse">
                  <div className="h-4 bg-gray-700 rounded mb-4"></div>
                  <div className="h-3 bg-gray-700 rounded mb-2 w-3/4"></div>
                  <div className="h-3 bg-gray-700 rounded mb-4 w-1/2"></div>
                  <div className="flex justify-between items-center">
                    <div className="h-3 bg-gray-700 rounded w-1/4"></div>
                    <div className="flex gap-2">
                      <div className="h-8 w-8 bg-gray-700 rounded"></div>
                      <div className="h-8 w-8 bg-gray-700 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden"
    >
      {/* Creative Mesh Background */}
      <div className="absolute inset-0 opacity-6">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.15) 1px, transparent 1px),
            radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.15) 1px, transparent 1px),
            linear-gradient(45deg, rgba(168, 85, 247, 0.05) 1px, transparent 1px)
          `,
            backgroundSize: '40px 40px, 60px 60px, 80px 80px',
            animation: 'grid-move 35s linear infinite',
          }}
        ></div>
      </div>

      {/* Floating Creative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['◆', '●', '▲', '■', '★', '◇', '◯', '△'].map((shape, i) => (
          <div
            key={i}
            className="absolute text-violet-400/20 text-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          >
            {shape}
          </div>
        ))}
      </div>

      {/* Portfolio Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-violet-500/30 to-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-fuchsia-500/25 to-pink-500/25 rounded-full mix-blend-multiply filter blur-3xl opacity-45 animate-pulse"
          style={{ animationDelay: '2.5s' }}
        ></div>
        <div
          className="absolute top-3/4 right-3/4 w-72 h-72 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"
          style={{ animationDelay: '5s' }}
        ></div>
      </div>

      {/* Artistic Brush Strokes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-violet-400/10 via-fuchsia-400/15 to-transparent opacity-40"
            style={{
              width: `${150 + Math.random() * 300}px`,
              height: `${8 + Math.random() * 12}px`,
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 180 - 90}deg) skewX(${Math.random() * 30 - 15}deg)`,
              animation: `pulse-glow ${6 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
              borderRadius: '50px'
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
                {t('projects.title')}
              </span>
            </h2>
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-2xl rounded-full opacity-50"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo, index) => {
            const gradients = [
              {
                main: 'from-blue-500 to-cyan-500',
                hover: 'from-blue-400 to-cyan-400',
              },
              {
                main: 'from-purple-500 to-pink-500',
                hover: 'from-purple-400 to-pink-400',
              },
              {
                main: 'from-green-500 to-emerald-500',
                hover: 'from-green-400 to-emerald-400',
              },
              {
                main: 'from-orange-500 to-red-500',
                hover: 'from-orange-400 to-red-400',
              },
              {
                main: 'from-indigo-500 to-purple-500',
                hover: 'from-indigo-400 to-purple-400',
              },
              {
                main: 'from-yellow-500 to-orange-500',
                hover: 'from-yellow-400 to-orange-400',
              },
            ];
            const gradient = gradients[index % gradients.length];

            return (
              <div key={repo.id} className="group relative">
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${gradient.main} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200`}
                ></div>
                <div
                  className="relative glass-card p-6 flex flex-col h-full hover:bg-white/10 transition-all duration-500 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-4">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg bg-gradient-to-r ${gradient.main} hover:${gradient.hover} transition-all duration-300 hover:scale-110 flex items-center`}
                      style={{ marginRight: 5 }}
                    >
                      <SiGithub className="w-4 h-4 text-white" />
                    </a>
                    <h3
                      className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-300"
                      style={{ marginLeft: 5 }}
                    >
                      {repo.name}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                    {repo.description || t('projects.defaultDesc')}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className={`px-2 py-1 bg-gradient-to-r ${gradient.main} bg-opacity-20 text-blue-300 text-xs rounded-md`}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex items-center gap-2">
                      {repo.language && (
                        <>
                          <div
                            className={`w-3 h-3 rounded-full bg-gradient-to-r ${gradient.main} group-hover:scale-110 transition-transform duration-300`}
                          ></div>
                          <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                            {repo.language}
                          </span>
                        </>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        <span>{repo.forks_count}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <AnimatedButton
            variant="gradient"
            size="lg"
            leftIcon={Github}
            rightIcon={Code}
            onClick={() => window.open('https://github.com/OniMock', '_blank')}
          >
            {t('projects.viewAll')}
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;
