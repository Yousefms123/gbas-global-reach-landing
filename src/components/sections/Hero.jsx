
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop" alt="Aviation Background" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-20 text-center px-4 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('hero.title')}</h1>
        <p className="text-lg md:text-2xl max-w-4xl mx-auto mb-8 whitespace-pre-line">{t('hero.subtitle')}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services">
                <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white w-full sm:w-auto">
                    {t('hero.cta_services')}
                </Button>
            </a>
            <a href="#contact">
                <Button size="lg" variant="default" className="w-full sm:w-auto">
                    {t('hero.cta_contact')}
                </Button>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
