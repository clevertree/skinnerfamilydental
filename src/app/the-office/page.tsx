import React from 'react';
import type {Metadata} from 'next';
import SlideShow from '@components/SlideShow';

export const metadata: Metadata = {
  title: 'The Office | Stephanie L. Skinner D.M.D. Family Dentistry',
};

export default function TheOfficePage() {
  return (
    <div>
        <div id="r5002" className="row designRow">
        <div id='p8016' className="container container-fluid">
          <div className="col col-sm-12">
            <div id="r4243" className="row bgfilter">
              <div className="container container-fixed">
                <div id="c3477" className="col col col-sm-1 hidden-sm"></div>
                <div id="c2637" className="col col-lg-10 col-md-10 col-sm-12">
                  <div id="m2796" className="module text">
                    <h1 className="spottext" style={{ textAlign: 'center' }}>
                      The Office
                    </h1>
                  </div>
                </div>
                <div id="c1223" className="col col col-sm-1 hidden-sm"></div>
              </div>
            </div>
            <div id="r1870" className="row ">
              <div className="container container-fixed">
                <div className="col col-sm-12 col-md-1 hidden-sm hidden-md flexCol">
                  <div id="m3388" className="module autospacer"></div>
                </div>
                <div id="c8354" className="col col-sm-12 col-lg-10 col-md-12">
                  <div id="m4556" className="module text">
                    <h2 className="headline">Tour Our Office</h2>
                  </div>
                  <div id="m4658" className="module gallery" role="region" aria-label="Slides">
                    <SlideShow
                        images={[
                          {
                            src: '/uploads/imgs/Dr.StephanieL.Skinner-FamilyDentistry-0014.jpg',
                            alt: '',
                            width: 800,
                            height: 646
                          },
                          {
                            src: '/uploads/imgs/Dr.StephanieL.Skinner-FamilyDentistry-0015.jpg',
                            alt: '',
                            width: 800,
                            height: 631
                          },
                          {
                            src: '/uploads/imgs/Dr.StephanieL.Skinner-FamilyDentistry-0016.jpg',
                            alt: '',
                            width: 800,
                            height: 636
                          },
                          {
                            src: '/uploads/imgs/Dr.StephanieL.Skinner-FamilyDentistry-0017.jpg',
                            alt: '',
                            width: 800,
                            height: 636
                          },
                          {
                            src: '/uploads/imgs/Dr.StephanieL.Skinner-FamilyDentistry-0018.jpg',
                            alt: '',
                            width: 800,
                            height: 649
                          },
                          {
                            src: '/uploads/imgs/Dr.StephanieL.Skinner-FamilyDentistry-020.jpg',
                            alt: '',
                            width: 800,
                            height: 636
                          },
                          {
                            src: '/uploads/imgs/Dr.StephanieL.Skinner-FamilyDentistry-021.jpg',
                            alt: '',
                            width: 800,
                            height: 636
                          },
                          {
                            src: '/uploads/imgs/Dr.StephanieL.Skinner-FamilyDentistry-022.jpg',
                            alt: '',
                            width: 800,
                            height: 636
                          },
                          {
                            src: '/uploads/imgs/Dr.StephanieL.Skinner-FamilyDentistry-023.jpg',
                            alt: '',
                            width: 800,
                            height: 636
                          },
                        ]}
                    />
                  </div>
                </div>
                <div className="col col-sm-12 col-md-1 hidden-sm hidden-md flexCol">
                  <div id="m4085" className="module autospacer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
