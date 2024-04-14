import { toast } from '@/components/ui/use-toast';
import { router } from '@/router/AppRouter';
import axios, { AxiosError, AxiosResponse } from 'axios';

const axiosApiInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axiosApiInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  (error: AxiosError) => {
    const { data, status } = error.response as AxiosResponse;
    console.log('data from AxiosError', data);
    console.log('status from AxiosError', status);
    switch (status) {
      case 400:
        if (data.errors) {
          const modelStateErrors: string[] = [];
          for (const key in data.errors) {
            if (data.errors[key]) {
              modelStateErrors.push(data.errors[key]);
            }
          }
          throw modelStateErrors.flat();
        }
        console.log(data.msg);
        break;
      case 401:
        toast({
          description: data.msg,
        });
        break;
      case 403:
        toast({
          description: data.msg,
        });
        break;
      case 500:
        router.navigate('/server-error', { state: { error: data } });
        break;
    }
    return Promise.reject(error);
  },
);

export default axiosApiInstance;
