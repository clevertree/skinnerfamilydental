import React from 'react';

export default function ContactPage() {
  return (
    <div>
      <div id="r5002" role="main" className="row designRow">
        <div id="p6792" className="container container-fluid">
          <div className="col col-sm-12">
            <div id="r1041" className="row bgfilter">
              <div className="container container-fixed">
                <div id="c3797" className="col col-sm-1 hidden-sm flexCol">
                  <div id="m1385" className="module autospacer"></div>
                </div>
                <div id="c1361" className="col col-lg-10 col-md-10 col-sm-12">
                  <div id="m3350" className="module text"><h1 className="spottext" style={{textAlign: 'center'}}>Contact</h1></div>
                </div>
                <div id="c1540" className="col col col-sm-1 hidden-sm flexCol">
                  <div id="m4619" className="module autospacer"></div>
                </div>
              </div>
            </div>
            <div id="r3081" className="row ">
              <div className="container container-fixed">
                <div id="c4472" className="col col-md-6 col-sm-12 col-lg-6">
                  <div id="m1433" className="module text"><h2 className="headline">Dr. Stephanie Skinner Family Dentistry&nbsp;</h2></div>
                  <div id="m4777" className="module text"><p className="bodytext">10515 White Bluff Road</p><p className="bodytext">Savannah, GA&nbsp;31406</p></div>
                  <div id="m1411" className="module text"><p className="bodytext">Phone: <a data-global="phone" href="tel:+19129256613" data-track-event="click" data-track-action="phone_link">(912) 925-6613</a></p></div>
                  <div id="m1824" className="module text"><p className="bodytext">Email: <a href="mailto:skinnerdmd@comcast.net" data-track-event="click" data-track-action="email_link">skinnerdmd@comcast.net</a></p></div>
                  <div id="m1657" className="module text"><h2 className="headline">Opening Hours</h2></div>
                  <div className="module openinghours" id="m3666">
                    <p className="day clear bodytext"><span className="dayLabel">Monday</span> <span className="ranges"> <span>08:00 AM - 05:00 PM</span> </span></p>
                    <p className="day clear bodytext"><span className="dayLabel">Tuesday</span> <span className="ranges"> <span>08:00 AM - 05:00 PM</span> </span></p>
                    <p className="day clear bodytext"><span className="dayLabel">Wednesday</span> <span className="ranges"> <span>Closed</span> </span></p>
                    <p className="day clear bodytext"><span className="dayLabel">Thursday</span> <span className="ranges"> <span>08:00 AM - 05:00 PM</span> </span></p>
                    <p className="day clear bodytext"><span className="dayLabel">Friday</span> <span className="ranges"> <span>08:00 AM - 05:00 PM</span> </span></p>
                    <p className="subtitle specialDayTitle"></p>
                  </div>
                  <div id="m2535" className="module text"><p className="bodytext"><span style={{fontWeight: 'bold'}}>*Private/sedation appointments available by request.</span></p></div>
                </div>
                <div id="c3355" className="col col-md-6 col-sm-12 col-lg-6 disabled-component">
                  <div id="m2580" className="module text"><h2 className="bodytext">Contact our dental office in Savannah, GA, to schedule an appointment for routine cleanings or emergency services today.</h2></div>
                  <form method="post" id="m3187" className="module form" data-url="?m=m3187" data-req="form,ext-https://js.hcaptcha.com/1/api.js?onload=formsInitHcaptcha&render=explicit" data-settings="margin=1" data-track-action="custom_form">
                    <div className="fields clear">
                      <div className="field w50 "><label htmlFor="m3187_field_0">First Name*</label>
                        <input type="text" name="field_0" autoComplete="on" id="m3187_field_0" placeholder="" required aria-required="true" />
                      </div>
                      <div className="field w50 "><label htmlFor="m3187_field_1">Last Name *</label>
                        <input type="text" name="field_1" autoComplete="on" id="m3187_field_1" placeholder="" required aria-required="true" />
                      </div>
                      <div className="field w50 "><label htmlFor="m3187_field_2">Email*</label>
                        <input type="email" name="field_2" autoComplete="email" id="m3187_field_2" placeholder="" required aria-required="true" />
                      </div>
                      <div className="field w50 "><label htmlFor="m3187_field_3">Phone *</label>
                        <input type="tel" name="field_3" autoComplete="tel" id="m3187_field_3" placeholder="" required aria-required="true" />
                      </div>
                      <div className="field w100 "><label htmlFor="m3187_field_4">Desired Service</label>
                        <select id="m3187_field_4" name="field_4">
                          <option value="Select option" defaultValue="Select option" disabled>Select option</option>
                          <option value="Cleaning">Cleaning</option>
                          <option value="Filling/Crown">Filling/Crown</option>
                          <option value="Dentures">Dentures</option>
                          <option value="Sedation Dentistry">Sedation Dentistry</option>
                          <option value="Emergency Service">Emergency Service</option>
                        </select>
                      </div>
                      <div className="field w100 "><label htmlFor="m3187_field_5">Comments</label>
                        <textarea name="field_5" id="m3187_field_5" placeholder=""></textarea>
                      </div>
                    </div>
                    <div className="optins clear"></div>
                    {/* hCaptcha and error handling would go here in a real implementation */}
                    <input type="submit" className="button " value="SUBMIT" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
