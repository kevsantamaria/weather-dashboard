import axios from "../lib/axios";

export interface HourData {
  datetime: string;
  temp: number;
  precipprob: number;
  humidity: number;
  windspeed: number;
  feelslike: number;
  snow: number;
  uvindex: number;
  icon: string
}

export interface Weather24hRes {
  hours: HourData[];
}

export const getNext24hWeather = async (city: string): Promise<Weather24hRes> => {
  const res = await axios.get(`/timeline/${encodeURIComponent(city)}/next2days`, {
    params: {
      iconSet: "icons2",
    },
  });

  const now = new Date();

  // Combina las horas de hoy y mañana
  const allHours = res.data.days.flatMap((day: any) => {
    return day.hours.map((hour: any) => ({
      ...hour,
      date: day.datetime, // Necesario para formar la fecha completa luego
    }));
  });

  // Filtra las horas que son posteriores a "ahora"
  const upcomingHours = allHours
    .filter((hour: any) => {
      const fullDate = new Date(`${hour.date}T${hour.datetime}`);
      return fullDate > now;
    })
    .slice(0, 24); // Solo las siguientes 24 horas

  return { hours: upcomingHours };
};