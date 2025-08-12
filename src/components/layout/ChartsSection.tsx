import PrecipitationChart from "../layout-data/PrecipitationChart";
import useWeeklyWeather from "../../hooks/useWeeklyWeather";

interface Props {
  city: string;
}

function ChartsSection({ city }: Props) {
  if (!city) return null;
  const { data, isLoading, error } = useWeeklyWeather(city);

  if (isLoading) {
    console.log("Loading PrecipitationChart...");
    return null;
  } else if (error) {
    console.error("Error loading PrecipitationChart");
    return null;
  }

  const chartData =
    data?.days.map((day) => ({
      datetime: day.datetime,
      precipprob: day.precipprob,
    })) ?? [];

  return (
    <section className="flex flex-col gap-4">
      <h3 className="font-bold text-2xl">Chance of rain</h3>
      <aside>
        <PrecipitationChart city={chartData} />
      </aside>
    </section>
  );
}

export default ChartsSection;
