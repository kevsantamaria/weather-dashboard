interface WeatherIconProps {
  icon: string;
}

function WeatherIcon({ icon }: WeatherIconProps) {
  const path = `../../../public/img/${icon}.png`;

  return (
    <div className="w-40 h-40">
      <img src={path} alt="Icon weather" className="object-cover" />
    </div>
  );
}

export default WeatherIcon;
