import React from "react";

export default function Resume() {
    return (
        <div className="flex flex-col items-center">
            <div className="h-80 w-60 cursor-pointer overflow-hidden border border-gray-300 shadow-lg">
                <a 
                    href="/resume/resume.pdf" 
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <img 
                        src="/resume/resume.jpg" 
                        alt="Resume Preview" 
                        className="size-full object-cover"
                    />
                </a>
            </div>
        </div>
    );
}