import './globals.css';
import type {Metadata} from 'next';
import Script from 'next/script';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUpFromBracket} from '@fortawesome/free-solid-svg-icons';
import '@public/assets/css/grids.css'
import '@public/assets/css/user-style.css'
import '@public/assets/css/sitestyle.css'
import NavReturn from "@components/Navigation/NavReturn";
import Header from '@components/Navigation/Header';
import Footer from '@components/Navigation/Footer';

import EditableContextWrapper from "@components/Editable/Context/EditableContextWrapper";

export const metadata: Metadata = {
    title: 'Stephanie L. Skinner D.M.D. Family Dentistry | Savannah, GA',
    description: 'Stephanie L. Skinner D.M.D. has been providing comfortable and caring family dentistry in Savannah, GA, for over 20 years',
    openGraph: {
        type: 'website',
        title: 'Stephanie L. Skinner D.M.D. Family Dentistry | Savannah, GA',
        url: 'https://stephanieskinnerfamilydental.com/',
        description: 'Stephanie L. Skinner D.M.D. has been providing comfortable and caring family dentistry in Savannah, GA, for over 20 years',
        images: ['https://stephanieskinnerfamilydental.com'],
    },
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
            <link rel="preload" href="https://css-fonts.eu.extra-cdn.com/css?family=Roboto:300,500&display=swap"
                  as="style"/>
            <link href="https://css-fonts.eu.extra-cdn.com/css?family=Roboto:300,500&display=swap" rel="stylesheet"/>
            <link rel="preconnect" href="https://fonts.prod.extra-cdn.com/" crossOrigin="anonymous"/>
            <style>{`.form input[type=submit] { width: auto !important; }`}</style>
            {/*<Script src="/assets/js/animation.js"></Script>*/}
            <Script src="/assets/js/legacy/html5shiv.js"></Script>
            <Script src="/assets/js/legacy/respond.js"></Script>
        </head>
        <body id="p9533" data-dateformat="d/m/Y" data-enablefocusindication="true" data-req="lazyload,quicklink">
        <div className="skipNavigation">
            <a className="skipNavigationLink" aria-label="Skip to content" title="Skip to content" href="#main-content">Skip
                to content</a>
        </div>
        <EditableContextWrapper>
            <Header/>
            <main id="main-content" aria-label="Page Content">{children}</main>
            <Footer/>
        </EditableContextWrapper>
        <NavReturn>
            <FontAwesomeIcon width={20} height={20}
                             icon={faArrowUpFromBracket}
                             className=''/>
        </NavReturn>
        </body>
        </html>
    );
}
