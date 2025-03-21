import React from "react";

import BackButton from "../../components/BackButton";

export default function AquaticHousekeeper() {
    return (
        <div className="container mx-auto p-6">
            <h1 className="mb-4 text-3xl font-bold text-gray-700">Aquatic Housekeeper: Smart Fish Feeder</h1>
            <img 
                src="/projects/aquatic-housekeeper.jpg" 
                alt="Aquatic Housekeeper" 
                className="mx-auto mb-6 w-full max-w-md rounded-lg"
            />
            <p className="mb-4 text-lg text-gray-600">
                The Aquatic Housekeeper runs on an ESP32 Feather and is programmed using 
                MicroPython.  It&#39;s IO include an ultrasonic sensor for water depth sensing, 
                a thermocouple for water temperature, and a small dc motor with encoders.  It 
                connects to a web interface on adafruit via the MQTT protocol 
                for remote monitoring and actuation.
            </p>
            <section className="py-8 text-center">
                <BackButton />
            </section>
        </div>
    );
}