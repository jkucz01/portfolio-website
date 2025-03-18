import React from "react";
import { Link } from "react-router-dom";

export default function ContactButton() {
    return (
        <Link
          to="/contact"
          className="inline-block rounded-lg bg-blue-500 px-6 py-3 text-xl text-white transition hover:bg-blue-600"
        >
            Contact Me
        </Link>
    );
}