import GeneralDataSection from "../layout/GeneralDataSection";
import TodayDataSection from "../layout/TodayDataSection";
import WeekDataSection from "../layout/WeekDataSection";

interface Props {
  city: string;
}

function PageMain({ city }: Props) {
  return (
    <div className="flex flex-col flex-1 w-full"> {/* Contenedor padre clave */}
      {!city && (
        <section className="flex items-center justify-center h-full">
          <p className="text-gray-500">
            Please enter a city to get weather data.
          </p>
        </section>
      )}
      
      {city && (
        <main className="flex-1 w-full max-w-[1800px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <section className="flex flex-col gap-4">
            <GeneralDataSection city={city} />
            <TodayDataSection city={city} />
          </section>
          <WeekDataSection city={city} />
        </main>
      )}
    </div>
  );
}

export default PageMain;
