'use server';

import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import UserContactFormEmail, {UserContactFormEmailData} from "../template/email/UserContactForm";

const {SMTP_SERVER_HOST} = process.env;
const {SMTP_SERVER_USERNAME} = process.env;
const {SMTP_SERVER_PASSWORD} = process.env;
const EMAIL_ADMIN = process.env.NEXT_PUBLIC_EMAIL_ADMIN;
const EMAIL_BCC = process.env.NEXT_PUBLIC_EMAIL_BCC;
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: SMTP_SERVER_HOST,
    port: 587,
    secure: true,
    auth: {
        user: SMTP_SERVER_USERNAME,
        pass: SMTP_SERVER_PASSWORD,
    },
});

export interface MailResult {
    status: 'success' | 'error';
    message: string;
}

export async function sendContactFormEmail(formData: UserContactFormEmailData): Promise<MailResult> {
    const template = UserContactFormEmail(formData);
    const {status, message} = await sendMail(template);
    return {
        status,
        message: status ? "Thank you for your request. You will hear from us shortly" : `Error sending contact form: ${message}`,
    }
}

export async function sendMail(options: Mail.Options): Promise<MailResult> {
    const email = `${options.to}`;
    const subject = `${options.subject}`;
    if (!email) {
        return {status: 'error', message: `Invalid recipient email: ${JSON.stringify(options)}`};
    }
    if (!subject) {
        return {status: 'error', message: `Invalid subject: ${JSON.stringify(options)}`};
    }

    const isVerified = await transporter.verify();

    const testMode = process.env.TEST_MODE !== 'false';
    if (!testMode) {
        const info = await transporter.sendMail({
            from: EMAIL_ADMIN,
            bcc: EMAIL_BCC,
            ...options
        });
        console.log('Mail sent to', email, `verified=${isVerified}`, info.messageId);
    } else {
        console.log('TEST MODE: No actual mail was sent', `verified=${isVerified}`, subject);
    }

    return {
        status: 'success',
        message: testMode
            ? `TEST MODE: ${subject}`
            : `Email sent: ${subject}`,
    };
}
