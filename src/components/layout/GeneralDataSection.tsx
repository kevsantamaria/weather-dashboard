import { Card } from "../ui/card";
import GeneralData from '../layout-data/GeneralData'

interface GeneralDataSectionProps {
  city: string;
}

function GeneralDataSection({city}: GeneralDataSectionProps) {

  return (
    <aside>
      <section>
        <Card>
          <GeneralData city={city}/>
        </Card>
      </section>
    </aside>
  );
}

export default GeneralDataSection;
