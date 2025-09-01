import api from '@/api/visualCrossing';
import dayjs from '@/lib/dayjs';
import { Dayjs } from 'dayjs'

export type HourData = {
  time: string;
  temp: number;
  precipprob: number;
  humidity: number;
  windspeed: number;
  feelslike: number;
  snow: number;
  uvindex: number;
  icon: string;
};

export type Weather24hRes = {
  hours: HourData[];
};

// Tipos de la API de Visual Crossing
export type ApiHour = {
  datetime: string; // "HH:mm:ss"
  temp: number;
  precipprob: number;
  humidity: number;
  windspeed: number;
  feelslike: number;
  snow: number;
  uvindex: number;
  icon: string;
};

export type ApiDay = {
  datetime: string; // "YYYY-MM-DD"
  hours: ApiHour[];
};

export type HourDataRaw = ApiHour & {
  fullDate: Dayjs;
};

export const getNext24hWeather = async (city: string): Promise<Weather24hRes> => {
  const { data } = await api.get(`/timeline/${encodeURIComponent(city)}/next2days`, {
    params: { iconSet: 'icons2' },
  });

  const timezone: string | undefined = data?.timezone;
  if (!timezone) throw new Error("No 'timezone' in the API response");

  const now = dayjs().tz(timezone);

  const allHours: HourDataRaw[] = ((data.days ?? []) as ApiDay[]).flatMap((day) =>
    (day.hours ?? []).map((hour) => {
      const fullDate = dayjs.tz(`${day.datetime}T${hour.datetime}`, timezone);
      return { ...hour, fullDate };
    })
  );  

  const upcomingHours: HourData[] = allHours
    .filter((h) => h.fullDate.isAfter(now))
    .slice(0, 24)
    .map((h) => ({
      time: h.fullDate.format('HH:mm'),
      temp: h.temp,
      precipprob: h.precipprob,
      humidity: h.humidity,
      windspeed: h.windspeed,
      feelslike: h.feelslike,
      snow: h.snow,
      uvindex: h.uvindex,
      icon: h.icon,
    }));

  return { hours: upcomingHours };
};
