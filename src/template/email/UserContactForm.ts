import Mail from 'nodemailer/lib/mailer';

export interface UserContactFormEmailData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    service: string;
    comments: string;
}

export default function UserContactFormEmail(
    {
        firstName, lastName, email, phone, service, comments,
    }: UserContactFormEmailData
): Mail.Options {
    const subject = `Contact Request - ${firstName} ${lastName}`;
    const html = `<p>A contact request was submitted</p>

<p>Form Info</p>
<p>Name: ${firstName} ${lastName}</p>
<p>Email: ${email}</p>
<p>Phone: ${phone}</p>
<p>Service: ${service}</p>
<p>Comments:</p>
<p>${comments}</p>
`;

    const text = html.replace(/<[^>]*>/g, '');

    return {
        to: process.env.EMAIL_ADMIN,
        subject,
        html,
        text,
    };
}
