import React from 'react';
import { FaEnvelope, FaTwitter, FaLinkedin } from 'react-icons/fa';

const ContactComp = () => {
    return (
        <section id="contact" className="py-24 ">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Contact</h2>
                <div className="space-y-6 mb-12">
                    <p className="text-xl">
                        Need help with ML/AI Engineering, Architecture or Simulation?
                    </p>
                    <p className="text-lg text-gray-300">
                        I generally keep some slack in my schedule to help on interesting projects.
                    </p>
                </div>
                <div className="flex justify-center items-center space-x-8 mb-12">
                    <a href="mailto:c" className="flex items-center text-lg hover:text-blue-400 transition-colors duration-300">
                        <FaEnvelope className="mr-2" />
                        Email me
                    </a>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg hover:text-blue-400 transition-colors duration-300">
                        <FaTwitter className="mr-2" />
                        Twitter
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg hover:text-blue-400 transition-colors duration-300">
                        <FaLinkedin className="mr-2" />
                        LinkedIn
                    </a>
                </div>
                <p className="text-sm text-gray-400 italic">
                    For my sins, I'm also pretty active on Twitter and LinkedIn
                </p>
            </div>
        </section>
    );
}

export default ContactComp;
