import React from "react";
import "./BackgroundAnimation.css";

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

    return <div className={`background ${getWeatherClass()}`} />;
};

export default BackgroundAnimation;
