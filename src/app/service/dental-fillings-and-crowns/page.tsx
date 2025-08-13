import React from 'react';
import Image from 'next/image';
import {Metadata} from "next";
import {buildMetaData} from "@util/metadata";

export const metadata: Metadata = buildMetaData("Dental Fillings and Crowns");

export default function DentalFillingsAndCrownsPage() {
    return (
        <div>
            <div id="r5002" className="row designRow">
                <div id='p9775' className="container container-fluid">
                    <div className="col col-sm-12">
                        <div id="r2801" className="row bgfilter">
                            <div className="container container-fixed">
                                <div id="c2555" className="col col col-sm-1 hidden-sm"></div>
                                <div id="c3294" className="col col-lg-10 col-md-10 col-sm-12">
                                    <div id="m3261" className="module text">
                                        <h1 className="spottext" style={{textAlign: 'center'}}>Dental Fillings and
                                            Crowns</h1>
                                    </div>
                                </div>
                                <div id="c4032" className="col col col-sm-1 hidden-sm"></div>
                            </div>
                        </div>
                        <div id="r1575" className="row ">
                            <div className="container container-fixed colsStack">
                                <div className="col col-sm-12 col-md-6 col-lg-1 hidden-md hidden-sm flexCol">
                                    <div id="m2069" className="module autospacer"></div>
                                </div>
                                <div id="c5190" className="col col-lg-10 col-sm-12 col-md-12">
                                    <div id="m4069" className="module text">
                                        <h2 className="headline" style={{textAlign: 'left'}}>Dental Fillings and
                                            Crowns</h2>
                                    </div>
                                    <div id="m1572" className="module text">
                                        <p className="bodytext" style={{textAlign: 'left'}}>
                                            We offer a variety of treatment options and materials to suit personal
                                            cosmetic preference as well as the best treatment for your personal dental
                                            care. Tooth colored fillings, veneers, and full coverage porcelain crowns
                                            are some of the available options.
                                        </p>
                                    </div>
                                </div>
                                <div className="col col-sm-12 hidden-sm col-md-1 col-lg-1 hidden-md flexCol">
                                    <div id="m1026" className="module autospacer"></div>
                                </div>
                                <div className="col col-sm-12 col-md-6 col-lg-1 hidden-md hidden-sm flexCol">
                                    <div id="m2039" className="module autospacer"></div>
                                </div>
                                <div id="c2552" className="col col-sm-12 col-md-6 col-lg-5 flexCol">
                                    <div className="flexWrap">
                                        <div id="m2407" className="module text">
                                            <h3 className="subtitle" style={{textAlign: 'left'}}>&nbsp;Learn More About
                                                Bridges</h3>
                                        </div>
                                    </div>
                                    <div id="m1949" className="module autospacer"></div>
                                    <div className="flexWrap">
                                        <div id="m1549" className="module video ">
                                            <div className="cookieconsent-optin-marketing mono-video-wrapper">
                                                <iframe id='player_m1549' title='Dental Bridge Video'
                                                        src='https://www.youtube.com/embed/Qr6CpCBnLCQ?enablejsapi=1&playerapiid=player_m1549'
                                                        style={{border: 0}} allowFullScreen/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="c3751" className="col col-sm-12 col-lg-5 col-md-6 flexCol">
                                    <div className="flexWrap">
                                        <div id="m2620" className="module text">
                                            <h3 className="subtitle" style={{textAlign: 'left'}}>&nbsp;Learn More About
                                                Root Canal Therapy</h3>
                                        </div>
                                    </div>
                                    <div id="m3959" className="module autospacer"></div>
                                    <div className="flexWrap">
                                        <div id="m3787" className="module video ">
                                            <div className="cookieconsent-optin-marketing mono-video-wrapper">
                                                <iframe id='player_m3787' title='Root Canal Therapy Video'
                                                        src='https://www.youtube.com/embed/ZRcY7YCzv1U?enablejsapi=1&playerapiid=player_m3787'
                                                        style={{border: 0}} allowFullScreen/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-sm-12 col-md-1 hidden-md hidden-sm flexCol">
                                    <div id="m2038" className="module autospacer"></div>
                                </div>
                            </div>
                        </div>
                        <div id="r4222" className="row ">
                            <div className="container container-fixed">
                                <div id="c5324" className="col col-sm-12 col-md-12">
                                    <div className="imageModuleWrap" id="w_m4580">
                                        <Image src="/uploads/img/Dr.StephanieL.Skinner-FamilyDentistry-025.jpg" alt=""
                                               width={400} height={497}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
