import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async (lat, lon) => {
      try {
        const apiKey = "fc0aa2220f3ebf45b45c37c39baa38f4";
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();

        if (!data.main || !data.weather || data.weather.length === 0) {
          throw new Error("Invalid weather data");
        }

        setWeather(data);
      } catch (err) {
        setError(err.message || "Failed to fetch weather");
      } finally {
        setLoading(false);
      }
    };

    const getLocationAndFetchWeather = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            fetchWeather(position.coords.latitude, position.coords.longitude);
          },
          () => {
            fetchWeather(40.7128, -74.0060); // New York fallback
            setError("Using default location");
          }
        );
      } else {
        fetchWeather(40.7128, -74.0060); // Fallback
        setError("Geolocation not supported");
      }
    };

    // Fetch weather on mount
    getLocationAndFetchWeather();

    // Fetch weather every 10 minutes (600000 milliseconds)
    const intervalId = setInterval(getLocationAndFetchWeather, 600000);

    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, []);

  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  return (
    <motion.div
      className="absolute top-6 right-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-3 shadow-lg z-50"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      {loading ? (
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : error ? (
        <p className="text-xs text-red-500">{error}</p>
      ) : (
        weather && (
          <div className="flex items-center space-x-2">
            {weather.weather[0]?.icon && (
              <img
                src={getWeatherIcon(weather.weather[0].icon)}
                alt={weather.weather[0].description}
                className="w-8 h-8"
              />
            )}
            <div>
              <div className="font-semibold text-sm">
                {Math.round(weather.main.temp)}°C
              </div>
            </div>
          </div>
        )
      )}
    </motion.div>
  );
};

export default WeatherWidget;
