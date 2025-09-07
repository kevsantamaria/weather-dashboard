import PrecipitationChart from '@/components/Charts/PrecipitationChart';
import TemperatureChart from '@/components/Charts/TemperatureChart';
import useWeeklyWeather from '@/hooks/useWeeklyWeather';

interface Props {
  city: string;
}

function ChartsSection({ city }: Props) {
  if (!city) return null;
  const { data, isLoading, error } = useWeeklyWeather(city);

  if (isLoading) {
    console.log('Loading PrecipitationChart...');
    return null;
  } else if (error) {
    console.error('Error loading PrecipitationChart');
    return null;
  }

  const chartData =
    data?.days.map((day) => ({
      datetime: day.datetime,
      precipprob: day.precipprob,
      tempmax: day.tempmax,
      tempmin: day.tempmin,
    })) ?? [];

  return (
    <aside className="flex flex-col gap-4">
      <div>
        <h3 className="font-bold text-2xl mb-3">Weekly Chance of Rain</h3>
        <PrecipitationChart city={chartData} />
      </div>
      <div>
        <h3 className="font-bold text-2xl mb-3">
          Weekly Min and Max Temperatures
        </h3>
        <TemperatureChart city={chartData} />
      </div>
    </aside>
  );
}

export default ChartsSection;
