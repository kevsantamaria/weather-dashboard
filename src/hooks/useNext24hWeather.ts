import { useQuery } from "@tanstack/react-query";
import { getNext24hWeather } from "../services/next24hWeatherService";

const useNext24hWeather = (city: string) => {
  return useQuery({
    queryKey: ["weather-next24h", city],
    queryFn: () => getNext24hWeather(city),
    enabled: !!city,
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
};

export default useNext24hWeather;