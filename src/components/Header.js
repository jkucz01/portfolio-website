import React from "react";

import gradPhoto from "../assets/grad-personal-photo.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
    return (
        <div>
            <img src={gradPhoto} />
            <h1>Jacob Kuczynski</h1>
            <ul>
                <li><a href="https://github.com/jkucz01/"><FontAwesomeIcon icon={faGithub} /><b> GitHub</b></a></li>
                <li><a href="https://www.linkedin.com/in/jacob-kuczynski/"><FontAwesomeIcon icon={faLinkedin} /><b> LinkedIn</b></a></li>
            </ul>
        </div>
        
    )
}