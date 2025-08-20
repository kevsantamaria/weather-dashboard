interface Props {
  icon: string;
  size?: number;
}

function WeatherIcon({ icon, size = 40 }: Props) {
  const path = new URL(`../../assets/img/${icon}.png`, import.meta.url).href;

  return (
    <div style={{ width: size, height: size }}>
      <img src={path} alt="Icon weather" className="object-cover" />
    </div>
  );
}

export default WeatherIcon;
