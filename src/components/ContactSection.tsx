import ContactForm from "@components/Forms/ContactForm";
import {sendContactFormEmail} from "../actions/emailActions";
import React from "react";

export function ContactSection() {
    return <div
        id="r3893"
        className="row "
        data-req="parallax,parallax,parallax,parallax,parallax,parallax,parallax,parallax,parallax,parallax,parallax,parallax,parallax,parallax"
        style={{
            backgroundPosition: "100% 143.727px",
            backgroundAttachment: "fixed"
        }}
    >
        {" "}
        <div className="container container-fixed colsStack">
            <div id="c2542" className="col col-sm-12 col-lg-6 col-md-7 flexCol">
                <div id="m1056" className="module autospacer"/>
                {" "}
                <div className="flexWrap">
                    {" "}
                    <div id="m4594" className="module text">
                        <p className="darkspottext" style={{textAlign: "left"}}>
                            Send us a message
                        </p>
                    </div>
                </div>
                <ContactForm sendForm={sendContactFormEmail}/>
            </div>
            {" "}
            <div className="col col-sm-12 hidden-sm col-lg-5 col-md-4 flexCol">
                <div id="m1509" className="module autospacer"/>
                {" "}
            </div>
            {" "}
        </div>
        {" "}
    </div>

}
