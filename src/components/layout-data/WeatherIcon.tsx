interface WeatherIconProps {
  icon: string;
}

function WeatherIcon({ icon }: WeatherIconProps) {
  const path = `../../../public/img/${icon}.png`;

  return (
    <div className="w-25 h-25">
      <img src={path} alt="Icon weather" className="object-cover" />
    </div>
  );
}

export default WeatherIcon;
