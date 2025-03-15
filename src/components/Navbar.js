import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="mt-8">
            <ul className="flex flex-row space-x-4 text-lg lg:flex-col lg:space-x-0 lg:space-y-4">
                <li><Link to="/" className="transition hover:text-blue-500">Home</Link></li>
                <li><Link to="/education" className="transition hover:text-blue-500">Education</Link></li>
                <li><Link to="/experience" className="transition hover:text-blue-500">Experience</Link></li>
                <li><Link to="/projects" className="transition hover:text-blue-500">Projects</Link></li>
                <li><Link to="/contact" className="transition hover:text-blue-500">Contact</Link></li>
            </ul>
        </nav>
    );
}
