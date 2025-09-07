import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import dayjs from 'dayjs';
import type { TooltipProps } from '@/components/Charts/types';

interface Props {
  city: { datetime: string; tempmax: number; tempmin: number }[];
}

const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
  if (!active || !payload || payload.length === 0) return null;

  const tempMax = payload.find(p => p.dataKey === 'tempmax')?.value;
  const tempMin = payload.find(p => p.dataKey === 'tempmin')?.value;

  return (
    <div
    className='bg-white text-gray-800 px-3.5 py-2.5 rounded-md text-sm' >

      <div>{label}</div>
      {tempMax !== undefined && <div style={{color: '#ef4444'}}>Max: {Math.round(tempMax)}°C</div>}
      {tempMin !== undefined && <div style={{color: '#3b82f6'}}>Min: {Math.round(tempMin)}°C</div>}
    </div>
  );
};

function TemperatureChart({ city }: Props) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={city}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="datetime" stroke='var(--secondary-foreground)' tickFormatter={(val) => dayjs(val).format('DD-MM')} />
        <YAxis
          domain={['dataMin - 5', 'dataMax + 5']}
          stroke='var(--secondary-foreground)'
          tickFormatter={(val) => `${Math.round(val)}°C`}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line
          type="monotone"
          dataKey="tempmax"
          name="Max Temperature"
          stroke="#ef4444" // rojo
          strokeWidth={2}
          dot={{ r: 3 }}
          activeDot={{ r: 5 }}
        />
        <Line
          type="monotone"
          dataKey="tempmin"
          name="Min Temperature"
          stroke="#3b82f6" // azul
          strokeWidth={2}
          dot={{ r: 3 }}
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default TemperatureChart;
