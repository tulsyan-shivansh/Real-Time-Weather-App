import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ fetchWeather }) => {
    const [city, setCity] = useState("");

    const handleSearch = () => {
        if (city) fetchWeather(city);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Enter city..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

SearchBar.propTypes = {
    fetchWeather: PropTypes.func.isRequired,
};

export default SearchBar;