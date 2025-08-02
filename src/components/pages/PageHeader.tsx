import CityInput from "../layout/CityInput";
import useWeeklyWeather from "../../hooks/useWeeklyWeather";

interface Props {
  onSubmit: (city: string) => void;
  city: string;
}

function PageHeader({ onSubmit, city }: Props) {
  const { data } = useWeeklyWeather(city);

  return (
    <header className="min-w-screen p-4 px-6 flex items-center justify-between">
      <h1 className="font-bold text-2xl">{data?.resolvedAddress || "Weather Dashboard"}</h1>
      <div className="flex">
        <CityInput onSubmit={onSubmit} />
      </div>
    </header>
  );
}

export default PageHeader;
