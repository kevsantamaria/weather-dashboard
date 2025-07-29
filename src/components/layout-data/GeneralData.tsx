import useWeather from "../../hooks/useWeather";
import { Card } from "../ui/card";
import WeatherIcon from './WeatherIcon'

interface GeneralDataProps {
  city: string;
}

function GeneralData({ city }: GeneralDataProps) {
  const { data, isLoading, error } = useWeather(city);

  if (!city) {
    return <p className="hidden" />;
  } else if (isLoading) {
    return (
      <p className="flex items-center justify-center">Loading weather...</p>
    );
  } else if (error) {
    return (
      <p className="flex items-center justify-center text-red-500">
        Error: {error.message}
      </p>
    );
  } else if (!data) {
    return <p>No data available for {city}.</p>;
  }

  const today = data?.days[0];

  return (
    <Card className="bg-blue-300 flex flex-row items-center justify-between gap-4 p-2">
      <section className="flex flex-col">
        <h2 className="text-4xl font-bold">{`${today?.temp}°`}</h2>
        <div className="text-gray-700">
          <span>{`${today?.tempmax}°/${today?.tempmin}°`}</span>
        </div>
        <span>{today?.description}</span>
        <span>{`Precip Prob: ${today?.precipprob}%`}</span>
        <span>{`Humidity: ${today?.humidity}`}</span>
        <span>{`Windspeed: ${today?.windspeed} km/h`}</span>
      </section>
      <section className="flex flex-col items-center">
      <WeatherIcon icon={today.icon}/>
        <span>{today?.datetime}</span>
        <span className="">{data?.resolvedAddress}</span>
      </section>
    </Card>
  );
}

export default GeneralData;
