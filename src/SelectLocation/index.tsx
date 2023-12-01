import { useEffect, useState } from "react";
import "./styles.css";
import { getWeather } from "../api/weather";
import { addWeather, useAppDispatch } from "../redux";

const SelectLocation = () => {
  const [city, setCity] = useState<string>("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    const response = getWeather(city);
    response.then((data) =>
      dispatch(
        addWeather({
          city: data.location.name,
          temp: data.current.temp_c,
          localTime: data.location.localtime,
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
    </select>
  );
};

export default SelectLocation;
