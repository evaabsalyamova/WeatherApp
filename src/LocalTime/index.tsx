import { useAppSelector } from "../redux";
import "./styles.css";

const LocalTime = () => {
  const localTime = useAppSelector((state) => state.Weather.localTime);

  return <div className="localTime">{localTime}</div>;
};

export default LocalTime;
