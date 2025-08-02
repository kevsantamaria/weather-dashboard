import GeneralDataSection from "../layout/GeneralDataSection";
import TodayDataSection from "../layout/TodayDataSection";
import WeekDataSection from "../layout/WeekDataSection";

interface Props {
  city: string;
}

function PageMain({ city }: Props) {
  return (
    <>
      {!city && (
        <section className="flex items-center justify-center h-full">
          <p className="text-gray-500">
            Please enter a city to get weather data.
          </p>
        </section>
      )}
      <main className="mx-auto md:w-[90%] w-[95%] grid flex-1 grid-cols-1 md:grid-cols-2 gap-4">
        {city && (
          <>
            <section className="flex flex-col gap-4">
              <GeneralDataSection city={city} />
              <TodayDataSection city={city} />
            </section>
            <WeekDataSection city={city} />
          </>
        )}
      </main>
    </>
  );
}

export default PageMain;
