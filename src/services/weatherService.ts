import axios from "../lib/axios";

export interface WeatherRes {
  resolvedAdress: string;
  adress: string;
  days: [
    {
      datetime: string;
      tempmax: number;
      tempmin: number;
      temp: number;
      feelslike: number;
      description: string;
      icon: string;
      humidity: number;
      precip: number;
      snow: number;
      windspeed: number;
    }
  ];
}

export const getWeatherByCity = async (city: string): Promise<WeatherRes> => {
  const res = await axios.get("/timeline/" + encodeURIComponent(city));
  return res.data;
};
