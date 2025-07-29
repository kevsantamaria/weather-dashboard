import CityInput from "../layout/CityInput";
import GeneralDataSection from "../layout/GeneralDataSection";
import TodayDataSection from "../layout/TodayDataSection";
import WeekDataSection from "../layout/WeekDataSection";
import { useState } from "react";

function PageMain() {

  const [city, setCity] = useState("");

  return (
    <main className="m-auto pt-20 max-w-[85%] grid grid-cols-2 grid-rows-2 gap-4">
      <CityInput onSubmit={setCity} />
      <GeneralDataSection city={city} />
      <WeekDataSection />
      <TodayDataSection />
    </main>
  );
}

export default PageMain;
