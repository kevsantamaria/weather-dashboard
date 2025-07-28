import { Card } from "@/components/ui/card";

interface NextHoursProps {
  time: string;
  temperature: string;
  rain: string;
  humidity: string;
}

function TodayData({ time, temperature, rain, humidity }: NextHoursProps) {
  return (
    <Card className="w-40 h-40 flex flex-col items-center justify-center shrink-0">
      <h2 className="text-lg font-semibold">{time}</h2>
      <ul className="text-sm text-center mt-2 space-y-1">
        <li>{`Temperature: ${temperature}`}</li>
        <li>{`Rain: ${rain}`}</li>
        <li>{`Humidity: ${humidity}`}</li>
      </ul>
    </Card>
  );
}

export default TodayData;
