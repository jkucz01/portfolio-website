import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";


export default function Contact() {
    const [copiedText, setCopiedText] = useState("");

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopiedText(text);
        setTimeout(() => setCopiedText(""), 2000);
    };

    return (
    <div className="container mx-auto p-6">
      <section className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">Contact Me</h1>
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
            className="inline-flex items-center text-blue-500 transition hover:text-blue-700"
        >
            <FontAwesomeIcon icon={faLinkedin} className="mr-2" /> LinkedIn Profile
        </a>
        </div>
        <div className="relative flex items-center justify-center space-x-2">
          
          <button
            onClick={() => copyToClipboard("jkucz@berkeley.edu")}
            className="rounded bg-white px-3 py-1 text-black transition hover:bg-gray-100"
            >
            <p className="text-gray-600">Email: jkucz@berkeley.edu  <FontAwesomeIcon icon={faCopy} />
            </p>
          </button>
          {copiedText === "jkucz@berkeley.edu" && (
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 rounded bg-blue-500 px-2 py-1 text-xs text-white">
                    Copied!
                </div>
            )}
        </div>

        <div className="relative flex items-center justify-center space-x-2">
          
          <button
            onClick={() => copyToClipboard("(603) 475-5813")}
            className="rounded bg-white px-3 py-1 text-black transition hover:bg-gray-100"
            >
            <p className="text-gray-600">Mobile: (603) 475-5813 <FontAwesomeIcon icon={faCopy} />
            </p>
          </button>
          {copiedText === "(603) 475-5813" && (
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 rounded bg-blue-500 px-2 py-1 text-xs text-white">
                    Copied!
                </div>
            )}
        </div>
      </section>
    </div>
  );
}
