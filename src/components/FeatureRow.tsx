import React from 'react';
import Image from "next/image";
import AnimationWrapper from "@components/Animation/AnimationWrapper";

interface FeatureRowProps {
    headline: string,
    body: string,
    buttonText: string,
    buttonHref: string,
    imgSrc: string,
    className?: string
    reverse?: boolean,
}

const FeatureRow: React.FC<FeatureRowProps> = ({
                                                   headline, body, buttonText, buttonHref, imgSrc,
                                                   className = "", reverse = false
                                               }) => (
    <div className={className + " row"}>
        <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse " : ""}`}>
            <div className="col col-sm-12 col-md-6 col-lg-6 flexCol">
                <div className="module autospacer"/>
                <div className="flexWrap">
                    <div className="module text">
                        <p className="headline">{headline}</p>
                    </div>
                    <div className="module text">
                        <p className="bodytext">{body}</p>
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

