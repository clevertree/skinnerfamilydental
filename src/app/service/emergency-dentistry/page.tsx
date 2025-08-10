import React from 'react';
import PhilipsAd from "@components/PhilipsAd";

export default function EmergencyDentistryPage() {
    return (
        <div id="r5002" role="main" className="row designRow">
            <div id="p5876" className="container container-fluid">
                <div className="col col-sm-12">
                    <div id="r2801" className="row bgfilter">
                        <div className="container container-fixed">
                            <div id="c2555" className="col col col-sm-1 hidden-sm"/>
                            <div id="c3294" className="col col-lg-10 col-md-10 col-sm-12">
                                <div id="m3261" className="module text">
                                    <h1 className="spottext" style={{textAlign: "center"}}>
                                        Sedation Dentistry
                                    </h1>
                                </div>
                            </div>
                            <div id="c4032" className="col col col-sm-1 hidden-sm"/>
                        </div>
                    </div>
                    <div id="r1304" className="row ">
                        <div className="container container-fixed colsStack">
                            <div className="col col-sm-12 col-md-1 hidden-sm hidden-md flexCol">
                                <div id="m2371" className="module autospacer"/>
                            </div>
                            <div id="c1065" className="col col-sm-12 col-lg-5 col-md-6">
                                <div id="m2895" className="module text">
                                    <h2 className="headline" style={{textAlign: "left"}}>
                                        Emergency Dentistry
                                    </h2>
                                </div>
                                <div id="m2102" className="module text">
                                    <p className="bodytext" style={{textAlign: "left"}}>
                                        We have scheduled appointments available to personalize and
                                        provide you the most adequate treatment possible based on your
                                        emergency. (Exam and radiographs necessary with most emergency
                                        visits.)
                                    </p>
                                </div>
                                <div id="m1781" className="module text">
                                    <h2 className="headline" style={{textAlign: "left"}}>
                                        Extractions
                                    </h2>
                                </div>
                                <div id="m2267" className="module text">
                                    <p className="bodytext" style={{textAlign: "left"}}>
                                        We perform extractions for a variety of needs including
                                        pre-orthodontia.
                                    </p>
                                </div>
                            </div>
                            <div id="c1948" className="col col-sm-12 col-lg-5 col-md-6">
                                <div id="m4402" className="module text">
                                    <h3 className="subtitle" style={{textAlign: "left"}}>
                                        &nbsp;Learn More About Tooth Extractions
                                    </h3>
                                </div>
                                <div id="m3556" className="module video " data-req="video">
                                    <div className="cookieconsent-optin-marketing mono-video-wrapper">
                                        <div
                                            className="fluid-width-video-wrapper"
                                        >
                                            <iframe
                                                id="player_m3556"
                                                title="YouTube video player"
                                                data-videotype="youtube"
                                                data-req="ext-//www.youtube.com/iframe_api"
                                                src="https://www.youtube.com/embed/X2bHz3noTWo?enablejsapi=1&playerapiid=player_m3556"
                                                style={{border: 0}}
                                                allowFullScreen
                                                name="fitvid0"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-sm-12 col-md-1 hidden-sm hidden-md flexCol">
                                <div id="m3974" className="module autospacer"/>
                            </div>
                        </div>
                    </div>
                    <div id="r4222" className="row ">
                        <div className="container container-fixed">
                            <PhilipsAd/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

