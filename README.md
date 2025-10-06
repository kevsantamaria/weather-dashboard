# Weather Dashboard ⛅

A modern weather application built with **React**, **Vite**, and **TypeScript**, designed to provide accurate and visually appealing weather information.  
The app is powered by the <a href="https://www.visualcrossing.com/weather-api/" target="_blank" >Visual Crossing Weather API</a> and includes modern UI/UX features.

## ✨ Features

- **General Weather Information**
- **Next 24 Hours Forecast**
- **7-Day Precipitation Bar Chart**
- **7-Day Max/Min Temperatures Line Chart**
- **Responsive Design**
- **Dark/Light Mode Support**
- **Celsius-Only Display**

## 🛠 Tech Stack

- **Framework & Runtime:** React, Vite, Bun  
- **Language:** TypeScript  
- **Styling:** TailwindCSS, shadcn/ui  
- **Data Handling:** TanStack Query, Axios, Zustand  
- **Charts:** Recharts  
- **Date & Time:** Day.js 

## ⚡ Installation

1. Clone the repository:
  ```bash
  git clone https://github.com/kevsantamaria/weather-dashboard.git
  cd weather-dashboard
  ```

2. Install dependencies using **Bun**:
  ```bash
  bun install
  ```

3. Create a `.env` file in the root directory and add your **Visual Crossing Weather API** key:
  ```env
  VITE_WEATHER_API_KEY=your_api_key_here
  ```

4. Start the development server:
  ```bash
  bun dev
  ```

## 🚀 Usage

- Open the app in your browser at `http://localhost:5173`.
- Search for a location to view its weather information.
- Toggle between dark and light modes using the theme switcher.

## 🖼 Screenshots

![Screenshot](public/screenshot.webp)

## 🌍 Live Demo

- <a href="https://kevsantamaria.github.io/weather-dashboard/" target="_blank" >kevsantamaria.github.io/weather-dashboard/</a>

---

Made with ❤️ by <a href="https://github.com/kevsantamaria" target="_blank" >Kevin Santamaria</a>
