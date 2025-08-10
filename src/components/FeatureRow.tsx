import React from 'react';
import AnimationWrapper from "@components/Animation/AnimationWrapper";

interface FeatureRowProps {
    headline: string;
    body: string;
    buttonText: string;
    buttonHref: string;
}

const FeatureRow: React.FC<FeatureRowProps> = ({headline, body, buttonText, buttonHref}) => (
    <div className="row ">
        <div className="container container-fixed">
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
                        <a className="module button2" href={buttonHref} role="button">
                            <span className="buttonLabel labelRight">{buttonText}</span>
                        </a>
                    </AnimationWrapper>
                </div>
                <div className="module autospacer"/>
            </div>
            <div className="col col-sm-12 col-md-6 col-lg-6 flexCol">
                <div className="module autospacer"/>
            </div>
        </div>
    </div>
);

export default FeatureRow;

