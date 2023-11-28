const headers = {
  "Content-type": "application/json; charset=UTF-8",
};

export const getWeather = async (city: string): Promise<any> => {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=b81ea357f1f24d9481290529232711&q=${city}`,
    {
      method: "GET",
      headers,
    }
  )
    .then((res) => res.json())
    .then((json) => JSON.parse(JSON.stringify(json)));

  return response;
};
