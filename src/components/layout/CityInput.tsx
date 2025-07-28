import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";

function CityInput() {
  const [city, setCity] = useState("");
  const [submittedCity, setSubmittedCity] = useState("");

  return (
    <section className="flex items-center justify-center gap-4">
      <Input
        type="text"
        placeholder="Enter city name"
        className="w-full max-w-xs"
        onChange={(e) => setCity(e.target.value)}
      />
      <Button className="bg-blue-500 hover:bg-blue-600 font-bold cursor-pointer2"
      onClick={() => setSubmittedCity(city)}
      >
        Search
      </Button>
    </section>
  );
}

export default CityInput;
