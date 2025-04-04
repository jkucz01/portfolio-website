import React from "react";
import { Link } from "react-router-dom";

import ContactButton from "../components/ContactButton";

export default function Projects() {
    return (
        <div className="container mx-auto p-6">
            <section className="mb-12 text-center">
                <h1 className="mb-4 text-4xl font-bold text-gray-800">My Projects</h1>
            </section>
            <section className="mb-12">
                <div className="block flex-1 rounded-lg bg-gray-100 p-6 shadow-md transition">
                    <h3 className="text-xl font-bold text-gray-700">
                        What I&#39;m working on now
                        <span className="block text-sm text-gray-400">
                            March 2025 - Present
                        </span>
                    </h3>
                    <div className="flex flex-col items-center md:flex-row">
                        <img 
                            src="/projects/Logo_freeRTOS.png"
                            alt="FreeRTOS Logo" 
                            className="h-30 mr-6 w-40 rounded-lg object-cover"
                        />
                            <p className="mt-4">
                                I&#39;m currently learning how to use <b>FreeRTOS</b>. I&#39;m deploying 
                                the operating system on a Raspberry Pi Pico microcontroller while optimizing 
                                build workflow. Eventually, I would like to setup a <b>Real-Time Location System (RTLS) </b> 
                                between two <b>RP2040</b> devices using <b>Ultra-Wideband (UWB)</b> sensors with tasks running on FreeRTOS. 
                                <a 
                                href="https://github.com/jkucz01/pico2w-freertos"
                                className="text-blue-500 transition hover:text-blue-700"
                                target="_blank" 
                                rel="noopener noreferrer"> Link to GitHub repo.</a>
                            </p>
                        </div>
                    </div>
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
                                Running on a <b>Raspberry Pi Pico</b>, the FlyderBot features 2 drone propellers 
                                each on a servo actuated rotating axis. The robot uses an <b>ultrasonic sensor </b>
                                to measure its distance to the wall, encoders for <b>PI feedback</b> speed control, and an <b>IMU</b> for 
                                tilt sensing. This high-stakes project autonomously transitions from the 
                                floor to the wall and back down.
                            </p>
                        </div>
                    </div>
                </Link>
            </section>
            <section className="mb-12">
                <Link 
                    to="/projects/aquatic"
                    className="block rounded-lg bg-gray-100 p-6 shadow-md transition hover:bg-gray-200"
                >
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-700">
                        &quot;Aquatic Housekeeper&quot;
                        <span className="block text-lg font-normal text-gray-500">
                            Smart Fish Feeder
                        </span>
                        <span className="block text-sm text-gray-400">
                            September 2022 - December 2022
                        </span>
                    </h3>
                    <div className="flex flex-col items-center md:flex-row">
                        <img 
                            src="/projects/aquatic-housekeeper.jpg"
                            alt="FlyderBot Robot" 
                            className="h-30 mr-6 w-40 rounded-lg object-cover"
                        />
                            <p className="mt-4">
                                The Aquatic Housekeeper runs on an <b>ESP32</b> Feather and is programmed using 
                                <b> MicroPython</b>.  It&#39;s IO include an ultrasonic sensor for water depth sensing, 
                                a thermocouple for water temperature, and a small dc motor with encoders.  It 
                                connects to a web interface on adafruit via the <b>MQTT</b> protocol 
                                for remote monitoring and actuation.
                            </p>
                        </div>
                    </div>
                </Link>
            </section>
            <section className="mb-12">
                <Link 
                    to="/projects/robotic-arm"
                    className="block rounded-lg bg-gray-100 p-6 shadow-md transition hover:bg-gray-200"
                >
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-700">
                        Robotic Arm
                        <span className="block text-lg font-normal text-gray-500">
                            3 axis Immitation Robot With Gripper Claw
                        </span>
                        <span className="block pb-2 text-sm text-gray-400">
                            January 2022 - May 2022
                        </span>
                    </h3>
                    <div className="flex flex-col items-center md:flex-row">
                        <img 
                            src="/projects/Robotic-Arm.jpg"
                            alt="Robotic Arm with Claw" 
                            className="h-30 mr-6 w-40 rounded-lg object-cover"
                        />
                            <p className="mt-4">
                                This project for Microprocessor Based Mechanical Systems runs on a <b>PSOC 6</b> and 
                                features 4 servos: 3 for robotic arm movement and 1 for the gripper claw each controlled by 
                                <b> PWM</b> signals. 
                                It receives inputs from IMUs via <b>I2C</b> and a Flex Sensor in order to mimic the arm 
                                position of the operator. It also features a <b>Graphical User Interface (GUI) </b>
                                implemented on LabView used for calibration and data monitoring.
                            </p>
                        </div>
                    </div>
                </Link>
            </section>
            <section className="mb-12">
                <Link 
                    to="/projects"
                    className="block rounded-lg bg-gray-100 p-6 shadow-md transition hover:bg-gray-200"
                >
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-700">
                        &quot;Brewt Force&quot;
                        <span className="block text-lg font-normal text-gray-500">
                            Automated French Press
                        </span>
                        <span className="block pb-2 text-sm text-gray-400">
                            August 2024 - December 2024
                        </span>
                    </h3>
                    <div className="flex flex-col items-center md:flex-row">
                        <img 
                            src="/projects/brewt-force.jpg"
                            alt="Brewt Force Machine" 
                            className="h-30 mr-6 w-40 rounded-lg object-cover"
                        />
                            <p className="mt-4">
                                Brewt Force is a mechatronics project that features an automated french 
                                press sequence based on a <b>State Machine</b> and a transmission line to move the 
                                plunger rod up and down the pot.  It is coded in <b>Arduino</b> and uses <b>Interrupt Service Routines (ISR) </b>
                                to dynamically repond to user inputs in real time.
                            </p>
                        </div>
                    </div>
                </Link>
            </section>
            <section className="mb-12">
                <div className="block flex-1 rounded-lg bg-gray-100 p-6 shadow-md transition">
                    <h3 className="text-xl font-bold text-gray-700">
                        About this Website
                        <span className="block text-sm text-gray-400">
                            March 2025 - Present
                        </span>
                    </h3>
                    <div className="flex flex-col items-center md:flex-row">
                            <p className="mt-4">
                                This website was built using the <b>React</b> javascript framework. 
                                Its styling uses <b>Tailwind CSS</b> for flexible viewing across many devices. 
                                The site navigation uses React Router for 
                                easy transitions between pages. It is deployed using <b>AWS Amplify</b> providing 
                                continuous deployment from its
                                <a 
                                href="https://github.com/jkucz01/portfolio-website"
                                className="text-blue-500 transition hover:text-blue-700"
                                target="_blank" 
                                rel="noopener noreferrer"> GitHub repository </a> 
                                and uses <b>CloudFront</b> for assests and media delivery. 
                                This was my first website designed from scratch.
                            </p>
                        </div>
                    </div>
            </section>
            <section className="text-center">
                <p className="text-lg text-gray-600">
                        More coming soon!
                </p>
            </section>
            <section className="text-center">
                <ContactButton />
            </section>
        </div>
    );
}