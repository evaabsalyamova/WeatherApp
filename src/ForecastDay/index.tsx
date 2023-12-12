import { IForecastDay } from "../types/weather";
import "./styles.css";

interface IProps {
  day: IForecastDay;
}

const ForecastDay: React.FunctionComponent<IProps> = ({ day }) => {
  return (
    <div className="forecastDayBlock">
      <div className="forecastDate">{day.date}</div>
      <img
        className="forecastIcon"
        src={day.day.condition.icon}
        alt="Weather data by WeatherAPI.com"
      />
      <div className="forecastTemp">
        {day.day.avgtemp_c > 0
          ? `+${day.day.avgtemp_c}`
          : `${day.day.avgtemp_c}`}
      </div>
    </div>
  );
};

export default ForecastDay;
