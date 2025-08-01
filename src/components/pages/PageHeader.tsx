import { Switch } from "@/components/ui/switch";
import CityInput from "../layout/CityInput";

interface PageHeaderProps {
  onSubmit: (city: string) => void;
}

function PageHeader({ onSubmit }: PageHeaderProps) {
  return (
    <header className="container bg-[var(--color-primary)] text-white min-w-screen p-4 flex items-center justify-between">
      <h1 className="font-bold md:text-xl">Weather Dashboard</h1>
      <div className="flex">
        <CityInput onSubmit={onSubmit} />
      </div>
    </header>
  );
}

export default PageHeader;
