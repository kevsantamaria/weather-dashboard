interface WeatherIconProps {
  icon: string;
  size?: number;
}

function WeatherIcon({ icon, size = 40 }: WeatherIconProps) {
  const path = `../../../public/img/${icon}.png`;

  return (
    <div style={{width: size, height: size}}>
      <img src={path} alt="Icon weather" className="object-cover" />
    </div>
  );
}

export default WeatherIcon;
