import useWeather from "../../hooks/useWeather";
import { Card } from "../ui/card";
import WeatherIcon from "./WeatherIcon";

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
    <Card className="flex flex-col items-center justify-between gap-4 shadow-xl p-8">
      <section className="w-full flex flex-row items-center justify-between">
        <div className="flex flex-col items-center">
        <span className="text-gray-700 text-sm">{data?.resolvedAddress}</span>
          <h2 className="text-6xl font-bold">{`${today?.temp}°`}</h2>
          <div className="text-gray-700">
            <span>{`${today?.tempmin}°/${today?.tempmax}°`}</span>
          </div>
        </div>
        <WeatherIcon icon={today.icon} />
      </section>
      <section>
        <section>
          <span>{today?.description}</span>
          <span>{`Precip Prob: ${today?.precipprob}%`}</span>
          <span>{`Humidity: ${today?.humidity}`}</span>
          <span>{`Windspeed: ${today?.windspeed} km/h`}</span>
        </section>
        <section className="flex flex-col items-center">
          <span>{today?.datetime}</span>
          <span>{today.feelslike}</span>
        </section>
      </section>
    </Card>
  );
}

export default GeneralData;
