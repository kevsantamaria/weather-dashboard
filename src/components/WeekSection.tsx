import { Card } from "./ui/card";
import WeekDays from './WeekDays'

const weekSectionProps = [
  { day: "Monday", weatherImg: "", temperature: "", sensation: "" },
  { day: "Tuesday", weatherImg: "", temperature: "", sensation: "" },
  { day: "Wednesday", weatherImg: "", temperature: "", sensation: "" },
  { day: "Thursday", weatherImg: "", temperature: "", sensation: "" },
  { day: "Friday", weatherImg: "", temperature: "", sensation: "" },
  { day: "Saturday", weatherImg: "", temperature: "", sensation: "" },
  { day: "Sunday", weatherImg: "", temperature: "", sensation: "" },
];

function WeekSection() {
  return (
    <aside className="container">
      <section className="flex flex-col gap-2 items-center justify-center">
        {/* <div key={day}>
          {weekSectionProps.map(({day, weatherImg, temperature, sensation}) => (
            <WeekDays day={day} weatherImg={weatherImg} temperature={temperature} sensation={sensation} />
          ))}
        </div> */}
      </section>
    </aside>
  );
}

export default WeekSection;
