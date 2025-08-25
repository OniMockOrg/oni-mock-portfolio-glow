import { useState, useEffect } from 'react';
import { Mail, MapPin, Send, MessageCircle, Rocket, Star } from 'lucide-react';
import { SiDiscord, SiGithub, SiX, SiTelegram } from 'react-icons/si';
import { useLanguage } from '../hooks/use-language';
import { AnimatedButton } from './ui/animated-button';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [fieldErrors, setFieldErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors({
        ...fieldErrors,
        [name]: '',
      });
    }
  };

  const validateField = (name: string, value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    switch (name) {
      case 'name':
        return value.length < 2 ? t('contact.form.validation.name') : '';
      case 'email': {
        return !emailRegex.test(value) ? t('contact.form.validation.email') : '';
      }
      case 'subject':
        return value.length < 3 ? t('contact.form.validation.subject') : '';
      case 'message':
        return value.length < 10 ? t('contact.form.validation.message') : '';
      default:
        return '';
    }
  };

  const validateForm = () => {
    const errors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message),
    };
    
    setFieldErrors(errors);
    return !Object.values(errors).some(error => error !== '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form before submitting
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Verificar se as variáveis de ambiente estão configuradas
    if (
      !EMAILJS_CONFIG.SERVICE_ID ||
      !EMAILJS_CONFIG.TEMPLATE_ID ||
      !EMAILJS_CONFIG.PUBLIC_KEY
    ) {
      console.error(
        'EmailJS não está configurado. Verifique as variáveis de ambiente.'
      );
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      // Preparar os dados do template para o EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      // Enviar email usando EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setSubmitStatus('error');

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
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
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.1) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.1) 2px, transparent 2px),
            linear-gradient(45deg, rgba(34, 197, 94, 0.03) 1px, transparent 1px)
          `,
            backgroundSize: '80px 80px, 120px 120px, 40px 40px',
            animation: 'grid-move 40s linear infinite',
          }}
        ></div>
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
              animation: `pulse-glow ${
                4 + Math.random() * 3
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Communication Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/25 to-emerald-500/25 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-55 animate-pulse"
          style={{ animationDelay: '2.5s' }}
        ></div>
        <div
          className="absolute top-3/4 right-3/4 w-72 h-72 bg-gradient-to-br from-teal-500/15 to-cyan-500/15 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"
          style={{ animationDelay: '5s' }}
        ></div>
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
              animationDelay: `${Math.random() * 3}s`,
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
              animationDelay: `${i * 0.3}s`,
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
                <h3 className="text-2xl font-semibold text-white mb-6 group-hover:text-blue-300 transition-colors duration-300">
                  {t('contact.ready')}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group/item hover:scale-[1.01] transition-transform duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover/item:rotate-3 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm group-hover/item:text-gray-300 transition-colors duration-300">
                        {t('contact.email')}
                      </p>
                      <p className="text-white font-medium group-hover/item:text-blue-300 transition-colors duration-300">
                        onimock@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group/item hover:scale-[1.01] transition-transform duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover/item:rotate-12 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm group-hover/item:text-gray-300 transition-colors duration-300">
                        {t('contact.location')}
                      </p>
                      <p className="text-white font-medium group-hover/item:text-purple-300 transition-colors duration-300">
                        {t('contact.country')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative glass-card p-8">
                <h3 className="text-2xl font-semibold text-white mb-6 group-hover:text-purple-300 transition-colors duration-300">
                  {t('contact.social')}
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 group-hover:scale-[1.01] hover:rotate-12 ${link.color}`}
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
              <h3 className="text-2xl font-semibold text-white mb-6 group-hover:text-cyan-300 transition-colors duration-300">
                {t('contact.button')}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:ring-2 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 hover:border-cyan-500/50 focus:bg-gray-800/70 ${
                        fieldErrors.name 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-700 focus:ring-cyan-500'
                      }`}
                      placeholder={t('contact.form.name.placeholder')}
                      aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                    />
                    {fieldErrors.name && (
                      <p id="name-error" className="mt-1 text-sm text-red-400">
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:ring-2 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 hover:border-cyan-500/50 focus:bg-gray-800/70 ${
                        fieldErrors.email 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-700 focus:ring-cyan-500'
                      }`}
                      placeholder={t('contact.form.email.placeholder')}
                      aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                    />
                    {fieldErrors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-400">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    {t('contact.form.subject')}
                  </label>
                  <input
                       type="text"
                       id="subject"
                       name="subject"
                       value={formData.subject}
                       onChange={handleChange}
                       required
                       className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:ring-2 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 hover:border-cyan-500/50 focus:bg-gray-800/70 ${
                         fieldErrors.subject 
                           ? 'border-red-500 focus:ring-red-500' 
                           : 'border-gray-700 focus:ring-cyan-500'
                       }`}
                       placeholder={t('contact.form.subject.placeholder')}
                       maxLength={100}
                       aria-describedby={fieldErrors.subject ? 'subject-error' : undefined}
                     />
                     {fieldErrors.subject && (
                       <p id="subject-error" className="mt-1 text-sm text-red-400">
                         {fieldErrors.subject}
                       </p>
                     )}
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300"
                    >
                      {t('contact.form.message')}
                    </label>
                    <span className={`text-xs transition-colors duration-300 ${
                      formData.message.length > 900 
                        ? 'text-red-400' 
                        : formData.message.length > 700 
                        ? 'text-yellow-400' 
                        : 'text-gray-500'
                    }`}>
                      {formData.message.length}/1000
                    </span>
                  </div>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:ring-2 focus:border-transparent text-white placeholder-gray-400 resize-none transition-all duration-300 hover:border-cyan-500/50 focus:bg-gray-800/70 ${
                          fieldErrors.message 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-gray-700 focus:ring-cyan-500'
                        }`}
                        placeholder={t('contact.form.message.placeholder')}
                        minLength={10}
                        maxLength={1000}
                        aria-describedby={fieldErrors.message ? 'message-error' : undefined}
                      ></textarea>
                      {fieldErrors.message && (
                        <p id="message-error" className="mt-1 text-sm text-red-400">
                          {fieldErrors.message}
                        </p>
                      )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg ${
                    submitStatus === 'success'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600'
                      : submitStatus === 'error'
                      ? 'bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600'
                  } disabled:from-gray-500 disabled:to-gray-600 text-white`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      {t('contact.form.sending')}
                    </div>
                  ) : submitStatus === 'success' ? (
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5" />
                      {t('contact.form.success.button')}
                    </div>
                  ) : submitStatus === 'error' ? (
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      {t('contact.form.error.button')}
                    </div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t('contact.form.submit')}
                    </>
                  )}
                </button>

                {/* Mensagem de status adicional */}
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <p className="text-green-400 text-sm text-center">
                      {t('contact.form.success')}
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <p className="text-red-400 text-sm text-center">
                      {t('contact.form.error')}
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
