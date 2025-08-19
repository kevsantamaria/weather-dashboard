import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services',
  params: {
    key: import.meta.env.VITE_VISUALCROSSING_API_KEY,
    unitGroup: 'metric',
    contentType: 'json',
  },
});

export default api;
