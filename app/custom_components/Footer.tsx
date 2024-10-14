import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">SPACESLAM</h3>
            <p className="text-sm">Exploring the frontiers of AI-powered entrepreneurship and innovation.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0 flex justify-center items-center">
            <Image
              src="/assets/LOGO TYPE.png"
              alt="SpaceSlam Logo"
              width={200} // Adjust width as needed
              height={50} // Adjust height as needed
              objectFit="contain"
            />
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Connect</h3>
            <ul className="text-sm">
              <li>
                <Link href="https://twitter.com/yourusername" className="hover:text-blue-400 transition-colors">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com/in/yourusername" className="hover:text-blue-400 transition-colors">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://github.com/yourusername" className="hover:text-blue-400 transition-colors">
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          © {new Date().getFullYear()} SPACESLAM. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
