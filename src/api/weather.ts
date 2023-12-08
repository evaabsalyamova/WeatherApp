import { IExternalWeather } from "../types/weather";

const headers = {
  "Content-type": "application/json; charset=UTF-8",
};

export const getForecast = async (city: string): Promise<IExternalWeather> => {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=b81ea357f1f24d9481290529232711&q=${city}&days=2`,
    {
      method: "GET",
      headers,
    }
  )
    .then((res) => res.json())
    .then((json) => JSON.parse(JSON.stringify(json)));

  return response;
};
