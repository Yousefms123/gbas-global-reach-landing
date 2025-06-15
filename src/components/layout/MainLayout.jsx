
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children }) => {
    const { i18n } = useTranslation();

    useEffect(() => {
        document.documentElement.lang = i18n.language;
        document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    }, [i18n, i18n.language]);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-20">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
