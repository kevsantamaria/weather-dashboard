import axios from '../lib/axios';

export interface WeatherRes {
  resolvedAddress: string;
  address: string;
  days: [
    {
      datetime: string;
      temp: number;
      tempmin: number;
      tempmax: number;
      precipprob: number;
      humidity: number;
      windspeed: number;
      feelslike: number;
      snow: number;
      uvindex: number;
      icon: string;
    }
  ];
}

export const getWeekWeather = async (city: string): Promise<WeatherRes> => {
  console.log('Getting weather for:', city);
  const res = await axios.get(
    `/timeline/${encodeURIComponent(city)}/next7days`,
    {
      params: {
        iconSet: 'icons2',
      },
    }
  );
  return res.data;
};
