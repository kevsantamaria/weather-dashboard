import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import TodayData from "../layout-data/TodayData";

interface Props {
  city: string;
}

function TodayDataSection( { city }: Props ) {
  return (
    <aside className="col-span-2">
      <Card className="m-0 p-0 w-full h-full">
        <ScrollArea className="w-full max-w-full overflow-hidden whitespace-nowrap">
          <div className="py-4">
            <TodayData city={city} />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </Card>
    </aside>
  );
}

export default TodayDataSection;
