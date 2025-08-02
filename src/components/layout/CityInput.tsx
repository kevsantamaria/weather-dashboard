import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { Search } from "lucide-react";

interface Props {
  onSubmit: (city: string) => void;
}

function CityInput({ onSubmit }: Props) {
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim() === "") return;
    onSubmit(city.trim());
    setCity("");
  }

  return (
    <section>
      <form onSubmit={handleSubmit} className="flex justify-end gap-2">
        <Input
          type="text"
          placeholder="Enter city name"
          className="bg-white text-[var(--text-light)] w-[50%] md:w-full max-w-xs selection:bg-blue-300"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          autoFocus
        />
        <Button
        type="submit"
          className="bg-[var(--color-primary)] hover:bg-[var(--color-dark-accent)] font-bold cursor-pointer"
        >
          <span className="hidden md:flex items-center gap-1">
            Search <Search strokeWidth={4} />
          </span>
          <span className="md:hidden font-bold">
            <Search strokeWidth={4} />
          </span>
        </Button>
      </form>
    </section>
  );
}

export default CityInput;
