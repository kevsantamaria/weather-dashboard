// CityInput.tsx
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";

interface Props {
  onSubmit: (city: string) => void;
}

function CityInput({ onSubmit }: Props) {
  const [city, setCity] = useState("");

  return (
    <section className="flex items-center justify-center gap-4">
      <Input
        type="text"
        placeholder="Enter city name"
        className="w-full max-w-xs"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        autoFocus
      />
      <Button
        className="bg-blue-500 hover:bg-blue-600 font-bold cursor-pointer"
        onClick={() => onSubmit(city)}
      >
        Search
      </Button>
    </section>
  );
}

export default CityInput;
