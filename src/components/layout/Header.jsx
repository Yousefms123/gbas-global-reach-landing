
import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../Logo';
import LanguageSwitcher from '../LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const { t } = useTranslation();

  const navLinks = [
    { href: '#about', label: t('header.about') },
    { href: '#services', label: t('header.services') },
    { href: '#finderjet', label: t('header.finderjet') },
    { href: '#contact', label: t('header.contact') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <nav className="flex flex-col gap-6 mt-10">
                            {navLinks.map(link => (
                                <a key={link.href} href={link.href} className="text-lg font-medium">
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
