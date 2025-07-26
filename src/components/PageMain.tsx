import GeneralInfoSection from "./GeneralInfoSection";
import TodaySection from "./TodaySection";
import WeekSection from "./WeekSection";

function PageMain() {
  return (
    <main className="m-auto pt-20 max-w-[85%] min-h-screen grid grid-cols-2 grid-rows-2 gap-4">
      <GeneralInfoSection />
      <TodaySection />
      <WeekSection />
    </main>
  );
}

export default PageMain;
