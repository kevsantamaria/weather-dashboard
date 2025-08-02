import { useState } from "react";
import PageHeader from "./components/pages/PageHeader";
import PageMain from "./components/pages/PageMain";
import PageFooter from "./components/pages/PageFooter";
import "./index.css";

function App() {

  const [city, setCity] = useState("");

  return (
      <section className="flex flex-col min-h-screen gap-4">
        <PageHeader city={city} onSubmit={setCity}/>
        <PageMain city={city}/>
        <PageFooter />
      </section>
  );
}

export default App;
