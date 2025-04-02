import React from "react";

import BackButton from "../../components/BackButton";
import RoboticArmSlideshow from "../../components/RoboticArmSlideshow";

export default function RoboticArm() {
    return (
        <div className="container mx-auto p-6">
            <h1 className="mb-4 text-3xl font-bold text-gray-700">Robotic Arm Project</h1>
            <p className="mb-4 text-lg text-gray-600">
                This project for Microprocessor Based Mechanical Systems runs on a <b>PSOC 6</b> and 
                features 4 servos: 3 for robotic arm movement and 1 for the gripper claw each controlled by 
                <b> PWM</b> signals. 
                It receives inputs from IMUs via <b>I2C</b> and a Flex Sensor in order to mimic the arm 
                position of the operator. It also features a <b>Graphical User Interface (GUI) </b>
                implemented on LabView used for calibration and data monitoring.
            </p>
            <h2 className="text-xl font-bold text-gray-700">View source code:</h2>
            <div className="flex flex-col items-center py-5">
                <div className="h-18 w-80 cursor-pointer overflow-hidden border border-gray-300 shadow-lg">
                    <a 
                        href="/projects/robotic-arm-main.c" 
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <img 
                            src="/projects/robotic-arm-code-preview.png" 
                            alt="Code preview" 
                            className="size-full object-cover"
                        />
                    </a>
                </div>
            </div>
            <h2 className="text-xl font-bold text-gray-700">Project Poster PDF:</h2>
            <div className="flex flex-col items-center py-10">
                <div className="h-80 w-60 cursor-pointer overflow-hidden border border-gray-300 shadow-lg">
                    <a 
                        href="/projects/robotic-arm-poster.pdf" 
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <img 
                            src="/projects/robotic-arm-poster-preview.jpg" 
                            alt="Poster preview" 
                            className="size-full object-cover"
                        />
                    </a>
                </div>
            </div>
            <section className="py-8 text-center">
                <RoboticArmSlideshow />
            </section>
            <section className="py-8 text-center">
                <BackButton />
            </section>
        </div>
    );
}