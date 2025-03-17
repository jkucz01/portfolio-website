import React from "react";
import { Link } from "react-router-dom";

export default function Experience() {
    return (
        <div className="container mx-auto p-6">
            <section className="mb-12">
                <div className="rounded-lg bg-gray-100 p-6 shadow-md">
                    <h3 className="text-xl font-bold text-gray-700">
                        Embedded Software Integration Intern
                        <span className="block text-lg font-normal text-gray-500">Tesla</span>
                        <span className="block text-sm text-gray-400">August 2023 - December 2023</span>
                    </h3>
                    <ul className="text-md mt-4 list-disc pl-6 text-gray-600">
                        <li>Enabled over 300 unique Pytest regression tests to run nightly by expanding the capabilities of HIL system by configuring new hardware.</li>
                        <li>Parsed 1M+ vehicles alert data via SQL queries and created custom database tables via Caspian, improving performance by 10x.</li>
                        <li>Developed ad-hoc alert analysis Jupyter Notebooks scripts using Pyspark, visualizing insights with Matplotlib.</li>
                        <li>Integrated and tested firmware updates by cherry-picking critical patches, ensuring stable production builds through Git-based CI/CD pipelines in Jenkins.</li>
                    </ul>
                </div>
            </section>
            <section className="mb-12">
                <div className="rounded-lg bg-gray-100 p-6 shadow-md">
                    <h3 className="text-xl font-bold text-gray-700">
                        System Engineering Intern, ICAPS Engineering
                        <span className="block text-lg font-normal text-gray-500">Applied Materials</span>
                        <span className="block text-sm text-gray-400">May 2023 - August 2023</span>
                    </h3>
                    <ul className="text-md mt-4 list-disc pl-6 text-gray-600">
                        <li>Designed a solution to automate cryopump regeneration by controlling IO pins on a PLC, minimizing manual intervention.</li>
                        <li>Developed proposals for cost reduction of supplier constrained parts by switching to an in-house owned and produced package.</li>
                        <li>Created 3D models and drawings using Siemens NX and outlined BOMs through Teamcenter.</li>
                    </ul>
                </div>
            </section>
            <section className="mb-12">
                <div className="rounded-lg bg-gray-100 p-6 shadow-md">
                    <h3 className="text-xl font-bold text-gray-700">
                        Mechanical Engineering Intern, R&D - UPS Systems
                        <span className="block text-lg font-normal text-gray-500">Schneider Electric</span>
                        <span className="block text-sm text-gray-400">June 2022 - August 2022</span>
                    </h3>
                    <ul className="text-md mt-4 list-disc pl-6 text-gray-600">
                        <li>Developed mechanical design changes using Creo and documented changes with engineering drawings and PDM.</li>
                        <li>Performed and assisted a multitude of DVT procedures from drop testing, HALT, and Hi-pot testing.</li>
                        <li>Experimented with STM32 development boards with embedded Rust and TockOS for the firmware team.</li>
                    </ul>
                </div>
            </section>
            <section className="mb-12">
                <div className="rounded-lg bg-gray-100 p-6 shadow-md">
                    <h3 className="text-xl font-bold text-gray-700">
                        Software Engineering Intern
                        <span className="block text-lg font-normal text-gray-500">Stackbase (Startup)</span>
                        <span className="block text-sm text-gray-400">January 2021 - May 2021</span>
                    </h3>
                    <ul className="text-md mt-4 list-disc pl-6 text-gray-600">
                        <li>Developed user intuitive web software using Django on Python framework used by local industrial and educational organizations.</li>
                        <li>Wrote 3D visualization software for view and editing printable STL files with Three.JS.</li>
                    </ul>
                </div>
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