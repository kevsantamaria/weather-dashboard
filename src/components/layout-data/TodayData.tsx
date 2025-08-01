import { Card } from "../ui/card";
import WeatherIcon from "./WeatherIcon";
import useWeather from "../../hooks/useWeeklyWeather";

interface Props {
  city: string;
}

function TodayData({ city }: Props) {
  const { data, isLoading, error } = useWeather(city);

  if (!city) {
    return <p className="hidden" />;
  } else if (isLoading) {
    return <p>Loading data...</p>;
  } else if (error || !data) {
    return <p className="text-red-500">Error loading</p>;
  }
  return (
    <Card className="">
      {data.days.map((day, index) => (
        <div key={index} className="flex flex-row">
          <h3>{day.hours[0].datetime}</h3>
        </div>
        
      ))}
    </Card>
  );
}

export default TodayData;
