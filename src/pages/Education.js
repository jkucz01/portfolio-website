import React from "react";

import ContactButton from "../components/ContactButton";


export default function Education() {
    return (
        <div className="container mx-auto p-6">
            <section className="mb-12 text-center">
                <p className="text-lg text-gray-600">
                I am a graduate from UC Berkeley in December of 2024 with bachelors degrees in 
                Electrical Engineering and Computer Science (EECS) and Mechanical Engineering.
                </p>
            </section>

            <section className="mb-12">
                {/* <h2 className="mb-4 text-xl font-semibold text-gray-800">B.S. Electrical Engineering and Computer Science</h2> */}
                <div className="rounded-lg bg-gray-100 p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-700">
                    B.S. Electrical Engineering and Computer Science
                    <span className="block text-lg font-normal text-gray-500">University of California, Berkeley</span>
                    <span className="block text-sm text-gray-400">September 2020 - December 2024</span>
                </h3>
                <h4 className="text-md mt-4 list-disc text-gray-600">
                    Relavent Coursework:
                </h4>
                <ul className="text-md mt-4 list-disc pl-6 text-gray-600">
                    <li>CS 61A: The Structure and Interpretation of Computer Programs</li>
                    <li>CS 61BL: Data Structures and Programming Methodology</li>
                    <li>CS 61C: Great Ideas of Computer Architecture (MachineStructures)</li>
                    <li>CS 70: Discrete Mathematics and Probability Theory</li>
                    <li>CS 161: Computer Security</li>
                    <li>CS 162: Operating Systems and System Programming</li>
                    <li>CS 164: Programming Languages and Compilers</li>
                    <li>CS 169: Introduction to Software Engineering</li>
                    <li>CS 195: Social Implications of Computer Technology</li>
                    <br />
                    <li>EECS 16A: Designing Information Devices and Systems I</li>
                    <li>EECS 16B: Designing Information Devices and Systems II</li>
                    <li>EECS C128: Feedback Control Systems</li>
                    <li>EECS 149: Introduction to Embedded and Cyber Physical Systems</li>
                </ul>
                </div>
            </section>

            <section className="mb-12">
                {/* <h2 className="mb-4 text-xl font-semibold text-gray-800">B.S. Electrical Engineering and Computer Science</h2> */}
                <div className="rounded-lg bg-gray-100 p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-700">
                    B.S. Mechanical Engineering
                    <span className="block text-lg font-normal text-gray-500">University of California, Berkeley</span>
                    <span className="block text-sm text-gray-400">September 2020 - December 2024</span>
                </h3>
                <h4 className="text-md mt-4 list-disc text-gray-600">
                    Relavent Coursework:
                </h4>
                <ul className="text-md mt-4 list-disc pl-6 text-gray-600">
                    <li>ENGIN 7: Introduction to Computer Programming for Scientists and Engineers</li>
                    <li>ENGIN 26: Three-Dimensional Modeling for Design</li>
                    <li>ENGIN 29: Manufacturing and Design Communication</li>
                    <li>MECENG 40: Thermodynamics</li>
                    <li>MECENG C85: Introduction to Solid Mechanics</li>
                    <li>MECENG 100: Electronics for the Internet of Things</li>
                    <li>MECEND 103: Experimentation and Measurements</li>
                    <li>MECENG 104: Engineering Mechanics II</li>
                    <li>MECENG 106: Fluid Mechanics</li>
                    <li>MECENG 108: Mechanical Behavior of Engineering Materials</li>
                    <li>MECENG 109: Heat Transfer</li>
                    <li>MECENG 131: Vehicle Dynamics and Control</li>
                    <li>MECENG 132: Dynamic Systems and Feedback</li>
                    <li>MECENG C134: Feedback Control Systems</li>
                    <li>MECENG 135: Design of Microprocessor-Based Mechanical Systems</li>
                </ul>
                </div>
            </section>

            <section className="text-center">
                <ContactButton />
            </section>
        </div>
    );
}