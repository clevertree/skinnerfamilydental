'use client'

import React, {useState} from "react";
import {Alert, AlertColor, Box, Button, MenuItem, TextField, Typography} from "@mui/material";
import {UserContactFormEmailData} from "@template/email/UserContactForm";

const serviceOptions = [
    "Cleaning",
    "Filling/Crown",
    "Dentures",
    "Sedation Dentistry",
    "Emergency Service",
];

export interface ContactFormProps {
    sendForm(formData: UserContactFormEmailData): Promise<{ status: 'success' | 'error'; message: string }>;
}

function ContactForm({sendForm}: ContactFormProps) {
    const [status, setStatus] = useState<'ready' | 'submitting' | 'success' | 'error'>('ready');
    const [message, setMessage] = useState<[AlertColor, string]>(['info', 'Please submit this form to contact the office.']);

    const [formData, setFormData] = useState<UserContactFormEmailData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        comments: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, service: e.target.value});
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            const {status, message} = await sendForm(formData)
            setMessage([status, message]);
            setStatus(status);
        } catch (e: unknown) {
            if (e instanceof Error) {
                setMessage(['error', e.message]);
                setStatus('ready');
            }
        }
    };

    return (
        <Box>
            <Typography variant="h6" className="bodytext" gutterBottom>
                Contact our dental office in Savannah, GA, to schedule an appointment for routine cleanings or emergency
                services today.
            </Typography>
            {message && message[1] && (
                <Alert severity={message[0]}>
                    {message[1]}
                </Alert>
            )}
            <Box component="form" onSubmit={handleSubmit} sx={{mt: 2}}>
                <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-4">
                        <TextField
                            required
                            fullWidth
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            autoComplete="on"
                            value={formData.firstName}
                            onChange={handleChange}
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
                            value={formData.lastName}
                            onChange={handleChange}
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
                            value={formData.email}
                            onChange={handleChange}
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
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-full px-2 mb-4">
                        <TextField
                            select
                            fullWidth
                            id="service"
                            name="service"
                            label="Desired Service"
                            value={formData.service}
                            onChange={handleSelect}
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
                            value={formData.comments}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{mt: 3}}
                    className="button"
                    disabled={status !== 'ready'}
                >
                    SUBMIT
                </Button>
            </Box>
        </Box>
    );
}

export default ContactForm;
