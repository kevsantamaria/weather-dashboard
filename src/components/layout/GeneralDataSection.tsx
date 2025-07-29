import { Card } from "../ui/card";
import GeneralData from '../layout-data/GeneralData'

interface GeneralDataSectionProps {
  city: string;
}

function GeneralDataSection({city}: GeneralDataSectionProps) {

  return (
    <aside>
      <section>
          <GeneralData city={city}/>
      </section>
    </aside>
  );
}

export default GeneralDataSection;
