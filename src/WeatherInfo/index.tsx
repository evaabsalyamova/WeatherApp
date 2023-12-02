import { useAppSelector } from "../redux";
import "./style.css";

const WeatherInfo = () => {
  const { temp, icon, feelsLike } = useAppSelector((state) => state.Weather);

  return (
    <div className="weatherBlock">
      {icon && (
        <img
          className="weatherIconBlock"
          src={icon}
          alt="Weather data by WeatherAPI.com"
        />
      )}
      <div className="tempBlock">{temp > 0 ? `+${temp}` : `${temp}`}</div>
      <div className="feelsLikeBlock">
        ощущается как {feelsLike > 0 ? `+${feelsLike}` : `${feelsLike}`}
      </div>
    </div>
  );
};

export default WeatherInfo;
