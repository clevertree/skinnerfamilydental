import React from 'react';
import ContactForm from "@components/Forms/ContactForm";
import {sendContactFormEmail} from "../../actions/emailActions";

export default function ContactPage() {
    return (
        <div>
            <div id="r5002" role="main" className="row designRow">
                <div id="p6792" className="container container-fluid">
                    <div className="col col-sm-12">
                        <div id="r1041" className="row bgfilter">
                            <div className="container container-fixed">
                                <div id="c3797" className="col col-sm-1 hidden-sm flexCol">
                                    <div id="m1385" className="module autospacer"></div>
                                </div>
                                <div id="c1361" className="col col-lg-10 col-md-10 col-sm-12">
                                    <div id="m3350" className="module text"><h1 className="spottext"
                                                                                style={{textAlign: 'center'}}>Contact</h1>
                                    </div>
                                </div>
                                <div id="c1540" className="col col col-sm-1 hidden-sm flexCol">
                                    <div id="m4619" className="module autospacer"></div>
                                </div>
                            </div>
                        </div>
                        <div id="r3081" className="row ">
                            <div className="container container-fixed">
                                <div id="c4472" className="col col-md-6 col-sm-12 col-lg-6">
                                    <div id="m1433" className="module text"><h2 className="headline">Dr.
                                        Stephanie Skinner Family Dentistry&nbsp;</h2></div>
                                    <div id="m4777" className="module text"><p className="bodytext">10515 White Bluff
                                        Road</p><p className="bodytext">Savannah, GA&nbsp;31406</p></div>
                                    <div id="m1411" className="module text"><p className="bodytext">Phone: <a
                                        data-global="phone" href="tel:+19129256613" data-track-event="click"
                                        data-track-action="phone_link">(912) 925-6613</a></p></div>
                                    <div id="m1824" className="module text"><p className="bodytext">Email: <a
                                        href="mailto:skinnerdmd@comcast.net" data-track-event="click"
                                        data-track-action="email_link">skinnerdmd@comcast.net</a></p></div>
                                    <div id="m1657" className="module text"><h2 className="headline">Opening Hours</h2>
                                    </div>
                                    <div className="module openinghours" id="m3666">
                                        <p className="day clear bodytext"><span className="dayLabel">Monday</span> <span
                                            className="ranges"> <span>08:00 AM - 05:00 PM</span> </span></p>
                                        <p className="day clear bodytext"><span className="dayLabel">Tuesday</span>
                                            <span className="ranges"> <span>08:00 AM - 05:00 PM</span> </span></p>
                                        <p className="day clear bodytext"><span className="dayLabel">Wednesday</span>
                                            <span className="ranges"> <span>Closed</span> </span></p>
                                        <p className="day clear bodytext"><span className="dayLabel">Thursday</span>
                                            <span className="ranges"> <span>08:00 AM - 05:00 PM</span> </span></p>
                                        <p className="day clear bodytext"><span className="dayLabel">Friday</span> <span
                                            className="ranges"> <span>08:00 AM - 05:00 PM</span> </span></p>
                                        <p className="subtitle specialDayTitle"></p>
                                    </div>
                                    <div id="m2535" className="module text"><p className="bodytext"><span
                                        style={{fontWeight: 'bold'}}>*Private/sedation appointments available by request.</span>
                                    </p></div>
                                </div>
                                <div id="c3355" className="col col-md-6 col-sm-12 col-lg-6">
                                    <ContactForm sendForm={sendContactFormEmail}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
