import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
    return (
        <div className="container mx-auto p-6">
            <section className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h1>
                <p className="text-lg text-gray-600">
                    Coming soon!
                </p>
            </section>
            <section className="text-center">
                <Link
                to="/contact"
                className="inline-block rounded-lg bg-blue-500 px-6 py-3 text-xl text-white transition hover:bg-blue-600"
                >
                Contact Me
                </Link>
            </section>
        </div>
    );
}