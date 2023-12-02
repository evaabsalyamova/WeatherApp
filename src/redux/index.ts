import { createSlice, configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { IWeather } from "../types/weather";

interface IAddWeatherAction {
  payload: IWeather;
  type: string;
}

const initialState: IWeather = {
  city: "",
  temp: 0,
  localTime: "",
  icon: "",
};

const weatherSlice = createSlice({
  name: "Weather",
  initialState,
  reducers: {
    addWeather: (_, action: IAddWeatherAction) => {
      return action.payload;
    },
  },
});

export const { addWeather } = weatherSlice.actions;

export const store = configureStore({
  reducer: {
    Weather: weatherSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
