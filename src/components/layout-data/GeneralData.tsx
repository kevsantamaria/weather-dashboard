import { Card } from "../ui/card";
import WeatherIcon from "./WeatherIcon";
import useWeeklyWeather from "../../hooks/useWeeklyWeather";
import {
  CloudRain,
  Droplet,
  Wind,
  Thermometer,
  Snowflake,
  Sun,
} from "lucide-react";

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
    <>
      <section className="flex items-center justify-around gap-4 mb-5">
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
        <div>
          <WeatherIcon icon={today.icon} size={150} />
        </div>
      </section>

      <section className="grid grid-cols-2 gap-2">
        {today?.precipprob > 0 && (
          <Card className="flex items-center justify-center glass-effect">
            <span className="flex gap-2">
              <CloudRain />
              {`Rain: ${today?.precipprob}%`}
            </span>
          </Card>
        )}
        <Card className="flex items-center justify-center glass-effect">
          <span className="flex gap-2">
            <Thermometer />
            {`Sensation: ${Math.round(today.feelslike)}°C`}
          </span>
        </Card>
        <Card className="flex items-center justify-center glass-effect">
          <span className="flex gap-2">
            <Droplet />
            {`Humidity: ${Math.round(today?.humidity)}%`}
          </span>
        </Card>
        <Card className="flex items-center justify-center glass-effect">
          <span className="flex gap-2">
            <Wind />
            {`Wind: ${Math.round(today?.windspeed)} km/h`}
          </span>
        </Card>
        {today?.snow > 0 && (
          <Card className="flex items-center justify-center glass-effect">
            <span className="flex gap-2">
              <Snowflake />
              {`Snow: ${Math.round(today.snow)} cm`}
            </span>
          </Card>
        )}
        <Card className="flex items-center justify-center glass-effect">
          <span className="flex gap-2">
            <Sun />
            {`UV Index: ${Math.round(today.uvindex)}`}
          </span>
        </Card>
      </section>
    </>
  );
}

export default GeneralData;
