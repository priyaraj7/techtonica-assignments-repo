import React, { useEffect, useState } from "react";

const Forecast = () => {
  let [responseObj, setResponseObj] = useState({});
  let [hasError, setError] = useState(false);
  const [city, setCity] = useState("Seattle");

  //getForecast callback function
  async function getForecast(ev) {
    //Blocking default click handling
    ev && ev.preventDefault();
    //console.log(`fetching weather for ${city}`);
    //console.log(process.env.REACT_APP_API_KEY);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=imperial` // imperial- its farehnheigh
      );
      if (response.status !== 200) {
        setResponseObj({});
        setError(true);
      } else {
        //returns a promise which resolves with the result of parsing the body text as JSON.

        const result = await response.json();
        setResponseObj(result);
        setError(false);
      }
    } catch (e) {
      setError(true);
      setResponseObj({});
    }
  }
  useEffect(() => getForecast, []);

  return (
    // JSX code will go here
    <div>
      <h2>Find Current Weather Conditions</h2>
      {/* We are stringifying our response from the Open Weather Map API using built in Javascript code. This has to be done because the data is returned as JSON and React does not render objects. */}

      {/* Using curly brackets in JSX allows us to mix Javascript right in with our HTML-like code (JSX). */}
      <form onSubmit={getForecast}>
        <input
          type="text"
          value={city}
          //The event.target property can be used in order to implement event delegation.
          onChange={(ev) => setCity(ev.target.value)}
        />
        <input type="submit" value="Get Forecast" />
      </form>
      {!hasError ? (
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
                    <br />
                    <span className="minTemp">
                      {` Minimum temp: ${report.main.temp_min}F`}
                    </span>{" "}
                    <span className="maxTemp">{`Maximum temp: ${report.main.temp_max}F`}</span>
                    <hr />
                  </div>
                ))
              : ""}
          </div>
        </div>
      ) : (
        <h2>Error when fetching forecast</h2>
      )}
    </div>
  );
};

export default Forecast;
