import PageHeader from "./components/pages/PageHeader";
import PageMain from "./components/pages/PageMain";
import PageFooter from "./components/pages/PageFooter";
import "./index.css";

function App() {
  return (
      <section className="flex flex-col min-h-screen gap-4">
        <PageHeader />
        <PageMain />
        <PageFooter />
      </section>
  );
}

export default App;
