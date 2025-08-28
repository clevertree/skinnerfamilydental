import React from 'react';
import PromoBanner from '@components/PromoBanner';
import ServicesGrid from '@components/ServicesGrid';
import FeatureRow from '@components/FeatureRow';
import BiographySection from '@components/BiographySection';
import HomePageSlideShow from "@components/HomePageSlideShow";
import TestimonyCarousel from "@components/TestimonyCarousel";
import {ContactSection} from "@components/ContactSection";

// export const metadata: Metadata = buildMetaData("Home");

export default async function HomePage() {
    return (
        <>
            <div id="r5002" className="row designRow">
                <div id='p9533' className="container container-fluid">
                    <div className="col col-sm-12">
                        <HomePageSlideShow/>
                        <PromoBanner/>
                        <ServicesGrid/>
                        <FeatureRow headline="Friendly & Inviting"
                                    body="Our office provides a friendly and inviting atmosphere to put you at ease during every visit. We offer blankets, headphones, coffee, and have TV's, movies and a beautiful, clean waiting room to optimize the comfort of all of our patients. Come by and experience it for yourself!"
                                    className='bg-gray-100'
                                    imgSrc="/uploads/img/Dr.StephanieL.Skinner-FamilyDentistry-005.jpg"
                                    buttonText="TOUR OUR OFFICE"
                                    buttonHref="/the-office"/>
                        <FeatureRow headline="Honest & Affordable"
                                    reverse
                                    className='bg-white'
                                    imgSrc="/uploads/img/Dr.StephanieL.Skinner-FamilyDentistry-006.jpg"
                                    body="Have peace of mind knowing that you will only be advised to undergo the necessary procedures and services and you will not be overcharged. We pride ourselves in offering the services you need, when you then them, with the quality of care and attention you deserve."
                                    buttonText="VIEW ALL SERVICES" buttonHref="/service"/>
                        <FeatureRow headline="State of the Art Technology"
                                    className='bg-gray-100'
                                    imgSrc="/uploads/img/Dr.StephanieL.Skinner-FamilyDentistry-007.jpg"
                                    body="Our practice is fully equipped with state-of-the-art technology. We are one of the only practices in Savannah that has a Cerec machine, which makes and cures the crown, all during one office visit which means it is extremely convenient and saves you time!"
                                    buttonText="MAKE A APPOINTMENT" buttonHref="/contact"/>
                        <FeatureRow headline="Unleash Your Brightness with Zoom Professional Teeth Whitening"
                                    reverse
                                    className='bg-white'
                                    imgSrc="/uploads/img/Dr.StephanieL.Skinner-FamilyDentistry-008.jpg"
                                    body="Get $40 off your in-office 1-hour whitening treatment!"
                                    buttonText="LEARN MORE" buttonHref="/service"/>
                        <TestimonyCarousel/>
                        <ContactSection/>
                        <BiographySection/>
                    </div>
                </div>
            </div>
        </>
    );
}


