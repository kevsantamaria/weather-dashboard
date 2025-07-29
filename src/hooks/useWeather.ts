import { useQuery } from '@tanstack/react-query';
import { getWeatherByCity } from '../services/weatherService';

const useWeather = (city: string) => {
    return useQuery({
        queryKey: ['weather', city],
        queryFn: () => getWeatherByCity(city),
        enabled: !!city,
        staleTime: 1000 * 60 * 5,
    });
}

export default useWeather;
