import React, { useEffect, useState } from "react";

const Forecast = () => {
  let [responseObj, setResponseObj] = useState({});
  const [city, setCity] = useState("Seattle");
  async function getForecast() {
    console.log(`fetching weather for ${city}`);
    console.log(process.env.REACT_APP_API_KEY);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=imperial` // imperial- its farehnheigh
    );
    const result = await response.json();
    //api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}
    // weather data fetch function will go here
    const sampleResponse = {
      cod: "200",
      message: 0,
      cnt: 7,
      list: [
        {
          dt: 1630044000,
          main: {
            temp: 288.78,
            feels_like: 288.7,
            temp_min: 287.78,
            temp_max: 288.78,
            pressure: 1018,
            sea_level: 1018,
            grnd_level: 1014,
            humidity: 88,
            temp_kf: 1,
          },
          weather: [
            { id: 500, main: "Rain", description: "light rain", icon: "10n" },
          ],
          clouds: { all: 92 },
          wind: { speed: 1.4, deg: 157, gust: 4.09 },
          visibility: 10000,
          pop: 0.53,
          rain: { "3h": 0.35 },
          sys: { pod: "n" },
          dt_txt: "2021-08-27 06:00:00",
        },
        {
          dt: 1630054800,
          main: {
            temp: 287.99,
            feels_like: 287.91,
            temp_min: 287.35,
            temp_max: 287.99,
            pressure: 1018,
            sea_level: 1018,
            grnd_level: 1014,
            humidity: 91,
            temp_kf: 0.64,
          },
          weather: [
            { id: 500, main: "Rain", description: "light rain", icon: "10n" },
          ],
          clouds: { all: 97 },
          wind: { speed: 1.37, deg: 122, gust: 3.58 },
          visibility: 10000,
          pop: 0.5,
          rain: { "3h": 0.7 },
          sys: { pod: "n" },
          dt_txt: "2021-08-27 09:00:00",
        },
        {
          dt: 1630065600,
          main: {
            temp: 287.03,
            feels_like: 286.9,
            temp_min: 287.03,
            temp_max: 287.03,
            pressure: 1018,
            sea_level: 1018,
            grnd_level: 1015,
            humidity: 93,
            temp_kf: 0,
          },
          weather: [
            { id: 500, main: "Rain", description: "light rain", icon: "10n" },
          ],
          clouds: { all: 100 },
          wind: { speed: 1.28, deg: 116, gust: 3.14 },
          visibility: 10000,
          pop: 0.46,
          rain: { "3h": 0.12 },
          sys: { pod: "n" },
          dt_txt: "2021-08-27 12:00:00",
        },
        {
          dt: 1630076400,
          main: {
            temp: 287.37,
            feels_like: 287.22,
            temp_min: 287.37,
            temp_max: 287.37,
            pressure: 1019,
            sea_level: 1019,
            grnd_level: 1016,
            humidity: 91,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04d",
            },
          ],
          clouds: { all: 99 },
          wind: { speed: 1.28, deg: 167, gust: 2.67 },
          visibility: 10000,
          pop: 0.09,
          sys: { pod: "d" },
          dt_txt: "2021-08-27 15:00:00",
        },
        {
          dt: 1630087200,
          main: {
            temp: 288.03,
            feels_like: 287.82,
            temp_min: 288.03,
            temp_max: 288.03,
            pressure: 1020,
            sea_level: 1020,
            grnd_level: 1017,
            humidity: 86,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04d",
            },
          ],
          clouds: { all: 100 },
          wind: { speed: 1.9, deg: 166, gust: 2.89 },
          visibility: 10000,
          pop: 0.09,
          sys: { pod: "d" },
          dt_txt: "2021-08-27 18:00:00",
        },
        {
          dt: 1630098000,
          main: {
            temp: 291.97,
            feels_like: 291.6,
            temp_min: 291.97,
            temp_max: 291.97,
            pressure: 1020,
            sea_level: 1020,
            grnd_level: 1016,
            humidity: 65,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04d",
            },
          ],
          clouds: { all: 97 },
          wind: { speed: 1.31, deg: 135, gust: 1.36 },
          visibility: 10000,
          pop: 0.29,
          sys: { pod: "d" },
          dt_txt: "2021-08-27 21:00:00",
        },
        {
          dt: 1630108800,
          main: {
            temp: 293.91,
            feels_like: 293.43,
            temp_min: 293.91,
            temp_max: 293.91,
            pressure: 1018,
            sea_level: 1018,
            grnd_level: 1015,
            humidity: 53,
            temp_kf: 0,
          },
          weather: [
            {
              id: 803,
              main: "Clouds",
              description: "broken clouds",
              icon: "04d",
            },
          ],
          clouds: { all: 80 },
          wind: { speed: 2.16, deg: 2, gust: 2.12 },
          visibility: 10000,
          pop: 0.26,
          sys: { pod: "d" },
          dt_txt: "2021-08-28 00:00:00",
        },
      ],
      city: {
        id: 5809844,
        name: "Seattle",
        coord: { lat: 47.6062, lon: -122.3321 },
        country: "US",
        population: 608660,
        timezone: -25200,
        sunrise: 1629984033,
        sunset: 1630033316,
      },
    };
    setResponseObj(result);
  }
  useEffect(() => getForecast, []);

  return (
    // JSX code will go here
    <div>
      <h2>Find Current Weather Conditions</h2>
      {/* We are stringifying our response from the Open Weather Map API using built in Javascript code. This has to be done because the data is returned as JSON and React does not render objects. */}

      {/* Using curly brackets in JSX allows us to mix Javascript right in with our HTML-like code (JSX). */}
      <input
        type="text"
        value={city}
        onChange={(ev) => setCity(ev.target.value)}
      />
      <button onClick={getForecast}>Get Forecast</button>
      <div className="forecast">
        <div className="city">{city}</div>
        <div className="report">
          {responseObj && responseObj.list && responseObj.list.length
            ? responseObj.list.map((report, i) => (
                <div key={i}>
                  <div className="date" key={i}>
                    {new Date(report.dt * 1000).toString()}
                  </div>
                  <img
                    src={`http://openweathermap.org/img/w/${report.weather[0].icon}.png`}
                  />
                  <span className="description">
                    {report.weather[0].description}
                  </span>
                  <span className="minTemp">{report.main.temp_min}</span> <br />
                  <span className="maxTemp">{report.main.temp_max}</span>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};

export default Forecast;
