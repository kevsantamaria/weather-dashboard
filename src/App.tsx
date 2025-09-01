import { useState } from 'react';
import PageHeader from './components/structure/PageHeader';
import PageMain from './components/structure/PageMain';
import PageFooter from './components/structure/PageFooter';
import './index.css';

function App() {
  const [city, setCity] = useState('');

  return (
    <section className="flex flex-col min-h-screen gap-4 bg-[var(--gradient-light)] dark:bg-[var(--gradient-dark)]">
      <PageHeader city={city} onSubmit={setCity} />
      <PageMain city={city} />
      <PageFooter />
    </section>
  );
}

export default App;
