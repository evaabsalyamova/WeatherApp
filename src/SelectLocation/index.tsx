import { useEffect, useState } from "react";
import "./styles.css";
import { getForecast } from "../api/weather";
import { addWeather, useAppDispatch } from "../redux";

const SelectLocation = () => {
  const [city, setCity] = useState<string>("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (city === "") {
      return;
    }
    const response = getForecast(city);
    response.then((data) =>
      dispatch(
        addWeather({
          city: data.location.name,
          temp: Math.floor(data.current.temp_c),
          localTime: data.location.localtime,
          icon: data.current.condition.icon,
          feelsLike: Math.floor(data.current.feelslike_c),
        })
      )
    );
  }, [city, dispatch]);

  return (
    <select
      className="selectOption"
      name="action"
      onChange={(e) => setCity(e.target.value)}
    >
      <option value=""></option>
      <option value="Yerevan">Yerevan</option>
      <option value="London">London</option>
      <option value="Khabarovsk">Khabarovsk</option>
    </select>
  );
};

export default SelectLocation;
