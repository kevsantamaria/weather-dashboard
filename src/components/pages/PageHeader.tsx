import CityInput from "../layout/CityInput";
import { Toggle } from "../ui/toggle";
import useWeeklyWeather from "../../hooks/useWeeklyWeather";

interface Props {
  onSubmit: (city: string) => void;
  city: string;
}

function PageHeader({ onSubmit, city }: Props) {
  const { data } = useWeeklyWeather(city);

  return (
    <header className="min-w-screen p-4 px-6 flex items-center flex-col-reverse justify-center md:flex-row md:justify-between">
      <h1 className="font-bold text-2xl">{data?.resolvedAddress || "Weather Dashboard"}</h1>
      <div className="flex items-center gap-4 mb-3 md:mb-0">
        <CityInput onSubmit={onSubmit} />
        <Toggle className="bg-white">T</Toggle>
      </div>
    </header>
  );
}

export default PageHeader;
