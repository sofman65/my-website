"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

function NavBar() {
    const [navbar, setNavbar] = useState(false);

    // Lock scrolling when navbar is open on mobile
    useEffect(() => {
        if (navbar) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [navbar]);

    return (
        <div className="border border-gray-600 rounded-lg shadow-lg z-5">
            <nav className="w-full fixed top-0 left-0 right-0 z-10 bg-gray-900 bg-opacity-80 backdrop-blur-lg">
                <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            {/* LOGO */}
                            <Link href="/">
                                <h2 className="text-2xl font-bold bg-gradient-to-br from-indigo-400 via-blue-500 to-teal-400 text-transparent bg-clip-text">Sof Lam Space</h2>
                            </Link>

                            {/* HAMBURGER BUTTON FOR MOBILE */}
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-300 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <Image src="/close.svg" width={30} height={30} alt="close menu" />
                                    ) : (
                                        <Image
                                            src="assets/hamburger-menu.svg"
                                            width={30}
                                            height={30}
                                            alt="open menu"
                                        />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                                }`}
                        >
                            <ul className="h-screen md:h-auto items-center justify-center md:flex">
                                <li className="pb-6 text-xl text-gray-300 py-5 px-6 text-center border-b-2 md:border-b-0 hover:border-gray-500 hover:text-blue-400 transition-all duration-300 ease-in-out">
                                    <Link href="/blog" onClick={() => setNavbar(false)}>
                                        Blog
                                    </Link>
                                </li>
                                <li className="pb-6 text-xl text-gray-300 py-5 px-6 text-center border-b-2 md:border-b-0 hover:border-gray-500 hover:text-blue-400  transition-all duration-300 ease-in-out">
                                    <Link href="/projects" onClick={() => setNavbar(false)}>
                                        Projects
                                    </Link>
                                </li>
                                <li className="pb-6 text-xl text-gray-300 py-5 px-6 text-center border-b-2 md:border-b-0 hover:border-gray-500 hover:text-blue-400  transition-all duration-300 ease-in-out">
                                    <Link href="/" onClick={() => setNavbar(false)}>
                                        Github
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
