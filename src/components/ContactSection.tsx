import ContactFormWeb3 from "@components/Forms/ContactFormWeb3";
import React from "react";
import {Paper} from "@mui/material";

export function ContactSection() {
    return <div
        id="r3893"
        className="row "
        style={{
            backgroundColor: '#c8e6ee',
            backgroundPosition: "60% 143.727px",
            backgroundAttachment: "fixed"
        }}
    >
        <Paper className='m-8 p-8 max-w-[40rem]'>
            <div className="flexWrap">
                {" "}
                <div id="m4594" className="module text">
                    <p className="darkspottext" style={{textAlign: "left"}}>
                        Send us a message
                    </p>
                </div>
            </div>
            <ContactFormWeb3/>
        </Paper>
    </div>

}
