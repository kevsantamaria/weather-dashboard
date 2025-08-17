import TodayData from '../layout-data/TodayData';

interface Props {
  city: string;
}

function TodayDataSection({ city }: Props) {
  return (
    <aside>
      <TodayData city={city} />
    </aside>
  );
}

export default TodayDataSection;
