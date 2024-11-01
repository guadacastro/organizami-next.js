"use client"
import { useState, useEffect } from 'react';

function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async (latitude, longitude) => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
        );
        const data = await response.json();
        setWeather(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather:', error);
        setError('Failed to fetch weather data');
        setLoading(false);
      }
    };

    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude);
        },
        (err) => {
          setError('Unable to get location. Please enable location services.');
          setLoading(false);
        }
      );
    } else {
      setError('Geolocation is not supported by your browser');
      setLoading(false);
    }
  }, []);

  if (loading) return <div className="text-sm">Loading weather...</div>;
  if (error) return <div className="text-sm text-red-500">{error}</div>;
  if (!weather || !weather.weather || !weather.weather[0]) return null;

  return (
    <div className="flex items-center gap-2 text-sm">
      <img 
        src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
        alt={weather.weather[0].description}
        className="w-10 h-10"
      />
      <div className="flex flex-col">
        <span>{Math.round(weather.main.temp)}°C</span>
        <span className="text-xs">{weather.name}</span>
      </div>
    </div>
  );
}

export default WeatherWidget; 