import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services',
  params: {
    key: import.meta.env.VITE_VISUALCROSSING_API_KEY,
    unitGroup: 'metric',
    contentType: 'json',
  },
});

export default axiosInstance;
