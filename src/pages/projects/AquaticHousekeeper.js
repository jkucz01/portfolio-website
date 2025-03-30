import React from "react";

import BackButton from "../../components/BackButton";
import AquaticSlideshow from "../../components/AquaticSlideshow";

export default function AquaticHousekeeper() {
    return (
        <div className="container mx-auto p-6">
            <h1 className="mb-4 text-3xl font-bold text-gray-700">Aquatic Housekeeper: Smart Fish Feeder</h1>
            <img 
                src="/projects/aquatic-housekeeper.jpg" 
                alt="Aquatic Housekeeper" 
                className="mx-auto mb-6 w-full max-w-md rounded-lg"
            />
            <section className="py-6 text-center">
            <a 
                href="https://github.com/jkucz01/aquatic-housekeeper"
                className="text-blue-500 transition hover:text-blue-700"
                target="_blank" 
                rel="noopener noreferrer"> Link to GitHub Repo. 
            </a> 
            </section>
            <p className="mb-4 text-lg text-gray-600">
                The Aquatic Housekeeper runs on an ESP32 Feather and is programmed using 
                MicroPython.  It&#39;s IO include an ultrasonic sensor for water depth sensing, 
                a thermocouple for water temperature, and a small dc motor with encoders.  It 
                connects to a web interface on adafruit via the MQTT protocol 
                for remote monitoring and actuation.
            </p>
            <AquaticSlideshow />
            <section className="py-8 text-center">
                <BackButton />
            </section>
        </div>
    );
}