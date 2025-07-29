import axios from "../lib/axios";

export interface WeatherRes {
  resolvedAddress: string;
  address: string;
  days: [
    {
      datetime: string;
      name: string;
      tempmax: number;
      tempmin: number;
      temp: number;
      feelslike: number;
      description: string;
      icon: string;
      humidity: number;
      precipprob: number;
      snow: number;
      windspeed: number;
    }
  ];
}

export const getWeatherByCity = async (city: string): Promise<WeatherRes> => {
  const res = await axios.get("/timeline/" + encodeURIComponent(city), {
    params: {
      iconSet: "icons2"
    }
  });
  return res.data;
};
