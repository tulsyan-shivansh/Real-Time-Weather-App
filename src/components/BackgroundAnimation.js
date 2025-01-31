import React from "react";
import PropTypes from "prop-types";
import Lottie from "lottie-react";
import "./BackgroundAnimation.css";
import sunnyAnimation from "../assets/sunny.json";
import rainyAnimation from "../assets/rainy.json";
import cloudyAnimation from "../assets/cloudy.json";

const BackgroundAnimation = ({ weather }) => {
    const getWeatherClass = () => {
        switch (weather) {
            case "Clear":
                return "sunny";
            case "Rain":
                return "rainy";
            case "Clouds":
                return "cloudy";
            default:
                return "default";
        }
    };

    const renderWeatherElements = () => {
        try {
            switch (weather) {
                case "Clear":
                    return <Lottie animationData={sunnyAnimation} className="weather-animation" loop />;
                case "Rain":
                    return <Lottie animationData={rainyAnimation} className="weather-animation" loop />;
                case "Clouds":
                    return <Lottie animationData={cloudyAnimation} className="weather-animation" loop />;
                default:
                    return null;
            }
        } catch (error) {
            console.error("Error rendering Lottie animation:", error);
            return <div className="error">Failed to load animation</div>;
        }
    };

    return (
        <div className={`background ${getWeatherClass()}`}>
            {renderWeatherElements()}
        </div>
    );
};

BackgroundAnimation.propTypes = {
    weather: PropTypes.string,
};

export default BackgroundAnimation;