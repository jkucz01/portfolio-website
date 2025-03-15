import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="mt-8">
            <ul className="flex flex-row lg:flex-col lg:space-y-4 space-x-4 lg:space-x-0 text-lg">
                <li><Link to="/" className="hover:text-blue-500 transition">Home</Link></li>
                <li><Link to="/education" className="hover:text-blue-500 transition">Education</Link></li>
                <li><Link to="/experience" className="hover:text-blue-500 transition">Experience</Link></li>
                <li><Link to="/projects" className="hover:text-blue-500 transition">Projects</Link></li>
                <li><Link to="/contact" className="hover:text-blue-500 transition">Contact</Link></li>
            </ul>
        </nav>
    )
}

