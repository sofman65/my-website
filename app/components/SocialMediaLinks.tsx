import React from "react";
import { FaLinkedin, FaGithub, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";

const SocialMediaLinks = () => {
    return (
        <div className="flex space-x-4 text-lg md:text-2xl">
            <a href="https://www.linkedin.com/in/sofianoslampropoulos" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                <FaLinkedin />
            </a>
            <a href="https://github.com/sofman65" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500">
                <FaGithub />
            </a>
            <a href="https://www.youtube.com/user/yourchannel" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500">
                <FaYoutube />
            </a>
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
                <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500">
                <FaTiktok />
            </a>
        </div>
    );
};

export default SocialMediaLinks;
