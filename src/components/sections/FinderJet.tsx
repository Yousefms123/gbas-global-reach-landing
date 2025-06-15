
import React from 'react';
import { useTranslation } from 'react-i18next';

const FinderJet = () => {
  const { t } = useTranslation();
  return (
    <section id="finderjet" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
            <img src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?q=80&w=2070&auto=format&fit=crop" alt="FinderJet Drone" className="rounded-lg shadow-xl" />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('finderjet.title')}</h2>
          <p className="leading-relaxed opacity-90">{t('finderjet.content')}</p>
        </div>
      </div>
    </section>
  );
};

export default FinderJet;
