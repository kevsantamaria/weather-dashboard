import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface Props {
  city: { datetime: string; precipprob: number }[];
}

function PrecipitationChart({city}: Props) {
  
  const getCssVar = (name: string) =>
    getComputedStyle(document.documentElement).getPropertyValue(name).trim();

  const getColor = (prob: number) => {
    if (prob > 70) return getCssVar("--color-secondary-high")
    if(prob > 30) return getCssVar("--color-secondary")
    return getCssVar("--color-secondary-low")
  }
  
    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={city}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="datetime" />
          <YAxis domain={[0, 100]} tickFormatter={(val) => `${val}%`} />
          <Tooltip formatter={(value: number) => `${value}%`} />
          <Bar dataKey="precipprob" radius={[10, 10, 0, 0]}>
            {city.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColor(entry.precipprob)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    )
}

export default PrecipitationChart
