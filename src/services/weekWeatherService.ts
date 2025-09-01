import api from '@/api/visualCrossing';

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
  const { data } = await api.get(
    `/timeline/${encodeURIComponent(city)}/next7days`,
    {
      params: {
        iconSet: 'icons2',
      },
    }
  );
  return data;
};
