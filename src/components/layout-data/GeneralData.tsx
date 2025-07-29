import useWeather from "../../hooks/useWeather";

interface GeneralDataProps {
  city: string;
}

function GeneralData({ city }: GeneralDataProps) {
  const { data, isLoading, error } = useWeather(city);

  if (!city) {
    return <p>Please enter a city to begin.</p>;
  } else if (isLoading) {
    return <p>Loading weather...</p>;
  } else if (error) {
    return <p>Error: {error.message}</p>;
  } else if (!data) {
    return <p>No data available for {city}.</p>;
  }

  const today = data?.days[0];

  return (
    <section className="flex flex-col items-start px-4 gap-2">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-xl font-bold">{today?.datetime}</h2>
        <img src="" alt="weather-img" />
      </div>
      <section className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <span>{today?.temp}</span>
          <div className="flex items-center gap-2">
            <span>{today?.tempmax}</span>
            <span>{today?.tempmin}</span>
          </div>
        </div>
        <li>{today?.description}</li>
        <li>{today?.precip}</li>
        <li>{today?.icon}</li>
      </section>
    </section>
  );
}

export default GeneralData;
