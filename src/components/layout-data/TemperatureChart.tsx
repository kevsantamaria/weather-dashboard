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

interface Props {
  city: { datetime: string; tempmax: number; tempmin: number }[];
}

interface LineTooltipProps {
  active?: boolean;
  payload?: Array<{
    dataKey: string;
    value: number;
    name?: string;
    color?: string;
  }>;
  label?: string;
}

const CustomLineTooltip = ({ active, payload, label }: LineTooltipProps) => {
  if (!active || !payload || payload.length === 0) return null;

  const tempMax = payload.find(p => p.dataKey === 'tempmax')?.value;
  const tempMin = payload.find(p => p.dataKey === 'tempmin')?.value;

  return (
    <div
      style={{
        backgroundColor: '#fff', // fondo blanco
        color: '#222',           // texto gris
        padding: '10px 20px',
        borderRadius: 6,
        fontSize: 12,
      }}
    >
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
        <XAxis dataKey="datetime" />
        <YAxis
          domain={['dataMin - 5', 'dataMax + 5']}
          tickFormatter={(val) => `${val}°C`}
        />
        <Tooltip content={<CustomLineTooltip />} />
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
