import './globals.css';
import type {Metadata} from 'next';
import Script from 'next/script';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
            <link rel="shortcut icon" type="image/x-icon" href="/assets/uploads/imgs/favicon.ico"/>
            <link rel="preload" href="https://css-fonts.eu.extra-cdn.com/css?family=Roboto:300,500&display=swap"
                  as="style"/>
            <link href="https://css-fonts.eu.extra-cdn.com/css?family=Roboto:300,500&display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="/assets/css/grids.css"/>
            <link rel="stylesheet" href="/assets/css/captcha.css"/>
            <link rel="stylesheet" href="/assets/css/user-style.css"/>
            <link rel="stylesheet" id="style_site" href="/assets/css/sitestyle.css"/>
            <link rel="stylesheet" href="/assets/css/external-libs.css"/>
            <link rel="preconnect" href="https://fonts.prod.extra-cdn.com/" crossOrigin="anonymous"/>
            <style>{`.form input[type=submit] { width: auto !important; }`}</style>
            <Script id="gtag-base" strategy="afterInteractive"
                    src="https://www.googletagmanager.com/gtag/js?id=G-LRGFK81PYX"/>
            <Script id="gtag-config" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LRGFK81PYX', {
            'anonymize_ip': true,
            'send_page_view': false,
            'custom_map': {'dimension1': 'monoSiteId', 'dimension2': 'monoRendering'}
          });
          gtag('event', 'monoAction', {'monoSiteId': '1234107', 'monoRendering': 'website'});
          gtag('event', 'page_view', {'monoSiteId': '1234107', 'monoRendering': 'website'});
        `}</Script>
            <Script></Script>
            <Script src="/assets/js/animation.js"></Script>
            <Script src="/assets/js/legacy/html5shiv.js"></Script>
            <Script src="/assets/js/legacy/respond.js"></Script>
            {/* Add other analytics scripts as needed */}
        </head>
        <body id="p9533" data-dateformat="d/m/Y" data-enablefocusindication="true" data-req="lazyload,quicklink">
        <div className="skipNavigation">
            <a className="skipNavigationLink" aria-label="Skip to content" title="Skip to content" href="#main-content">Skip
                to content</a>
        </div>
        <header>
            <div id="r3894" className="row ">
                <div className="container container-fixed">
                    <div id="c2559" className="col col-md-2 col-lg-4 col-sm-1 hidden-sm flexCol">
                        <div id="m3280" className="module autospacer"></div>
                        <div id="m1346" className="module autospacer"></div>
                    </div>
                    <div id="c3125" className="col col-sm-7 col-lg-6 col-md-7 flexCol">
                        <div id="m1475" className="module autospacer"></div>
                        <div className="flexWrap">
                            <div id="m1408" className="module text"><p className="custom1" style={{textAlign: 'right'}}>
                                <a href="/contact" data-track-event="click" data-track-action="internal_link_clicked">MAKE
                                    APPOINTMENT</a></p></div>
                        </div>
                    </div>
                    <div id="c2268" className="col col-lg-2 col-md-3 col-sm-5 flexCol">
                        <div id="m2892" className="module autospacer"></div>
                        <div className="flexWrap">
                            <div id="m1353" className="module text"><p className="custom1"><a href="tel:+19129256613"
                                                                                              data-track-event="click"
                                                                                              data-track-action="phone_link"><span
                                className="iconfont">&#9990;</span> (912) 925-6613</a></p></div>
                        </div>
                        <div id="m1535" className="module autospacer"></div>
                    </div>
                </div>
            </div>
            <div id="r5000" className="row ">
                <div className="container container-fixed colsStack">
                    <div id="c5000" className="col col-md-3 col-sm-6 col-lg-3 flexCol">
                        <div id="m3175" className="module autospacer"></div>
                        <div className="flexWrap">
                            <Link href="/" title="" aria-label="" className="imageModuleWrap" id="w_m3130"
                                  data-track-event="click" data-track-action="internal_link_clicked">
                                <Image src="/uploads/imgs/colorlogo-e1549412436478.png"
                                       alt="Stephanie L. Skinner Family Dental Logo" width={200} height={119} priority/>
                            </Link>
                        </div>
                        <div id="m4279" className="module autospacer"></div>
                    </div>
                    <div id="c4354" className="col col-sm-6 col-lg-9 col-md-9 flexCol">
                        <div id="m4218" className="module autospacer"></div>
                        <div className="flexWrap">
                            <nav id="m5000" className="module nav" aria-label="Navigation" tabIndex={-1}>
                                <ul className="navContainer">
                                    <li className="active"><Link href="/" data-track-event="click"
                                                                 data-track-action="internal_link_clicked">HOME</Link>
                                    </li>
                                    <li><Link href="/meet-the-team" data-track-event="click"
                                              data-track-action="internal_link_clicked">MEET THE TEAM</Link></li>
                                    <li><Link href="/service" data-track-event="click"
                                              data-track-action="internal_link_clicked">SERVICE</Link>
                                        <ul>
                                            <li><Link href="/service/dental-hygiene" data-track-event="click"
                                                      data-track-action="internal_link_clicked">Dental Hygiene</Link>
                                            </li>
                                            <li><Link href="/service/dental-fillings-and-crowns"
                                                      data-track-event="click"
                                                      data-track-action="internal_link_clicked">Dental Fillings and
                                                Crowns</Link></li>
                                            <li><Link href="/service/cosmetic-implants" data-track-event="click"
                                                      data-track-action="internal_link_clicked">Cosmetic Implants</Link>
                                            </li>
                                            <li><Link href="/service/full-and-partial-dentures" data-track-event="click"
                                                      data-track-action="internal_link_clicked">Full and Partial
                                                Dentures</Link></li>
                                            <li><Link href="/service/sedation-dentistry" data-track-event="click"
                                                      data-track-action="internal_link_clicked">Sedation
                                                Dentistry</Link></li>
                                            <li><Link href="/service/emergency-dentistry" data-track-event="click"
                                                      data-track-action="internal_link_clicked">Emergency
                                                Dentistry</Link></li>
                                            <li><Link href="/service/paperwork" data-track-event="click"
                                                      data-track-action="internal_link_clicked">Patient Paperwork</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><Link href="/the-office" data-track-event="click"
                                              data-track-action="internal_link_clicked">THE OFFICE</Link></li>
                                    <li className="hidden"><Link href="/blog" data-track-event="click"
                                                                 data-track-action="internal_link_clicked">BLOG</Link>
                                    </li>
                                    <li><Link href="/contact" data-track-event="click"
                                              data-track-action="internal_link_clicked">CONTACT</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div id="m4149" className="module autospacer"></div>
                    </div>
                </div>
            </div>
        </header>
        <main id="main-content">{children}</main>
        {/* Footer Section */}
        <footer>
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
                                   aria-label="facebook"> <span className="fa fa-facebook" aria-hidden="true"></span>
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
                                src={"https://www.google.com/maps/embed/v1/place?key=" + process.env.GOOGLE_API_KEY + "&q=" + encodeURIComponent(process.env.BUSINESS_ADDRESS || '')}>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div className="row brandfooter">
            <div className="container container-">
                <div className="col col-sm-12 text-left">
                    <p>
                        Managed by{' '}
                        <a rel="nofollow noopener"
                           href="mailto:ari@asu.edu" target="_blank">
                            Ari Asulin
                        </a>
                    </p>
                </div>
            </div>
        </div>
        </body>
        </html>
    );
}
