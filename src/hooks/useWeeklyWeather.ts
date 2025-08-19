import { useQuery } from '@tanstack/react-query';
import { getWeekWeather } from '../services/weekWeatherService';

const useWeather = (city: string) => {
  return useQuery({
    queryKey: ['weather-week', city],
    queryFn: () => getWeekWeather(city),
    enabled: !!city,
  });
};

export default useWeather;
