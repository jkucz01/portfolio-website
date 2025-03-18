import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
    return (
        <div className="container mx-auto p-6">
            <section className="mb-12 text-center">
                <h1 className="mb-4 text-4xl font-bold text-gray-800">My Projects</h1>
            </section>
            <section className="mb-12">
                <Link 
                    to="/projects/flyderbot"
                    className="block rounded-lg bg-gray-100 p-6 shadow-md transition hover:bg-gray-200"
                >
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-700">
                        &quot;FlyderBot&quot;
                        <span className="block text-lg font-normal text-gray-500">
                            Autonomous Wall Climbing Robot
                        </span>
                        <span className="block text-sm text-gray-400">
                            September 2024 - December 2024
                        </span>
                    </h3>
                    <div className="flex flex-col items-center md:flex-row">
                        <img 
                            src="/projects/flyderbot.png"
                            alt="FlyderBot Robot" 
                            className="h-30 mr-6 w-40 rounded-lg object-cover"
                        />
                            <p className="mt-4">
                                Running on a Raspberry Pi Pico, the FlyderBot features 2 drone propellers 
                                each on a servo actuated rotating axis. The robot uses an ultrasonic sensor 
                                to measure its distance to the wall, encoders for speed control, and an IMU for 
                                tilt sensing. This high-stakes project autonomously transitions from the 
                                floor to the wall and back down.
                            </p>
                        </div>
                    </div>
                </Link>
            </section>
            <section className="text-center">
                <p className="text-lg text-gray-600">
                        More coming soon!
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