// EmailJS Configuration
// Para usar este serviço, você precisa:
// 1. Criar uma conta em https://www.emailjs.com/
// 2. Configurar um serviço de email (Gmail, Outlook, etc.)
// 3. Criar um template de email
// 4. Adicionar as variáveis de ambiente no arquivo .env

export const EMAILJS_CONFIG = {
  // Usando variáveis de ambiente para maior segurança
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_lk8kecg',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_1wm8o0l',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'KyuKChrC7wyuULVue',
};
// Nota: O email de destino (onimock@gmail.com) deve ser configurado
// diretamente no template do EmailJS, não nos parâmetros do envio.

// Template de email sugerido para o EmailJS:
// Assunto: Nova mensagem do portfólio - {{subject}}
// Corpo:
// Nome: {{from_name}}
// Email: {{from_email}}
// Assunto: {{subject}}
//
// Mensagem:
// {{message}}
//
// ---
// Enviado através do formulário de contato do portfólio
