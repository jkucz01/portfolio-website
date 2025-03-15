import React from "react";

import Navbar from "./Navbar";

import gradPhoto from "../assets/grad-personal-photo.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:h-screen h-auto w-full lg:w-[48%] lg:flex-col lg:justify-between lg:py-24 bg-white shadow-md p-6">
            <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold text-gray-800">Jacob Kuczynski</h1>
                <h2 className="text-lg text-gray-500 mt-2">Embedded Software Engineer</h2>
                <p className="text-sm text-gray-400 mt-1">
                    Empowering Devices with Clean Code and Elegant Design.
                </p>
                <div className="flex justify-center lg:justify-start">
                    <Navbar />
                </div>
                <div className="flex justify-center lg:justify-start mt-8 space-x-4">
                    <a
                        href="https://github.com/jkucz01/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-500 transition"
                    >
                        <FontAwesomeIcon icon={faGithub} /> GitHub
                    </a>
                    <a
                        href="https://github.com/yourgithub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-500 transition"
                    >
                        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                    </a>
                </div>
            </div>
        </header>
    );
}