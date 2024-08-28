import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '../../custom_components/email-template'; // Adjust the path as necessary
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        // Extract name, email, and message from the request body
        const { name, email, message } = await request.json();

        // Create the email content using the EmailTemplate component
        const emailContent = React.createElement(EmailTemplate, { name, email, message });

        // Send the email using Resend
        const { data, error } = await resend.emails.send({
            from: 'Your Name <youremail@example.com>', // Replace with a valid email address
            to: ['sofianos.lampropoulos@gmail.com'], // Replace with your email
            subject: "New Contact Form Submission",
            react: emailContent,
        });

        if (error) {
            console.error('Resend API Error:', error);
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error('Unexpected Error:', error);
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}
