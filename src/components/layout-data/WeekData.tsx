import { Card } from "../ui/card";

interface weekDaysProps {
  day: string;
  weatherImg: string;
  temperature: string;
  sensation: string;
}

function WeekData({ day, weatherImg, temperature, sensation }: weekDaysProps) {
  return (
    <Card className="min-w-130 flex flex-row justify-around items-center gap-4 text-xl">
      <h2>{day}</h2>
      <img src={weatherImg} alt="IMG" />
      <section className="flex gap-4">
        <span>{temperature}</span>
        <span className="text-gray-500">{sensation}</span>
      </section>
    </Card>
  );
}

export default WeekData;
