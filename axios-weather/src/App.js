import axios from 'axios';
import { useEffect, useState } from 'react';

const Loading = () => <div>Your weather is coming...</div>;
const Error = ({ errorMsg }) => <div style={{ color: 'red' }}>{errorMsg}</div>;
const WeatherInfo = ({ resWeather, resConditions }) => {
  const { dayhour, temp, comment, humidty, iconURL, wind } = resConditions;

  return (
    <div>
      <div>{resWeather?.region}</div>
      <div>
        <div>
          <div>{dayhour}</div>
          <div>{temp.c}&deg; celcius</div>
          <div>
            {comment} {humidty}
          </div>
          <img src={iconURL} alt="weathericon" />
          <div>Wind {wind.km} km</div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [location, setLocation] = useState('Brisbane');
  const [errorMsg, setErrorMsg] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://weatherdbi.herokuapp.com/data/weather/${location}`
      );

      // const res2 = await axios.post('http://something.com/', {
      //   productName: 'lash',
      //   price: 13,
      // });

      if (res.data.status === 'fail') {
        setErrorMsg(res.data.message);
      } else {
        setWeatherData(res.data);
        setErrorMsg('');
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App" style={{ margin: 50 }}>
      <input
        placeholder="Enter your city"
        type="text"
        onChange={(e) => {
          setLocation(e.target.value);
        }}
      ></input>
      <button onClick={fetchData}>View Weather in {location}</button>
      {loading ? (
        <Loading />
      ) : (
        <>
          {errorMsg ? (
            <Error errorMsg={errorMsg} />
          ) : (
            <>
              {weatherData.currentConditions && (
                <WeatherInfo
                  resWeather={weatherData}
                  resConditions={weatherData.currentConditions}
                />
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
