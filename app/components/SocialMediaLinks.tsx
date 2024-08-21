import { FaInstagram, FaTiktok, FaYoutube, FaLinkedin } from "react-icons/fa";

const SocialMediaLinks = () => {
    return (
        <div className="flex justify-center space-x-6 mt-4">
            <a href="https://www.instagram.com/sof_lam" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-white text-3xl hover:text-pink-500" />
            </a>
            <a href="https://www.tiktok.com/@ygeneratedbyhumans" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="text-white text-3xl hover:text-black" />
            </a>
            <a href="https://www.youtube.com/channel/yourchannelid" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-white text-3xl hover:text-red-600" />
            </a>
            <a href="https://www.linkedin.com/in/sofianos-lampropoulos" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-white text-3xl hover:text-blue-600" />
            </a>
        </div>
    );
};

export default SocialMediaLinks;
