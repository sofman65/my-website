"use client";

import React, { useState } from 'react';

type SubmitStatus = {
    type: 'success' | 'error';
    error?: string;
    name?: string;
    message: string;
};

const ContactComp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
                setFormData({ name: '', email: '', message: '' });
            } else {
                const errorMessage = typeof result.error === 'string' ? result.error : 'Failed to send message. Please try again.';
                console.error(errorMessage);
                setSubmitStatus({ type: 'error', message: errorMessage });
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.';
            setSubmitStatus({ type: 'error', message: errorMessage });
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <section id="contact" className="py-16 text-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 text-center">Contact</h2>
                <p className="text-center mb-8">
                    Feel free to reach out to me for any inquiries, collaborations, or just to say hi!
                </p>
                <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                        <input
                            className="w-full px-3 py-2 text-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                        <input
                            className="w-full px-3 py-2 text-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                        <textarea
                            className="w-full px-3 py-2 text-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            required
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`px-6 py-3 bg-gradient-to-br from-indigo-400 via-blue-500 to-teal-400 text-white rounded-lg shadow-lg hover:bg-blue-400 transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                    {submitStatus && (
                        <div className={`mt-4 text-center ${submitStatus.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                            {submitStatus.message}
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
}

export default ContactComp;
