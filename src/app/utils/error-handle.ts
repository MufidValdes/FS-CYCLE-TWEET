import { AxiosError } from 'axios';

export const errorHandler = (error: unknown): string => {
  if (error instanceof AxiosError) {
    return error.response?.data?.message || 'An error occurred. Please try again later.';
  }
  return 'An unexpected error occurred.';
};
