import { useState } from 'react';
import { Mail, MapPin, Send, MessageCircle, Rocket, Star } from 'lucide-react';
import { SiDiscord, SiGithub, SiX, SiTelegram } from 'react-icons/si';
import { useLanguage } from '../hooks/use-language';
import { AnimatedButton } from './ui/animated-button';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const socialLinks = [
    {
      icon: SiDiscord,
      label: 'Discord',
      url: 'https://discord.gg/mGgQ7MejFR',
      color: 'hover:text-blue-400',
    },
    {
      icon: SiTelegram,
      label: 'Telegram',
      url: 'https://t.me/onimock',
      color: 'hover:text-green-400',
    },
    {
      icon: SiGithub,
      label: 'GitHub',
      url: 'https://github.com/OniMock',
      color: 'hover:text-yellow-300',
    },
    {
      icon: SiX,
      label: 'X',
      url: 'https://x.com/OnimockNft',
      color: 'hover:text-orange-400',
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:onimock@gmail.com',
      color: 'hover:text-red-400',
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Subtle gradient overlay for section distinction */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-purple-900/10 to-slate-900/30 pointer-events-none" />
      {/* Network Connection Background */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.1) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.1) 2px, transparent 2px),
            linear-gradient(45deg, rgba(34, 197, 94, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px, 120px 120px, 40px 40px',
          animation: 'grid-move 40s linear infinite'
        }}></div>
      </div>

      {/* Connection Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
            style={{
              width: `${200 + Math.random() * 400}px`,
              height: '2px',
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 180}deg)`,
              animation: `pulse-glow ${4 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Communication Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/25 to-emerald-500/25 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-55 animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-3/4 right-3/4 w-72 h-72 bg-gradient-to-br from-teal-500/15 to-cyan-500/15 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '5s' }}></div>
      </div>

      {/* Floating Network Nodes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${6 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            <div className="w-3 h-3 bg-gradient-to-r from-cyan-400/40 to-emerald-400/40 rounded-full relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/60 to-emerald-400/60 rounded-full animate-ping"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Signal Waves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-cyan-400/10 rounded-full"
            style={{
              width: `${100 + i * 80}px`,
              height: `${100 + i * 80}px`,
              left: '20%',
              top: '30%',
              animation: `pulse-glow ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`
            }}
          ></div>
        ))}
      </div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
                {t('contact.title')}
              </span>
            </h2>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-2xl rounded-full opacity-50"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative glass-card p-8">
                <h3 className="text-2xl font-semibold text-white mb-6 group-hover:text-blue-300 transition-colors duration-300">{t('contact.ready')}</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group/item hover:scale-[1.01] transition-transform duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover/item:rotate-3 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm group-hover/item:text-gray-300 transition-colors duration-300">Email</p>
                      <p className="text-white font-medium group-hover/item:text-blue-300 transition-colors duration-300">onimock@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group/item hover:scale-[1.01] transition-transform duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover/item:rotate-12 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm group-hover/item:text-gray-300 transition-colors duration-300">Location</p>
                      <p className="text-white font-medium group-hover/item:text-purple-300 transition-colors duration-300">{t('contact.country')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative glass-card p-8">
                <h3 className="text-2xl font-semibold text-white mb-6 group-hover:text-purple-300 transition-colors duration-300">Social Links</h3>
                <div className="flex gap-4">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-102 hover:rotate-12 ${link.color}`}
                        aria-label={link.label}
                      >
                        <Icon className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative glass-card p-8">
              <h3 className="text-2xl font-semibold text-white mb-6 group-hover:text-cyan-300 transition-colors duration-300">{t('contact.button')}</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 hover:border-cyan-500/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 hover:border-cyan-500/50"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 hover:border-cyan-500/50"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 resize-none transition-all duration-300 hover:border-cyan-500/50"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 disabled:from-gray-500 disabled:to-gray-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
