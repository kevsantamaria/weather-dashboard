import GeneralInfoSection from "./GeneralInfoSection";
import TodaySection from "./TodaySection";
import WeekSection from "./WeekSection";

function PageMain() {
  return (
    <main className="pt-20">
      <GeneralInfoSection />
      <TodaySection />
      <WeekSection />
    </main>
  );
}

export default PageMain;
