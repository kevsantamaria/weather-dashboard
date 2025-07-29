import CityInput from "../layout/CityInput";
import GeneralDataSection from "../layout/GeneralDataSection";
import TodayDataSection from "../layout/TodayDataSection";
import WeekDataSection from "../layout/WeekDataSection";
import { useState } from "react";

function PageMain() {

  const [city, setCity] = useState("");

  return (
    <main className="m-auto max-w-[85%] flex-1 grid grid-cols-2 gap-4">
      <CityInput onSubmit={setCity} />
      <WeekDataSection />
      <GeneralDataSection city={city} />
      <TodayDataSection />
    </main>
  );
}

export default PageMain;
