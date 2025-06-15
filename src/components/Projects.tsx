
import { useState, useEffect } from 'react';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
}

const Projects = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/OniMock/repos?sort=updated&per_page=6');
        const data = await response.json();
        setRepos(data.filter((repo: Repository) => !repo.name.includes('OniMock')));
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
            {[...Array(6)].map((_, index) => (
              <div key={index} className="glass-card p-6 animate-pulse">
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
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">{t('projects.title')}</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo, index) => (
            <div
              key={repo.id}
              className="glass-card p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {repo.name}
                </h3>
                <div className="flex gap-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                  >
                    <Github className="w-4 h-4 text-gray-300" />
                  </a>
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-300" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {repo.description || t('projects.defaultDesc')}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {repo.topics.slice(0, 3).map((topic) => (
                  <span
                    key={topic}
                    className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-md"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  {repo.language && (
                    <>
                      <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`}></div>
                      <span className="text-gray-400 text-sm">{repo.language}</span>
                    </>
                  )}
                </div>
                <div className="flex items-center gap-4 text-gray-400 text-sm">
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
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/OniMock"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 glass-card hover:bg-white/10 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            {t('projects.viewAll')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
