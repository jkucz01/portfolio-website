import React from "react";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="container mx-auto p-6">
        <section className="mb-8 flex justify-center">
            <img 
                src="/grad-personal-photo.jpeg"
                alt="Jacob Kuczynski" 
                className="size-60 object-cover shadow-lg"
            />
        </section>
      <section className="mb-12 text-center">
        <p className="text-lg text-gray-600">
          I&#39;m an Embedded Software Engineer passionate about building sustainable, intelligent systems. I specialize in creating high-performance solutions for the IoT world.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">Recent Experience</h2>
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
          <Link
            to="/experience"
            className="mt-4 inline-block text-blue-500 transition hover:text-blue-700"
          >
            View All Experience
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">Featured Project</h2>
        <div className="rounded-lg bg-gray-100 p-6 shadow-md">
          <h3 className="text-xl font-bold text-gray-700">&#34;FlyderBot&#34;
            <span className="block text-sm text-gray-400">September 2024 - December 2024</span>
          </h3>
          <ul className="text-md mt-4 list-disc pl-6 text-gray-600">
            <li>Developed modular embedded C code for sensors and actuators, integrating components into a cohesive modal system using Lingua Franca with interrupt driven reactions, run on Raspberry Pi Pico.</li>
            <li>Implemented a PI controller to optimize performance and achieve dynamic transitions between floor and wall.</li>
          </ul>
          <Link
            to="/projects"
            className="mt-4 inline-block text-blue-500 transition hover:text-blue-700"
          >
            View All Projects
          </Link>
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
