import { Card } from "../ui/card";
import WeatherIcon from "./WeatherIcon";
import useWeeklyWeather from '../../hooks/useWeeklyWeather'

interface Props {
  city: string
}

function WeekData({ city }: Props) {

  const {data, isLoading, error} = useWeeklyWeather(city);

  if (!city) {
    return <p className='hidden' />
  } else if (isLoading) {
    return <p>Loading data...</p>
  } else if (error || !data) {
    return <p className='text-red-500'>Error loading</p>
  }

  return (
    <Card className="">
      {data.days.map((day, index) => (
          <div key={index}>
          <h3>{day.name}{day.datetime}</h3>
          <WeatherIcon icon={day.icon}/>
          <section className="">
            <span>{day.precipprob}%</span>
            <span className="text-gray-500">{}</span>
          </section>
        </div>
      ))}
    </Card>
  );
}

export default WeekData;
