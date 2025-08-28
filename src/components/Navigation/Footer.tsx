import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';
import Editable from "@components/Editable/Editable";

interface FooterProps {
    googleApiKey?: string;
    businessAddress?: string;
}

const Footer: React.FC<FooterProps> = ({
                                           googleApiKey = process.env.GOOGLE_API_KEY,
                                           businessAddress = process.env.BUSINESS_ADDRESS || ''
                                       }) => {
    return (
        <>
            <footer aria-label="Site Footer">
                <div id="r1074" className="row ">
                    <div className="container container-fixed colsStack">
                        <div id="c3869" className="col col-sm-12 col-lg-4 col-md-6">
                            <div id="m3799" className="module text"><p className="custom2">Contact Information</p></div>
                            <div id="m1028" className="module text"><p className="footertext"><span
                                style={{fontWeight: 'bold'}}>Dr. Stephanie Skinner Family Dentistry</span></p>
                                <p className="footertext"><span className="iconfont">➤</span> 10515 White Bluff
                                    Road&nbsp;
                                </p>
                                <p className="footertext">Savannah GA 31406</p></div>
                            <div id="m3901" className="module text"><p className="footertext"><span
                                className="iconfont">☎</span> &nbsp;<a href="tel:+19129256613">(912) 925-6613</a></p>
                            </div>
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
                                style={{fontWeight: 'bold'}}>*Private/sedation appointments available by request.</span>
                            </p>
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
                                    src={`https://www.google.com/maps/embed/v1/place?key=${googleApiKey}&q=${encodeURIComponent(businessAddress)}`}>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <section className="row brandfooter" role="contentinfo" aria-label="Brand Footer">
                <div className="container container-">
                    <div className="col col-sm-12 text-left">
                        <Editable html
                                  className='[&>a]:font-bold'
                                  name='FOOTER_MANAGED_BY_HTML'>
                            Managed by <a href="mailto:ari@asu.edu" target="_blank">Ari</a>
                        </Editable>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
