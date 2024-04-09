import axios from 'axios';

const axiosApiInstance = axios.create({
  baseURL: `${process.env.VITE_API_URL}`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// axios.interceptors.request.use((config) => {
//   // change to the state
//   const token = localStorage.getItem('token');
//   if (token) config.headers.Authorization = `Bearer ${token}`;

//   return config;
// });

export default axiosApiInstance;
