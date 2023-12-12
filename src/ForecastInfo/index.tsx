import ForecastDay from "../ForecastDay";
import { useAppSelector } from "../redux";

import "./styles.css";

const ForecastInfo: React.FunctionComponent = () => {
  const forecast = useAppSelector((state) => state.Weather.forecast);

  return (
    <div className="forecastBlock">
      {forecast.map((day) => (
        <ForecastDay day={day} />
      ))}
    </div>
  );
};

export default ForecastInfo;
