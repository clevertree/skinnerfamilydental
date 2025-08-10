import React from 'react';
import SlideshowDots from '@components/SlideshowDots';
import PromoBanner from '@components/PromoBanner';
import ServicesGrid from '@components/ServicesGrid';
import FeatureRow from '@components/FeatureRow';
import BiographySection from '@components/BiographySection';
import HomePageSlideShow from "@components/HomePageSlideShow";

export default function HomePage() {
    return (
        <>
            <div id="r5002" role="main" className="row designRow">
                <div className="container container-fluid">
                    <div className="col col-sm-12">
                        <div id="r6802" className="rowGroup" data-req="rowgroup"
                             data-rowgroupsettings="auto=true,dots=true,pause=true" data-arrow-before="Before"
                             data-arrow-after="After">
                            <SlideshowDots/>
                        </div>
                        <HomePageSlideShow/>
                        <PromoBanner/>
                        <ServicesGrid/>
                        <FeatureRow headline="Friendly & Inviting"
                                    body="Our office provides a friendly and inviting atmosphere to put you at ease during every visit. We offer blankets, headphones, coffee, and have TV's, movies and a beautiful, clean waiting room to optimize the comfort of all of our patients. Come by and experience it for yourself!"
                                    buttonText="TOUR OUR OFFICE" buttonHref="/the-office"/>
                        <FeatureRow headline="Honest & Affordable"
                                    body="Have peace of mind knowing that you will only be advised to undergo the necessary procedures and services and you will not be overcharged. We pride ourselves in offering the services you need, when you then them, with the quality of care and attention you deserve."
                                    buttonText="VIEW ALL SERVICES" buttonHref="/service"/>
                        <FeatureRow headline="State of the Art Technology"
                                    body="Our practice is fully equipped with state-of-the-art technology. We are one of the only practices in Savannah that has a Cerec machine, which makes and cures the crown, all during one office visit which means it is extremely convenient and saves you time!"
                                    buttonText="MAKE A APPOINTMENT" buttonHref="/contact"/>
                        <FeatureRow headline="Unleash Your Brightness with Zoom Professional Teeth Whitening"
                                    body="Get $40 off your in-office 1-hour whitening treatment!"
                                    buttonText="LEARN MORE" buttonHref="/service"/>
                        <BiographySection/>
                    </div>
                </div>
            </div>
        </>
    );
}
