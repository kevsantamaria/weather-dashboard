function PageFooter() {
  return (
    <footer className="container min-w-screen flex gap-4 items-center justify-center flex-col md:flex-row py-4 bg-gray-800 text-white">
      <span>
        Made by{' '}
        <a
          className="font-bold text-blue-400 underline visited:text-cyan-300"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/kevsantamaria"
        >
          Kevin Santamaria
        </a>
      </span>
      <span>
        Data from{' '}
        <a
          className="font-bold text-blue-400 underline visited:text-cyan-300"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.visualcrossing.com/weather-api/"
        >
          Visual Crossing Weather API
        </a>
      </span>
    </footer>
  );
}

export default PageFooter;
