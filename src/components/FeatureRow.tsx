import React from 'react';
import Image from "next/image";
import AnimationWrapper from "@components/Animation/AnimationWrapper";
import {SiteVariables} from "@util/editable";
import Editable from "@components/Editable/Editable";

interface FeatureRowProps {
    headlineVar: keyof SiteVariables
    headline: string,
    bodyVar: keyof SiteVariables,
    body: string,
    buttonText: string,
    buttonHref: string,
    imgSrc: string,
    className?: string
    reverse?: boolean,
}

const FeatureRow: React.FC<FeatureRowProps> = ({
                                                   headline,
                                                   headlineVar,
                                                   body,
                                                   bodyVar,
                                                   buttonText, buttonHref, imgSrc,
                                                   className = "", reverse = false
                                               }) => (
    <div className={className + " row"}>
        <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse " : ""}`}>
            <div className="col col-sm-12 col-md-6 col-lg-6 flexCol">
                <div className="module autospacer"/>
                <div className="flexWrap">
                    <div className="module text">
                        <p className="headline">
                            <Editable name={headlineVar}>
                                {headline}
                            </Editable>
                        </p>
                    </div>
                    <div className="module text">
                        <p className="bodytext">
                            <Editable name={bodyVar}>
                                {body}
                            </Editable>
                        </p>
                    </div>
                    <AnimationWrapper method='zoom-in'>
                        <a className="button2 mt-4" href={buttonHref} role="button">
                            <span className="buttonLabel labelRight font-bold">{buttonText}</span>
                        </a>
                    </AnimationWrapper>
                </div>
                <div className="module autospacer"/>
            </div>
            <div className="col col-sm-12 col-md-6 col-lg-6 flexCol min-h-64">
                <div className="module autospacer"/>
                <Image src={imgSrc} alt={imgSrc} fill
                       style={{objectFit: "cover"}}
                />
            </div>
        </div>
    </div>
);

export default FeatureRow;

