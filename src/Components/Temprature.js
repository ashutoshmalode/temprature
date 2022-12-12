import React, { useState } from "react";

const Temprature = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  const handleInputText = () => {
    const fetchApi = async () => {
        const url =
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=838bf315d73ca345453ef24a4ca03974`;
        const response = await fetch(url);
        const resJson = await response.json();
        setCity(resJson.main);
      };
      fetchApi();
  }

//   useEffect(() => {
//     const fetchApi = async () => {
//       const url =
//         `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=838bf315d73ca345453ef24a4ca03974`;
//       const response = await fetch(url);
//       const resJson = await response.json();
//       setCity(resJson.main);
//     };
//     fetchApi();
//   }, [search]);

  return (
    <>
      <div className="box">
        <h1>Temprature App</h1>
        <div className="inputData">
          <input
            type="text"
            className="inputField"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <button type="button" className="btn btn-primary mx-2" onClick={handleInputText} >Search</button>

          {!city ? (
            <p>No Data Found</p>
          ) : (
            <div>
              <h2>{search}</h2>
              <h1>{city.temp}℃el </h1>
              <p>
                Min {city.temp_min}℃el | Max {city.temp_max}℃el
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Temprature;
