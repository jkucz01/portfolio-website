import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center h-16">
                    <div className="flex space-x-8">
                        <Link to="/" className="text-gray-600 hover:text-blue-500 transition">
                            Home
                        </Link>
                        <Link to="/education" className="text-gray-600 hover:text-blue-500 transition">
                            Education
                        </Link>
                        <Link to="/experience" className="text-gray-600 hover:text-blue-500 transition">
                            Experience
                        </Link>
                        <Link to="/projects" className="text-gray-600 hover:text-blue-500 transition">
                            Projects
                        </Link>
                        <Link to="/about" className="text-gray-600 hover:text-blue-500 transition">
                            About Me
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}