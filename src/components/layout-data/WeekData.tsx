import { Card } from "../ui/card";
import WeatherIcon from "./WeatherIcon";
import useWeeklyWeather from "../../hooks/useWeeklyWeather";
import { SunSnow, CloudRain } from "lucide-react";
import { Separator } from "../ui/separator";

interface Props {
  city: string;
}
function WeekData({ city }: Props) {
  if (!city) return null;
  const { data, isLoading, error } = useWeeklyWeather(city);

  if (isLoading) {
    console.log("Loading WeekData weather...");
    return null;
  } else if (error || !data) {
    console.error("Error loading WeekData weather");
    return null;
  }

  return (
    <Card className="">
      {data.days.map((day, index) => {
        const weekDay = new Date(day.datetime).toLocaleDateString("en-EN", {
          weekday: "long",
        });

        return (
          <div key={index}>
            <div className="flex items-center justify-around gap-4">
              <div className="flex flex-col items-center">
                <h3 className="font-bold text-2xl">{weekDay}</h3>
                <span className="text-gray-500">{day.datetime}</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex gap-2 text-lg">
                  <SunSnow />
                  <span>{`${Math.round(day?.tempmin)}°C/${Math.round(
                    day?.tempmax
                  )}°C`}</span>
                </div>
                <span className="flex gap-2 text-lg">
                  <CloudRain /> {day.precipprob}%
                </span>
              </div>
              <WeatherIcon icon={day.icon} size={100} />
            </div>
            <Separator className="my-4" />
          </div>
        );
      })}
    </Card>
  );
}

export default WeekData;
