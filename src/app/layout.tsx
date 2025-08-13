import './globals.css';
import type {Metadata} from 'next';
import Script from 'next/script';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavLink from '@components/Navigation/NavLink';
import ResponsiveMenu from "@components/Navigation/ResponsiveMenu";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUpFromBracket, faCaretDown, faPhone} from '@fortawesome/free-solid-svg-icons'; // Import specific icons as needed
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';
import '@public/assets/css/grids.css'
import '@public/assets/css/user-style.css'
import '@public/assets/css/sitestyle.css'
import NavReturn from "@components/Navigation/NavReturn";
import Editable from "@components/Editable/Editable";
import {CONTACT_PHONE} from "@constants";
// import '../../public/assets/css/external-libs.css'

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
        <header>
            <div id="r3894" className="row ">
                <div
                    className="flex flex-col gap-2 sm:gap-8 sm:flex-row justify-between sm:justify-end items-center">
                    <div className="">
                        <p className="text leading-[1.1em] text-xl text-right font-extrabold">
                            <a href="/contact">
                                <Editable name='HEADER_MAKE_APPOINTMENT'/>
                            </a>
                        </p>
                    </div>
                    <div className="">
                        <p className="text leading-[1.1em] text-xl text-right font-extrabold">
                            <a
                                href={`tel:+1${CONTACT_PHONE.replace(/\D+/g, '')}`}>
                                <FontAwesomeIcon width={18} height={18} icon={faPhone} className='mr-2'/>
                                <Editable name='CONTACT_PHONE'/>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div id="r5000" className="row ">
                <div className="container container-fixed colsStack">
                    <div id="c5000" className="col col-md-3 col-sm-6 col-lg-3 flexCol">
                        <div id="m3175" className="module autospacer"></div>
                        <div className="flexWrap">
                            <Link href="/" title="" aria-label="" className="imageModuleWrap" id="w_m3130"
                                  data-track-action="internal_link_clicked">
                                <Image src="/assets/imgs/site-logo.png"
                                       alt="Stephanie L. Skinner Family Dental Logo" width={200} height={119} priority/>
                            </Link>
                        </div>
                        <div id="m4279" className="module autospacer"></div>
                    </div>
                    <div id="c4354" className="col col-sm-6 col-lg-9 col-md-9 flexCol">
                        <div id="m4218" className="module autospacer"></div>
                        <div className="flexWrap">
                            <ResponsiveMenu>
                                <li><NavLink href="/">HOME</NavLink>
                                </li>
                                <li><NavLink href="/meet-the-team">MEET THE TEAM</NavLink>
                                </li>
                                <li><NavLink href="/service">
                                    SERVICE
                                    <FontAwesomeIcon width={12} height={12}
                                                     icon={faCaretDown}
                                                     className='ml-2'/>
                                </NavLink>
                                    <ul>
                                        <li><NavLink href="/service/dental-hygiene">Dental
                                            Hygiene</NavLink>
                                        </li>
                                        <li><NavLink href="/service/dental-fillings-and-crowns"
                                        >Dental Fillings and
                                            Crowns</NavLink></li>
                                        <li><NavLink href="/service/cosmetic-implants">Cosmetic
                                            Implants</NavLink>
                                        </li>
                                        <li><NavLink href="/service/full-and-partial-dentures"
                                        >Full and Partial
                                            Dentures</NavLink></li>
                                        <li><NavLink href="/service/sedation-dentistry">Sedation
                                            Dentistry</NavLink></li>
                                        <li><NavLink href="/service/emergency-dentistry">Emergency
                                            Dentistry</NavLink></li>
                                        <li><NavLink href="/service/paperwork">Patient
                                            Paperwork</NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li><NavLink href="/the-office">THE OFFICE</NavLink></li>
                                <li className="hidden">
                                    <NavLink href="/blog"
                                             data-track-action="internal_link_clicked">BLOG</NavLink>
                                </li>
                                <li><NavLink href="/contact">CONTACT</NavLink></li>
                            </ResponsiveMenu>
                        </div>
                        <div id="m4149" className="module autospacer"></div>
                    </div>
                </div>
            </div>
        </header>
        <main id="main-content" aria-label="Page Content">{children}</main>
        {/* Footer Section */}
        <footer aria-label="Site Footer">
            <div id="r1074" className="row ">
                <div className="container container-fixed colsStack">
                    <div id="c3869" className="col col-sm-12 col-lg-4 col-md-6">
                        <div id="m3799" className="module text"><p className="custom2">Contact Information</p></div>
                        <div id="m1028" className="module text"><p className="footertext"><span
                            style={{fontWeight: 'bold'}}>Dr. Stephanie Skinner Family Dentistry</span></p>
                            <p className="footertext"><span className="iconfont">➤</span> 10515 White Bluff Road&nbsp;
                            </p>
                            <p className="footertext">Savannah GA 31406</p></div>
                        <div id="m3901" className="module text"><p className="footertext"><span
                            className="iconfont">☎</span> &nbsp;<a href="tel:+19129256613">(912) 925-6613</a></p></div>
                        <div id="m1859" className="module text"><p className="footertext"><span
                            className="iconfont">✉</span> <a
                            href="mailto:skinnerdmd@comcast.net">skinnerdmd@comcast.net</a></p></div>
                        <ul id="m3472" className="module socialmedia">
                            <li><a href="https://www.facebook.com/sskinnerdentistry" target="_blank" rel="noopener"
                                   aria-label="facebook">
                                <FontAwesomeIcon width={24} height={36}
                                                 icon={faFacebookF}
                                                 className='ml-2'/>
                            </a></li>
                        </ul>
                    </div>
                    <div id="c3079" className="col col-sm-12 col-lg-4 col-md-5">
                        <div id="m2705" className="module text"><p className="custom2">Opening Hours</p></div>
                        <div className="module openinghours2" id="m1838"><p className="day clear footertext"><span
                            className="dayLabel">Monday - Tuesday</span> <span className="ranges"> <span>08:00 AM - 05:00 PM</span> </span>
                        </p>
                            <p className="day clear footertext"><span className="dayLabel">Wednesday</span> <span
                                className="ranges"> <span>Closed</span> </span></p>
                            <p className="day clear footertext"><span className="dayLabel">Thursday - Friday</span>
                                <span className="ranges"> <span>08:00 AM - 05:00 PM</span> </span></p>
                            <p className="subtitle specialDayTitle"></p></div>
                        <div id="m2896" className="module text"><p className="footertext"><span
                            style={{fontWeight: 'bold'}}>*Private/sedation appointments available by request.</span></p>
                        </div>
                    </div>
                    <div id="c3299" className="col col-sm-12 col-lg-4 col-md-12">
                        <div id="m1815" className="module text"><p className="custom2">Map</p></div>
                        <div id="m4074" className="module map osmap">
                            <iframe
                                className='w-full h-full'
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps location"
                                src={"https://www.google.com/maps/embed/v1/place?key=" + process.env.GOOGLE_API_KEY + "&q=" + encodeURIComponent(process.env.BUSINESS_ADDRESS || '')}>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <section className="row brandfooter" role="contentinfo" aria-label="Brand Footer">
            <div className="container container-">
                <div className="col col-sm-12 text-left">
                    <p>
                        <Editable name='FOOTER_MANAGED_BY_TEXT'/>
                        <a className='font-bold'
                           href="mailto:ari@asu.edu" target="_blank">
                            <Editable name='FOOTER_MANAGED_BY'/>
                        </a>
                    </p>
                </div>
            </div>
        </section>
        <NavReturn>
            <FontAwesomeIcon width={20} height={20}
                             icon={faArrowUpFromBracket}
                             className=''/>
        </NavReturn>
        </body>
        </html>
    );
}
