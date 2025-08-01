import { Card } from "../ui/card";
import WeatherIcon from "./WeatherIcon";
import useWeeklyWeather from "../../hooks/useWeeklyWeather";
import { CloudRain, Droplet, Wind, Thermometer, Snowflake } from "lucide-react";

interface Props {
  city: string;
}

function GeneralData({ city }: Props) {
  const { data, isLoading, error } = useWeeklyWeather(city);

  if (!city) {
    return <p className="hidden" />;
  } else if (isLoading) {
    return (
      <p className="flex items-center justify-center">Loading weather...</p>
    );
  } else if (error || !data) {
    return (
      <p className="flex items-center justify-center text-red-500">
        Loading error, please retry again
      </p>
    );
  }

  const today = data?.days[0];

  return (
    <Card className="text-[var(--text-light)] bg-[var(--color-light-accent)] flex flex-col items-left justify-between gap-2 shadow-xl p-6">
      <section className="w-full flex flex-row items-center justify-around gap-2">
        <div className="flex flex-col items-center">
          <span className="text-gray-500 text-sm">{today?.datetime}</span>
          <h3 className="text-7xl font-bold">{`${Math.round(
            today?.temp
          )}°C`}</h3>
          <div className="text-gray-500">
            <span>{`${Math.round(today?.tempmin)}°C/${Math.round(
              today?.tempmax
            )}°C`}</span>
          </div>
        </div>
        <WeatherIcon icon={today.icon} size={250} />
      </section>
      <section className="flex flex-col gap-2">
        <section className="flex flex-col gap-1">
          <span className="flex gap-2">
            <CloudRain />
            {`Rain: ${today?.precipprob}%`}
          </span>
          <span className="flex gap-2">
            <Droplet />
            {`Humidity: ${today?.humidity}`}
          </span>
          <span className="flex gap-2">
            <Wind />
            {`Windspeed: ${today?.windspeed} km/h`}
          </span>
          <span className="flex gap-2">
            <Thermometer />
            {`Sensation: ${Math.round(today.feelslike)}`}
          </span>
          <span className="flex gap-2">
            <Snowflake />
            {`Snow: ${Math.round(today.snow)} cm`}
          </span>
        </section>
      </section>
    </Card>
  );
}

export default GeneralData;
