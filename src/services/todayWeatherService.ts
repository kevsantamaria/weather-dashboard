import axios from "../lib/axios";
import type { WeatherRes } from './weekWeatherService'

export const getTodayWeather = async (city: string): Promise<WeatherRes> => {
    const today = new Date().toISOString().split("T")[0];
    const res = await axios.get(
      `/timeline/${encodeURIComponent(city)}/${today}`,
      {
        params: {
          iconSet: "icons2",
        },
      }
    );
    return res.data;
  };