import GeneralDataSection from "../layout/GeneralDataSection";
import TodayDataSection from "../layout/TodayDataSection";
import WeekDataSection from "../layout/WeekDataSection";
import useWeeklyWeather from "../../hooks/useWeeklyWeather";

interface PageMainProps {
  city: string;
}

function PageMain({ city }: PageMainProps) {
  const { data } = useWeeklyWeather(city);

  return (
    <main className="m-auto container flex-1 md:grid md:grid-cols-2 gap-4">
      <section>
        <h2 className="text-3xl font-bold pb-3">{data?.resolvedAddress}</h2>
        <GeneralDataSection city={city} />
      </section>
      <WeekDataSection city={city} />
      <TodayDataSection city={city} />
    </main>
  );
}

export default PageMain;
