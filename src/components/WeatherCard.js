import React from "react";
import PropTypes from "prop-types";
import { FaTemperatureHigh, FaWind } from "react-icons/fa";
import "./WeatherCard.css";

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

WeatherCard.propTypes = {
    weather: PropTypes.shape({
        name: PropTypes.string.isRequired,
        main: PropTypes.shape({
            temp: PropTypes.number.isRequired,
        }).isRequired,
        weather: PropTypes.arrayOf(
            PropTypes.shape({
                description: PropTypes.string.isRequired,
            })
        ).isRequired,
        wind: PropTypes.shape({
            speed: PropTypes.number.isRequired,
        }).isRequired,
    }).isRequired,
};

export default WeatherCard;