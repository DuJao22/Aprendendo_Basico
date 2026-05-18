import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

const names = [
  'Carlos', 'Ana', 'Ricardo', 'Julian', 'Mariana', 'Fernando', 'Bianca', 'Gustavo', 
  'Leticia', 'Bruno', 'Sofia', 'Mateus', 'Camila', 'Rafael', 'Isabela', 'Vinícius', 
  'Larissa', 'Diego', 'Beatriz', 'Felipe'
];

const locations = [
  'São Paulo', 'Rio de Janeiro', 'Bento Gonçalves', 'Curitiba', 'Salvador', 
  'Fortaleza', 'Belo Horizonte', 'Manaus', 'Recife', 'Brasília', 'Porto Alegre',
  'Goiânia', 'Belém', 'São Luís', 'Maceió', 'Natal', 'Campo Grande', 'Teresina'
];

const notificationsData = [
  { text: 'acaba de aprender a criar uma Landing Page com IA!', url: 'https://seusite-ai-lp.vercel.app/' },
  { text: 'criou seu primeiro Mini SaaS em minutos.', url: 'https://lp-curso-saas.vercel.app/' },
  { text: 'finalizou o módulo de Landing Pages profissionais.', url: 'https://seusite-ai-lp.vercel.app/' },
  { text: 'descobriu como faturar com seu primeiro SaaS.', url: 'https://lp-curso-saas.vercel.app/' },
  { text: 'acabou de garantir o Pacote Completo!', url: 'https://seusite-ai-lp.vercel.app/' },
  { text: 'está explorando as ferramentas de IA para desenvolvedores.', url: 'https://seusite-ai-lp.vercel.app/' },
  { text: 'acabou de publicar seu primeiro projeto online.', url: 'https://seusite-ai-lp.vercel.app/' },
  { text: 'concluiu o desafio de criar um sistema do zero.', url: 'https://lp-curso-saas.vercel.app/' },
  { text: 'transformou uma ideia em um Mini SaaS funcional.', url: 'https://lp-curso-saas.vercel.app/' },
  { text: 'aprendeu a integrar IA no seu fluxo de trabalho.', url: 'https://seusite-ai-lp.vercel.app/' }
];

export function SocialProofNotification() {
  const [currentNotification, setCurrentNotification] = useState<{
    name: string;
    location: string;
    action: string;
    url: string;
    time: string;
  } | null>(null);

  useEffect(() => {
    const showNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomLocation = locations[Math.floor(Math.random() * locations.length)];
      const randomData = notificationsData[Math.floor(Math.random() * notificationsData.length)];
      
      setCurrentNotification({
        name: randomName,
        location: randomLocation,
        action: randomData.text,
        url: randomData.url,
        time: 'agora mesmo'
      });

      // Hide after 5 seconds
      setTimeout(() => {
        setCurrentNotification(null);
      }, 5000);
    };

    // Initial delay
    const initialDelay = setTimeout(showNotification, 2000);

    // Interval for subsequent notifications
    const interval = setInterval(showNotification, 10000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-[100] pointer-events-none">
      <AnimatePresence>
        {currentNotification && (
          <motion.a
            href={currentNotification.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.9, transition: { duration: 0.2 } }}
            className="bg-[#0D0D18]/95 backdrop-blur-md border border-indigo-500/30 p-4 rounded-2xl shadow-2xl flex items-start gap-4 max-w-[320px] pointer-events-auto cursor-pointer hover:border-indigo-500/60 transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex-shrink-0 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/30 transition-colors">
              <Sparkles size={20} />
            </div>
            
            <div className="flex-1">
              <p className="text-sm font-medium text-white mb-1">
                {currentNotification.name} de {currentNotification.location}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed mb-2">
                {currentNotification.action}
              </p>
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                <CheckCircle2 size={10} />
                <span>Verificado</span>
                <span className="text-slate-600 ml-auto">• {currentNotification.time}</span>
              </div>
            </div>
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}
