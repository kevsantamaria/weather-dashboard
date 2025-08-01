import { useQuery } from '@tanstack/react-query';
import { getWeekWeather } from '../services/weekWeatherService';

const useWeather = (city: string) => {
    return useQuery({
        queryKey: ['weather-week', city],
        queryFn: () => getWeekWeather(city),
        enabled: !!city,
        staleTime: 1000 * 60 * 5,
    });
}

export default useWeather;
