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

interface Props {
  city: { datetime: string; precipprob: number }[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div
      style={{
        backgroundColor: '#fff', // fondo blanco
        color: '#222',           // texto gris
        padding: '6px 10px',
        borderRadius: 6,
        fontSize: 12,
      }}
    >
      <div>{label}</div>
      <div>{payload[0].value}%</div>
    </div>
  );
};

function PrecipitationChart({ city }: Props) {
  const getCssVar = (name: string) =>
    getComputedStyle(document.documentElement).getPropertyValue(name).trim();

  const getColor = (prob: number) => {
    if (prob > 70) return getCssVar('--color-primary-high');
    if (prob > 30) return getCssVar('--color-primary');
    return getCssVar('--color-primary-low');
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={city}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="datetime" />
        <YAxis domain={[0, 100]} tickFormatter={(val) => `${val}%`} />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="precipprob" radius={[10, 10, 0, 0]}>
          {city.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getColor(entry.precipprob)} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default PrecipitationChart;
