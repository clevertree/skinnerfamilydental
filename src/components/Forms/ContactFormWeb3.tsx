'use client'

import React from "react";
import {Alert, Box, Button, MenuItem, TextField} from "@mui/material";

const web3AccessKey = process.env.NEXT_PUBLIC_WEB3FORM_ACCESS_KEY;

const serviceOptions = [
    "Cleaning",
    "Filling/Crown",
    "Dentures",
    "Sedation Dentistry",
    "Emergency Service",
];

export default function ContactFormWeb3() {
    return <>
        {!web3AccessKey && <Alert severity='error'>Invalid web3 access key</Alert>}
        <Box>
            <Box component="form" action="https://api.web3forms.com/submit"
                 method="POST"
                 sx={{mt: 2}}>
                <input type="hidden" name="access_key" value={web3AccessKey}/>
                <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-4">
                        <TextField
                            required
                            fullWidth
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            autoComplete="on"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-2 mb-4">
                        <TextField
                            required
                            fullWidth
                            id="lastName"
                            name="lastName"
                            label="Last Name"
                            autoComplete="on"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-2 mb-4">
                        <TextField
                            required
                            fullWidth
                            id="email"
                            name="email"
                            label="Email"
                            type="email"
                            autoComplete="email"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-2 mb-4">
                        <TextField
                            required
                            fullWidth
                            id="phone"
                            name="phone"
                            label="Phone"
                            type="tel"
                            autoComplete="tel"
                        />
                    </div>
                    <div className="w-full px-2 mb-4">
                        <TextField
                            select
                            fullWidth
                            id="service"
                            name="service"
                            label="Desired Service"
                            required
                        >
                            <MenuItem value="" disabled>
                                Select option
                            </MenuItem>
                            {serviceOptions.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div className="w-full px-2 mb-4">
                        <TextField
                            fullWidth
                            id="comments"
                            name="comments"
                            label="Comments"
                            multiline
                            minRows={3}
                        />
                    </div>
                </div>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{mt: 3}}
                    className="button"
                >
                    SUBMIT
                </Button>
            </Box>
        </Box>
    </>
}
