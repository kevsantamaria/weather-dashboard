import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import {Search} from 'lucide-react'

interface Props {
  onSubmit: (city: string) => void;
}

function CityInput({ onSubmit }: Props) {
  const [city, setCity] = useState("");

  return (
    <section className="flex justify-end gap-2">
      <Input
        type="text"
        placeholder="Enter city name"
        className="bg-white text-[var(--text-light)] w-[50%] md:w-full max-w-xs selection:bg-[var(--color-accent)]"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        autoFocus
      />
      <Button
        className="bg-[var(--color-yellow-accent)] hover:bg-[var(--color-dark-accent)] font-bold cursor-pointer"
        onClick={() => onSubmit(city)}
      >
        <span className="hidden md:flex items-center gap-1">Search <Search /></span>
        <span className="md:hidden font-bold"><Search strokeWidth={4}/></span>
      </Button>
    </section>
  );
}

export default CityInput;
