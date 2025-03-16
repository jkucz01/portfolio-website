import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";


export default function Contact() {

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert("Copied: {text}");
    };
    return (
    <div className="container mx-auto p-6">
      <section className="mb-12 text-center">
        <p className="text-lg text-gray-600">
          I am currently open to Embedded Software Engineering and similar roles. 
          Please click one of the links below to contact me. 
          Send me a message on LinkedIn for any job opportunities, or send me an email 
          if you would like to work with me!
        </p>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-center space-x-2">
        <a
            href="https://www.linkedin.com/in/jacob-kuczynski/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-500 hover:text-blue-700 transition"
        >
            <FontAwesomeIcon icon={faLinkedin} className="mr-2" /> LinkedIn Profile
        </a>
        </div>
        <div className="flex items-center justify-center space-x-2">
          
          <button
            onClick={() => copyToClipboard("jkucz@berkeley.edu")}
            className="bg-white text-black px-3 py-1 rounded hover:bg-gray-100 transition"
            >
            <p className="text-gray-600">Email: jkucz@berkeley.edu  <FontAwesomeIcon icon={faCopy} />
            </p>
          </button>
        </div>

        <div className="flex items-center justify-center space-x-2">
          
          <button
            onClick={() => copyToClipboard("(603) 475-5813")}
            className="bg-white text-black px-3 py-1 rounded hover:bg-gray-100 transition"
            >
            <p className="text-gray-600">Mobile: (603) 475-5813 <FontAwesomeIcon icon={faCopy} />
            </p>
          </button>
        </div>
      </section>
    </div>
  );
}
