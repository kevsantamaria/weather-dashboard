import { Card } from '../ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import WeatherIcon from './WeatherIcon';
import useNext24hWeather from '../../hooks/useNext24hWeather';
import { CloudRain, SunSnow } from 'lucide-react';

interface Props {
  city: string;
}

function TodayData({ city }: Props) {
  if (!city) return null;
  const { data, isLoading, error } = useNext24hWeather(city);

  if (isLoading) {
    console.log('Loading TodayData weather...');
    return null;
  } else if (error || !data) {
    console.error('Error loading TodayData weather');
    return null;
  }
  return (
    <Card className="m-0 p-0 w-full h-full glass-effect">
      <ScrollArea className="w-full max-w-full overflow-hidden whitespace-nowrap">
        <div className="py-4">
          <div className="flex gap-2 px-4">
            {data.hours.map((hour, index) => (
              <Card
                key={index}
                className="flex flex-col items-center justify-around gap-0 min-w-20 max-h-37 text-sm"
              >
                <h3 className="font-bold">{hour.datetime.slice(0, 5)}</h3>
                <WeatherIcon icon={hour.icon} size={40} />
                <span className="text-gray-500 flex gap-1 mt-2">
                  <SunSnow size={20} />
                  {`${Math.round(hour.temp)}°C`}
                </span>

                {hour?.precipprob > 0 && (
                  <span className="text-gray-500 flex gap-1">
                    <CloudRain size={20} />
                    {`${Math.round(hour.precipprob)}%`}
                  </span>
                )}
              </Card>
            ))}
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </Card>
  );
}

export default TodayData;
