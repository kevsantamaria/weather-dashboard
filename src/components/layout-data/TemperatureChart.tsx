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
        <Tooltip formatter={(value: number) => `${value}°C`} />
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
