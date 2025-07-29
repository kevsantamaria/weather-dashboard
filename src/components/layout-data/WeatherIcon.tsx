interface WeatherIconProps {
    icon: string;
}

function WeatherIcon({icon}:WeatherIconProps) {
  
    const path = `../../../public/img/${icon}.png`
  
    return (
    <img src={path} alt="Icon weather" className='w-20 h-20' />
  )
}

export default WeatherIcon