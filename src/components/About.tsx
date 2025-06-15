
import { Code, Coffee, Lightbulb, Rocket } from 'lucide-react';

const About = () => {
  const skills = [
    'JavaScript/TypeScript',
    'React/Next.js',
    'Node.js',
    'Python',
    'Git/GitHub',
    'AWS/Cloud',
    'Docker',
    'MongoDB/SQL'
  ];

  const interests = [
    { icon: Code, title: 'Clean Code', desc: 'Código limpo e bem estruturado' },
    { icon: Lightbulb, title: 'Inovação', desc: 'Sempre buscando novas soluções' },
    { icon: Rocket, title: 'Performance', desc: 'Otimização e alta performance' },
    { icon: Coffee, title: 'Open Source', desc: 'Contribuindo para a comunidade' }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Sobre Mim</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Desenvolvedor apaixonado por tecnologia, sempre em busca de criar soluções 
            elegantes e eficientes que impactem positivamente a vida das pessoas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-2xl font-semibold text-white mb-4">Minha Jornada</h3>
            <p className="text-gray-300 leading-relaxed">
              Como desenvolvedor full stack, tenho paixão por criar experiências digitais 
              excepcionais. Especializo-me em tecnologias modernas e estou sempre 
              explorando novas ferramentas e metodologias.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Acredito que o código deve ser não apenas funcional, mas também elegante 
              e maintível. Cada projeto é uma oportunidade de aprender algo novo e 
              contribuir para a comunidade de desenvolvedores.
            </p>
          </div>
          
          <div className="glass-card p-8 animate-slide-in-right">
            <h3 className="text-xl font-semibold text-white mb-6">Tecnologias</h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-500/20 transition-colors duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <div
                key={interest.title}
                className="glass-card p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">{interest.title}</h4>
                <p className="text-gray-400 text-sm">{interest.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
