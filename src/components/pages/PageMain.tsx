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
    <main className="m-auto md:max-w-[85%] w-full flex-1 md:grid md:grid-cols-2 gap-4">
      <section className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold pb-3">{data?.resolvedAddress}</h2>
        <GeneralDataSection city={city} />
        <TodayDataSection city={city} />
      </section>
      <WeekDataSection city={city} />
    </main>
  );
}

export default PageMain;
