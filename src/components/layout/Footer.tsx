
import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../Logo';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto py-8 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <Logo />
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} GBAS. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
