// Converts the first letter of a string to uppercase
export const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
};

// Maps weather conditions to custom icons or descriptions
export const getWeatherIcon = (weather) => {
    switch (weather) {
        case "Clear":
            return "☀️"; // Sunny
        case "Rain":
            return "🌧️"; // Rainy
        case "Clouds":
            return "☁️"; // Cloudy
        case "Snow":
            return "❄️"; // Snowy
        default:
            return "🌈"; // Default
    }
};

// Formats wind speed into user-friendly text
export const formatWindSpeed = (speed) => `${speed} m/s`;

// Formats temperature with °C
export const formatTemperature = (temp) => `${Math.round(temp)}°C`;
