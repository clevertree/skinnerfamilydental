import React from 'react';
import PhilipsAd from "@app/frag/philipsAd";

export default function DentalHygienePage() {
    return (
        <div>
            {/* TODO: Add converted content from service/dental-hygiene.html here */}
            <div id="r5002" role="main" className="row designRow">
                <div id='p6314' className="container container-fluid">
                    <div className="col col-sm-12">
                        <div id="r2801" className="row bgfilter">
                            <div className="container container-fixed">
                                <div id="c2555" className="col col col-sm-1 hidden-sm"></div>
                                <div id="c3294" className="col col-lg-10 col-md-10 col-sm-12">
                                    <div id="m3261" className="module text">
                                        <h1 className="spottext" style={{textAlign: 'center'}}>Dental Hygiene</h1>
                                    </div>
                                </div>
                                <div id="c4032" className="col col col-sm-1 hidden-sm"></div>
                            </div>
                        </div>
                        <div id="r1870" className="row ">
                            <div className="container container-fixed">
                                <div className="col col-sm-12 col-lg-2 col-md-1 hidden-sm flexCol">
                                    <div id="m4464" className="module autospacer"></div>
                                </div>
                                <div id="c8354" className="col col-sm-12 col-lg-8 col-md-10">
                                    <div id="m4556" className="module text">
                                        <h2 className="headline" style={{textAlign: 'center'}}>Dental Hygiene</h2>
                                    </div>
                                    <div id="m4726" className="module text">
                                        <p className="bodytext" style={{textAlign: 'center'}}>
                                            Routine prophylaxis appointments are available for the whole family.
                                            Treatment planning and maintenance options are reviewed at every cleaning to
                                            keep you up to date on all your dental needs, and help keep you smiling!
                                        </p>
                                    </div>
                                </div>
                                <div className="col col-sm-12 col-lg-2 col-md-1 hidden-sm flexCol">
                                    <div id="m2999" className="module autospacer"></div>
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
        </div>
    );
}
