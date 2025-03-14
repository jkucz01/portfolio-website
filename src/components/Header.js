import React from "react";

import gradPhoto from "../assets/grad-personal-photo.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
    return (
        <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <img 
                src={gradPhoto} 
                alt="Personal Photo" 
                className="h-16 w-16 rounded-full object-cover"
            />
            <h1 className="text-2xl font-bold flex-grow text-center">
                Jacob Kuczynski
            </h1>
            <nav className="flex space-x-4">
                <a href="https://github.com/jkucz01/"><FontAwesomeIcon icon={faGithub} /><b> GitHub</b></a>
                <a href="https://www.linkedin.com/in/jacob-kuczynski/"><FontAwesomeIcon icon={faLinkedin} /><b> LinkedIn</b></a>
            </nav>
        </header>
        
    )
}