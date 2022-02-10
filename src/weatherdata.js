//import { useState} from "react/cjs/react.development";

const WeatherData = (props) => {
  return (
    <div className="data-weather-parent">
      <div className="weather-parent">
        {props.data && (
          <div className="weather-parent-content">
            <span>
              <span>Humidity: </span>
              {props.data[0].main.humidity} %
            </span>
            <span>
              <span>Speed: </span>
              {props.data[0].wind.speed} kmph
            </span>
          </div>
        )}
      </div>
      <div className="data-weather">
        {props.data &&
          props.data.splice(0, 6).map((item) => {
            return (
              <div key={item.dt}>
                <span>
                  <span>Max-Temp: </span>
                  {item.main.temp_max}
                </span>
                <span>
                  <span>Min-Temp: </span>
                  {item.main.temp_min}
                </span>
                <span>
                  <span>pressure: </span>
                  {item.main.pressure}
                </span>
                <span>
                  <span>Date: </span>
                  {item.dt_txt}
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default WeatherData;
