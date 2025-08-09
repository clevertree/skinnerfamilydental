import React from 'react';

export default function PaperworkPage() {
  return (
    <div>
      {/* TODO: Add converted content from service/paperwork.html here */}
      <h1>Patient Paperwork</h1>
      <div id="r5002" role="main" className="row designRow">
        <div className="container container-fluid">
          <div className="col col-sm-12">
            <div id="r3056" className="row ">
              <div className="container container-fixed">
                <div className="col col-sm-12">
                  <div id="m4150" className="module html">
                    <iframe src="/uploads/files/NewPatientRegistrationForms.pdf" width="100%" height="500px" title="New Patient Registration Forms" />
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
