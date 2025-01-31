import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";
import BackgroundAnimation from "./components/BackgroundAnimation";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";

const App = () => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");

    const fetchWeather = async (city) => {
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        try {
            const response = await axios.get(url);
            setWeather(response.data);
            setError("");
        } catch (err) {
            console.error("Error fetching weather data:", err);
            if (err.response && err.response.status === 404) {
                setError("City not found! Please try again.");
            } else {
                setError("An error occurred. Please try again later.");
            }
            setWeather(null);
        }
    };

    const weatherCondition = weather && weather.weather && weather.weather[0] ? weather.weather[0].main : "";

    return (
        <div className="app">
            <ErrorBoundary>
                <BackgroundAnimation weather={weatherCondition} />
            </ErrorBoundary>
            <SearchBar fetchWeather={fetchWeather} />
            {error && <p className="error">{error}</p>}
            {weather && <WeatherCard weather={weather} />}
        </div>
    );
};

export default App;