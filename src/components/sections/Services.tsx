
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plane, Briefcase, Users } from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: <Plane className="h-10 w-10 text-brand-orange" />,
      title: t('services.flight_ops.title'),
      description: t('services.flight_ops.description'),
    },
    {
      icon: <Users className="h-10 w-10 text-brand-orange" />,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
    },
    {
      icon: <Briefcase className="h-10 w-10 text-brand-orange" />,
      title: t('services.charter.title'),
      description: t('services.charter.description'),
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">{t('services.title')}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center p-6">
              <CardHeader>
                <div className="flex justify-center mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
