import React from "react";

import BackButton from "../../components/BackButton";
import FlyderbotSlideshow from "../../components/FlyderbotSlideshow";

export default function FlyderBot() {
    return (
        <div className="container mx-auto p-6">
            <h1 className="mb-4 text-3xl font-bold text-gray-700">FlyderBot: Autonomous Wall Climbing Robot</h1>
            <img 
                src="/projects/flyderbot.png" 
                alt="FlyderBot Robot" 
                className="mx-auto mb-6 w-full max-w-md rounded-lg"
            />
            <section className="py-6 text-center">
            <a 
                href="https://github.com/EE149-Group-16/FlyderBot"
                className="text-blue-500 transition hover:text-blue-700"
                target="_blank" 
                rel="noopener noreferrer"> Link to GitHub Repo. 
            </a> 
            </section>
            
            <p className="mb-4 text-lg text-gray-600">
                FlyderBot is an autonomous wall-climbing robot that runs on a Raspberry Pi Pico. 
                It features two drone propellers mounted on servo-actuated rotating axes. The robot 
                uses an ultrasonic sensor to measure its distance from the wall, encoders for speed control, 
                and an IMU for tilt sensing.
            </p>
            <h2 className="text-xl font-bold text-gray-700">Project Poster PDF:</h2>
            <div className="flex flex-col items-center py-10">
                <div className="h-60 w-80 cursor-pointer overflow-hidden border border-gray-300 shadow-lg">
                    <a 
                        href="/projects/FlyderBot-Poster.pdf" 
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <img 
                            src="/projects/FlyderBot-poster.jpg" 
                            alt="Poster preview" 
                            className="size-full object-cover"
                        />
                    </a>
                </div>
            </div>
            <p className="text-lg text-gray-600">
                The FlyderBot is designed to autonomously transition from the floor to the wall 
                and back down, showcasing advanced motion control and precise sensor integration.
            </p>
            <section className="py-8 text-center">
                <FlyderbotSlideshow />
            </section>
            <section className="py-8 text-center">
                <BackButton />
            </section>
        </div>
    );
}