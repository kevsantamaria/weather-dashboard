import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import TodayData from "../layout-data/TodayData";
import useWeather from "../../hooks/useWeather";

// const nextHoursProps = [
//   {time: '01:00', temperature: '', rain: '', humidity: ''}
//   {time: '02:00', temperature: '', rain: '', humidity: ''}
//   {time: '03:00', temperature: '', rain: '', humidity: ''}
//   {time: '04:00', temperature: '', rain: '', humidity: ''}
//   {time: '05:00', temperature: '', rain: '', humidity: ''}
//   {time: '06:00', temperature: '', rain: '', humidity: ''}
//   {time: '07:00', temperature: '', rain: '', humidity: ''}
//   {time: '08:00', temperature: '', rain: '', humidity: ''}
//   {time: '09:00', temperature: '', rain: '', humidity: ''}
//   {time: '10:00', temperature: '', rain: '', humidity: ''}
//   {time: '11:00', temperature: '', rain: '', humidity: ''}
//   {time: '12:00', temperature: '', rain: '', humidity: ''}
//   {time: '13:00', temperature: '', rain: '', humidity: ''}
//   {time: '14:00', temperature: '', rain: '', humidity: ''}
//   {time: '15:00', temperature: '', rain: '', humidity: ''}
//   {time: '16:00', temperature: '', rain: '', humidity: ''}
//   {time: '17:00', temperature: '', rain: '', humidity: ''}
//   {time: '18:00', temperature: '', rain: '', humidity: ''}
//   {time: '19:00', temperature: '', rain: '', humidity: ''}
//   {time: '20:00', temperature: '', rain: '', humidity: ''}
//   {time: '21:00', temperature: '', rain: '', humidity: ''}
//   {time: '22:00', temperature: '', rain: '', humidity: ''}
//   {time: '23:00', temperature: '', rain: '', humidity: ''}
//   {time: '00:00', temperature: '', rain: '', humidity: ''}
// ];

function TodayDataSection() {
  return (
    <aside className="container col-span-2">
      <Card className="m-0 p-0 w-full h-full">
        <ScrollArea className="w-full max-w-full overflow-hidden whitespace-nowrap">
          <div className="py-4">
            {/* <div key={time} className="flex gap-2 items-center px-4 py-2">
              {nextHoursProps.map(({ time, temperature, rain, humidity }) => (
                <NextHours time={time} temperature={temperature} rain={rain} humidity={humidity} />
              ))}
            </div> */}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </Card>
    </aside>
  );
}

export default TodayDataSection;
