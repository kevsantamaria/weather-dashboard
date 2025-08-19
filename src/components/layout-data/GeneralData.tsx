import { Card } from '../ui/card';
import WeatherIcon from './WeatherIcon';
import useWeeklyWeather from '../../hooks/useWeeklyWeather';
import useNext24hWeather from '../../hooks/useNext24hWeather';
import {
  CloudRain,
  Droplet,
  Wind,
  Thermometer,
  Snowflake,
  Sun,
  Loader,
} from 'lucide-react';

interface Props {
  city: string;
}

function GeneralData({ city }: Props) {
  if (!city) return null;
  const {
    data: weeklyData,
    isLoading: loadingWeekly,
    error: errorWeekly,
  } = useWeeklyWeather(city);
  const {
    data: hourlyData,
    isLoading: loadingHourly,
    error: errorHourly,
  } = useNext24hWeather(city);

  if (loadingWeekly || loadingHourly) {
    console.log('Loading GeneralData weather...');
    return (
      <Card className="w-90 h-20 md:absolute top-[20%] left-[35%] flex items-center justify-center font-bold">
      <span className="flex gap-1">Loading<Loader className="animate-spin" /></span> 
    </Card>
    );
  } else if (errorWeekly || !weeklyData || errorHourly || !hourlyData) {
    console.error('Error loading GeneralData weather');
    return (
      <Card className="w-90 h-20 md:absolute top-[20%] left-[35%] flex items-center justify-center text-red-500 font-bold">
        Loading error, please try again
      </Card>
    );
  }

  const today = weeklyData.days[0];
  const nowHour = hourlyData.hours[0];

  return (
    <>
      <section className="flex items-center justify-around gap-4 mb-10">
        <div className="flex flex-col items-center">
          <span className="text-gray-500 text-sm">{today?.datetime}</span>
          <h3 className="text-7xl font-bold">{`${Math.round(
            nowHour?.temp
          )}°C`}</h3>
          <div className="text-gray-500">
            <span>{`${Math.round(today?.tempmin)}°C/${Math.round(
              today?.tempmax
            )}°C`}</span>
          </div>
        </div>
        <div>
          <WeatherIcon icon={nowHour.icon} size={150} />
        </div>
      </section>

      <section className="grid grid-cols-2 gap-2">
        {nowHour?.precipprob > 0 && (
          <Card className="flex items-center justify-center glass-effect">
            <span className="flex gap-2">
              <CloudRain />
              {`Rain: ${nowHour?.precipprob}%`}
            </span>
          </Card>
        )}
        <Card className="flex items-center justify-center glass-effect">
          <span className="flex gap-2">
            <Thermometer />
            {`Sensation: ${Math.round(nowHour.feelslike)}°C`}
          </span>
        </Card>
        <Card className="flex items-center justify-center glass-effect">
          <span className="flex gap-2">
            <Droplet />
            {`Humidity: ${Math.round(nowHour?.humidity)}%`}
          </span>
        </Card>
        <Card className="flex items-center justify-center glass-effect">
          <span className="flex gap-2">
            <Wind />
            {`Wind: ${Math.round(nowHour?.windspeed)} km/h`}
          </span>
        </Card>
        {nowHour?.snow > 0 && (
          <Card className="flex items-center justify-center glass-effect">
            <span className="flex gap-2">
              <Snowflake />
              {`Snow: ${Math.round(nowHour.snow)} cm`}
            </span>
          </Card>
        )}
        <Card className="flex items-center justify-center glass-effect">
          <span className="flex gap-2">
            <Sun />
            {`UV Index: ${Math.round(nowHour.uvindex)}`}
          </span>
        </Card>
      </section>
    </>
  );
}

export default GeneralData;
