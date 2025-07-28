import { Card } from "../ui/card";

function GeneralDataSection() {

  const { data, isLoading, error } = useWeather()

  return (
    <aside>
      <section>
        <Card>
          <h2>General Info</h2>
        </Card>
      </section>
    </aside>
  );
}

export default GeneralDataSection;
