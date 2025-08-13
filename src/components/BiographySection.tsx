import React from 'react';
import Image from "next/image";

const BiographySection: React.FC = () => (
    <div id="r2987" className="row ">
        <div className="container container-fixed colsStack">
            <div className="col col-sm-12 col-lg-3 col-md-4">
                <div className="imageModuleWrap" id="w_m1265">
                    <Image
                        src="/uploads/img/download-1.png"
                        alt="This is your alt tag"
                        width={210}
                        height={293}
                        className="module image"
                    />
                </div>
            </div>
            <div className="col col-sm-12 col-lg-9 col-md-8">
                <div className="module text">
                    <p className="headline">Friendly &amp; Inviting</p>
                </div>
                <div className="module text">
                    <p className="bodytext">
                        Dr. Skinner is a Savannah native. After high school, she studied Math and Engineering at
                        Armstrong State University, graduating with her B.S. in Mathematical Sciences in 1992. She then
                        continued her education at Medical College of Georgia, graduating with her Doctorate of Dental
                        Medicine in 1996. She has been practicing a total of 22 years.
                    </p>
                    <p className="bodytext">&nbsp;</p>
                    <p className="bodytext">
                        Stephanie has one son, Thomas, who loves to keep her on her toes. They love quizzing each other
                        on random trivia knowledge, and out-witting each other every chance they get. She also has
                        multiple nieces and nephews that she loves spending family time with.
                    </p>
                    <p className="bodytext">&nbsp;</p>
                    <p className="bodytext">
                        Dr. Skinner strives to care for her patients as she would her own family, and is committed to
                        providing the highest quality dental care in a comfortable and friendly environment.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default BiographySection;

