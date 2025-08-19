import { useQuery } from '@tanstack/react-query';
import { getNext24hWeather } from '../services/next24hWeatherService';

const useNext24hWeather = (city: string) => {
  return useQuery({
    queryKey: ['weather-next24h', city],
    queryFn: () => getNext24hWeather(city),
    enabled: !!city,
  });
};

export default useNext24hWeather;
