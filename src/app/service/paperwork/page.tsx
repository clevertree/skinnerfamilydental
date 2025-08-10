import React from 'react';
import type {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Paperwork | Stephanie L. Skinner D.M.D. Family Dentistry',
};

export default function PaperworkPage() {
  return (
      <div id="r5002" role="main" className="row designRow">
        <div id='p5774' className="container container-fluid">
          <div className="col col-sm-12">
            <div id="r2801" className="row bgfilter">
              <div className="container container-fixed">
                <div id="c2555" className="col col col-sm-1 hidden-sm"/>
                <div id="c3294" className="col col-lg-10 col-md-10 col-sm-12">
                  <div id="m3261" className="module text">
                    <h1 className="spottext" style={{textAlign: "center"}}>
                      Patient Paperwork
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          <div className="col col-sm-12">
                  <div id="m4150" className="module html">
                    <iframe src="/uploads/files/NewPatientRegistrationForms.pdf" width="100%" height="500px" title="New Patient Registration Forms" />
                  </div>
              </div>
        </div>
      </div>
    </div>
  );
}
