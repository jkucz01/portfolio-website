import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Navbar from "./Navbar";

export default function Header() {
    return (
        <header className="h-auto w-full bg-white p-6 shadow-md lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
            <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold text-gray-800">Jacob Kuczynski</h1>
                <h2 className="mt-2 text-lg text-gray-500">Embedded Software Engineer</h2>
                <p className="mt-1 text-sm text-gray-400">
                    Empowering Devices with Clean Code and Elegant Design.
                </p>
                <div className="flex justify-center lg:justify-start">
                    <Navbar />
                </div>
                <div className="mt-8 flex justify-center space-x-4 lg:justify-start">
                    <a
                        href="https://github.com/jkucz01/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 transition hover:text-blue-500"
                    >
                        <FontAwesomeIcon icon={faGithub} /> GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jacob-kuczynski/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 transition hover:text-blue-500"
                    >
                        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                    </a>
                </div>
            </div>
        </header>
    );
}