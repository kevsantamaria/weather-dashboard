import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import NextHours from "./NextHours";

const nextHoursProps = 

function TodaySection() {
  return (
    <aside className="container col-span-2">
      <Card className="m-0 p-0 w-full h-full">
      <ScrollArea className="w-full max-w-full overflow-hidden whitespace-nowrap">
        <div className="py-4">
          <div className="flex gap-2 items-center px-4 py-2">
            {nextHoursProps.map(({time, rain, humidity}) => (
              <NextHours key={time} time={time} rain={rain} humidity={humidity} />
            ))}
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      </Card>
    </aside>
  );
}

export default TodaySection;
