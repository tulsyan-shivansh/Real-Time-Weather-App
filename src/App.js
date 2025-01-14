import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";
import BackgroundAnimation from "./components/BackgroundAnimation";
import "./App.css";

const App = () => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");

    const fetchWeather = async (city) => {
        const apiKey = "ce18fb162ca28c25dd54ff19eec0d3ac";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        try {
            const response = await axios.get(url);
            setWeather(response.data);
            setError("");
        } catch (err) {
            setError("City not found! Please try again.");
            setWeather(null);
        }
    };

    return (
        <div className="app">
            <BackgroundAnimation weather={weather?.weather[0]?.main} />
            <SearchBar fetchWeather={fetchWeather} />
            {error && <p className="error">{error}</p>}
            {weather && <WeatherCard weather={weather} />}
        </div>
    );
};

export default App;
