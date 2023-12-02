import { useAppSelector } from "../redux";
import "./style.css";

const WeatherInfo = () => {
  const { temp, icon } = useAppSelector((state) => state.Weather);

  return (
    <div className="weatherBlock">
      <div className="tempBlock">{temp > 0 ? `+${temp}` : `${temp}`}</div>
      <div className="weatherIconBlock">
        {icon && <img src={icon} alt="Weather data by WeatherAPI.com" />}
      </div>
    </div>
  );
};

export default WeatherInfo;
