import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import dayjs from 'dayjs';
import type { TooltipProps } from '@/components/Charts/types';

interface Props {
  city: { datetime: string; precipprob: number }[];
}

const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div
    className='bg-white text-gray-800 px-2.5 py-1.5 rounded-md text-sm' >
      <div>{label}</div>
      <div>{payload[0].value}%</div>
    </div>
  );
};

function PrecipitationChart({ city }: Props) {
  const getCssVar = (name: string) =>
    getComputedStyle(document.documentElement).getPropertyValue(name).trim();

  const getColor = (prob: number) => {
    if (prob > 70) return getCssVar('--custom-primary-high');
    if (prob > 30) return getCssVar('--custom-primary');
    return getCssVar('--custom-primary-low');
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={city}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="datetime" stroke='var(--secondary-foreground)' tickFormatter={(val) => dayjs(val).format('DD-MM')} />
        <YAxis domain={[0, 100]} stroke='var(--secondary-foreground)' tickFormatter={(val) => `${val}%`} />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="precipprob" radius={[8, 8, 0, 0]}>
          {city.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getColor(entry.precipprob)} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default PrecipitationChart;
