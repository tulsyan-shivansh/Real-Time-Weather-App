import React from "react";
import { FaTemperatureHigh, FaWind } from "react-icons/fa";

const WeatherCard = ({ weather }) => {
    const { name, main, weather: details, wind } = weather;

    return (
        <div className="weather-card">
            <h2>{name}</h2>
            <p>{details[0].description}</p>
            <div className="temperature">
                <FaTemperatureHigh /> {main.temp}°C
            </div>
            <div className="wind">
                <FaWind /> {wind.speed} m/s
            </div>
        </div>
    );
};

export default WeatherCard;
