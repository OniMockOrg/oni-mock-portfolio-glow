import { useLanguage } from '../hooks/use-language';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Imagem de apresentação */}
          <div className="order-2 md:order-1">
            <div className="glass-card p-8 rounded-2xl">
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                <svg
                  className="w-32 h-32 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Descrição dos serviços */}
          <div className="order-1 md:order-2">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-4">
                {t('services.automation.title')}
              </h3>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                {t('services.automation.description')}
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">{t('services.automation.feature1')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">{t('services.automation.feature2')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">{t('services.automation.feature3')}</p>
                </div>
              </div>

              <div className="pt-6">
                <button 
                  onClick={() => navigate('/alphabot')}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  {t('services.automation.cta')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;