import { useState, useEffect } from "react/cjs/react.development";
import WeatherData from "./weatherdata";

const initialData = {
  city: "kolkata",
  dataOption: "metric",
};
const Weather = () => {
  const [weatherState, setWeatherState] = useState({});
  const [userData, setUserData] = useState(initialData);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  useEffect(async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?units=${userData.dataOption}&APPID=8ff8452c821d127d7afc17c8988f6e44&q=${userData.city}`
      );
      const data = await response.json();
      data && setWeatherState(data);
      console.log("weather-data: ", weatherState);
    } catch (err) {
      console.log("no data available");
      setWeatherState({});
    }
  }, [userData]);

  return (
    <div className="parent">
      <div className="user-data">
        <input
          className="user-data-input"
          type="text"
          value={userData.city}
          name="city"
          onChange={onChangeHandler}
        />
        <select
          className="user-data-select"
          value={userData.dataOption}
          name="dataOption"
          onChange={onChangeHandler}
        >
          <option value="metric">Metric</option>
          <option value="imperial">Imperial</option>
        </select>
      </div>
      <div className="city">
        <span className="city-name">{userData.city}</span>
      </div>

      <div className="display">
        {JSON.stringify(weatherState) === JSON.stringify({}) ? (
          <>Loading...</>
        ) : (
          <WeatherData data={weatherState.list} />
        )}
      </div>
    </div>
  );
};

export default Weather;
