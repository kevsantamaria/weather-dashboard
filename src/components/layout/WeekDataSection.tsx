import WeekData from '../layout-data/WeekData'

interface Props {
  city: string
}

function WeekDataSection({city}: Props) {
  return (
    <aside>
      <WeekData city={city} />
    </aside>
  );
}

export default WeekDataSection;
