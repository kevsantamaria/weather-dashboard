function PageFooter() {
  return (
    <footer className="container min-w-screen flex items-center justify-center flex-col md:flex-row py-4 bg-gray-800 text-white">
      <section>
        <span>
          Made by{' '}
          <a className="font-bold text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer" href="#">
            Kevin Santamaria
          </a>
        </span>
        <span>
          Data from{' '} 
          <a className="font-bold text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer" href="#">Visual Crossing Weather API</a>
        </span>
      </section>
    </footer>
  );
}

export default PageFooter;
