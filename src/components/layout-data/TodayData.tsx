import { Card } from "../ui/card";
import WeatherIcon from "./WeatherIcon";
import useTodayWeather from "../../hooks/useTodayWeather";

interface Props {
  city: string;
}

function TodayData({ city }: Props) {
  const { data, isLoading, error } = useTodayWeather(city);

  if (!city) {
    return <p className="hidden" />;
  } else if (isLoading) {
    return <p>Loading data...</p>;
  } else if (error || !data) {
    return <p className="text-red-500">Error loading</p>;
  }

  const today = data.days[0];
  

  return (
    <div className="flex gap-4 px-4">
      {today.hours.map((hour, index) => (
        <Card key={index} className="flex flex-col items-center justify-center min-w-[80px] p-2 text-sm">
          <h3>{hour.datetime.slice(0, 5)}</h3>
        </Card>
        
      ))}
    </div>
  );
}

export default TodayData;
