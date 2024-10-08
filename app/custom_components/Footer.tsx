import React from "react";
import SocialMediaLinks from "@/app/custom_components/SocialMediaLinks"; // Ensure this path is correct
import Link from "next/link"; // Import the Link component from Next.js

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <h2 className="text-xl md:text-2xl font-semibold">Sofianos Lampropoulos</h2>
                    <p className="text-sm mt-2">
                        Full Stack Developer & AI Specialist
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                        © {new Date().getFullYear()} Sofianos Lampropoulos. All Rights Reserved.
                    </p>
                    {/* Add the Privacy Policy link here */}
                    <p className="text-xs text-gray-400 mt-2 hover:underline">
                        <Link href="/privacy-policy">
                            Privacy Policy
                        </Link>
                    </p>
                </div>
                <div className="flex space-x-6 justify-center md:justify-start">
                    <SocialMediaLinks />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
