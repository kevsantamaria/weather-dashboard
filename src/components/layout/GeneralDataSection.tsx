import GeneralData from '../layout-data/GeneralData';

interface GeneralDataSectionProps {
  city: string;
}

function GeneralDataSection({ city }: GeneralDataSectionProps) {
  return (
    <aside>
      <GeneralData city={city} />
    </aside>
  );
}

export default GeneralDataSection;
