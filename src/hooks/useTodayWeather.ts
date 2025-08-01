import { getTodayWeather } from "@/services/todayWeatherService"
import { useQuery } from "@tanstack/react-query"

const useTodayWeather = (city: string) => {
    return useQuery({
        queryKey: ['weather-today', city],
        queryFn: () => getTodayWeather(city),
        enabled: !!city,
        staleTime: 1000 * 60 * 5,
    });
}

export default useTodayWeather;