export interface IWeather {
  city: string;
  temp: number;
  localTime: string;
  icon: string;
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
}

export interface IExternalWeather {
  location: ILocation;
  current: ICurrent;
}
