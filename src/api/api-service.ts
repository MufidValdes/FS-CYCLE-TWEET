import { AxiosRequestConfig, AxiosError } from 'axios';
import { apiV1 } from './api-config';

// Generic request function with Axios and better error handling
export const apiRequest = async <T>(config: AxiosRequestConfig): Promise<T> => {
  try {
    // Menggunakan instance axios yang telah didefinisikan
    const response = await apiV1(config);
    return response.data as T;  // Pastikan tipe sesuai generik yang dikirimkan
  } catch (error) {
    if (error instanceof AxiosError) {
      // Jika error merupakan instance dari AxiosError, kita bisa akses detail lebih baik
      throw error.response?.data || error.message;
    } else {
      // Untuk jenis error lain, kembalikan error generik
      throw new Error('An unexpected error occurred');
    }
  }
};
