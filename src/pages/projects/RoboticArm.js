import React from "react";

import BackButton from "../../components/BackButton";

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
            <section className="py-8 text-center">
                <BackButton />
            </section>
        </div>
    );
}