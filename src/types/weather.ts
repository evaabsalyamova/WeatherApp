export interface IWeather {
  city: string;
  temp: number;
  localTime: string;
  icon: string;
  feelsLike: number;
}

interface ILocation {
  name: string;
  localtime: string;
}

interface ICondition {
  icon: string;
}

interface ICurrent {
  temp_c: number;
  condition: ICondition;
  feelslike_c: number;
}

export interface IExternalWeather {
  location: ILocation;
  current: ICurrent;
}
