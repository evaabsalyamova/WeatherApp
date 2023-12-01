export interface IWeather {
  city: string;
  temp: number;
  localTime: string;
}

interface ILocation {
  name: string;
  localtime: string;
}

interface ICurrent {
  temp_c: number;
}

export interface IExternalWeather {
  location: ILocation;
  current: ICurrent;
}
