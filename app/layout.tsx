// app/layout.tsx
import type {Metadata} from 'next'
import {Roboto} from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
    title: {
        template: '%s | Stephanie L. Skinner D.M.D. Family Dentistry',
        default: 'Stephanie L. Skinner D.M.D. Family Dentistry | Savannah, GA'
    },
    description: 'Stephanie L. Skinner D.M.D. has been providing comfortable and caring family dentistry in Savannah, GA, for over 20 years',
    metadataBase: new URL('https://stephanieskinnerfamilydental.com'),
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" data-currency="USD" data-lang="en">
        <head>
            <link rel="shortcut icon" type="image/x-icon" href="/uploads/GI5R22Qb/favicon.ico"/>
            <meta charSet="UTF-8"/>
            <title>Stephanie L. Skinner D.M.D. Family Dentistry | Savannah, GA</title>
            <meta
                name="description"
                content="Stephanie L. Skinner D.M.D. has been providing comfortable and caring family dentistry in Savannah, GA, for over 20 years"
            />
            <meta property="og:type" content="website"/>
            <meta
                property="og:title"
                content="Stephanie L. Skinner D.M.D. Family Dentistry | Savannah, GA"
            />
            <meta property="og:url" content="https://stephanieskinnerfamilydental.com/"/>
            <meta
                property="og:description"
                content="Stephanie L. Skinner D.M.D. has been providing comfortable and caring family dentistry in Savannah, GA, for over 20 years"
            />
            <meta
                property="og:image"
                content="https://stephanieskinnerfamilydental.com"
            />
            <link rel="canonical" href="index.html"/>
            {/* Mono global site tag (gtag.js) - Google Analytics */}
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link
                rel="shortcut icon"
                type="image/x-icon"
                href="uploads/GI5R22Qb/favicon.ico"
            />
            <link
                rel="preload"
                href="https://css-fonts.eu.extra-cdn.com/css?family=Roboto:300,500&display=swap"
                as="style"
            />
            <link
                href="https://css-fonts.eu.extra-cdn.com/css?family=Roboto:300,500&display=swap"
                rel="stylesheet"
            />
            <link rel="stylesheet" href="/assets/css/grids.css"/>
            <link rel="stylesheet" href="/assets/css/captcha.css"/>
            <link rel="stylesheet" href="/assets/css/user-style.css"/>
            <link rel="stylesheet" id="style_site" href="/assets/css/sitestyle.css"/>
            <link rel="stylesheet" href="/assets/css/external-libs.css"/>
            {/*[if lt IE 9]>

    <![endif]*/}
            <link
                rel="preconnect"
                href="https://fonts.prod.extra-cdn.com/"
                crossOrigin=""
            />
            <style
                id="globalCSS"
                dangerouslySetInnerHTML={{
                    __html:
                        ".form input[type=submit] {\n        width: auto !important;\n    }"
                }}
            />
        </head>
        <body>
        <div id="r5001" className="row designRow">
            <div className="skipNavigation">
                <a
                    className="skipNavigationLink"
                    aria-label="Skip to content"
                    title="Skip to content"
                    href="javascript:void(0)"
                >
                    Skip to content
                </a>
            </div>
            <div className="skipNavigation">
                <a className="skipNavigationLink" aria-label="Skip to content" href="#main-content">
                    Skip to content
                </a>
            </div>
            <div className="container container-fluid">
                <div className="col col-sm-12">
                    {children}
                </div>
            </div>
        </div>
        <a
            href="index.html#"
            data-req="scrollTop"
            className="scrollIcon hidden bottom_right"
            aria-label="Go to top of the page"
            data-track-event="click"
            data-track-action="internal_link_clicked"
        >
            {" "}
            <span/>{" "}
        </a>
        <script async noModule
                src="/assets/js/loader-polyfills.js"></script>
        <script async src="/assets/js/loader.js"></script>
        </body>
        </html>
    )
}