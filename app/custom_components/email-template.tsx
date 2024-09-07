import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    email: string;
    message: string;

}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    email,
    message,
}) => (
    <div>
        <h1>Welcome, {name}!</h1>
        <p>
            You have a new message from your website's contact form. Here are the details:
        </p>
        <ul>
            <li>
                <strong>Name:</strong> {name}
            </li>
            <li>
                <strong>Email:</strong> {email}
            </li>
            <li>
                <strong>Message:</strong> {message}
            </li>
        </ul>
        <p>Here&apos;s your message: &apos;{message}&apos;</p>
    </div>
);
