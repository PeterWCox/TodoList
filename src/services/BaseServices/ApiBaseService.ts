import axios from "axios";

export interface ApiResponse<T> {
  results: T | null;
  message: string;
}

export class BaseService<T> {
  public get = async (url: string): Promise<ApiResponse<T>> => {
    try {
      const response = await axios.get<T>(url);

      return {
        results: response.data as T,
        message: `${response.status} ${response.statusText}`,
      };
    } catch (error) {
      console.error(error);
      return {
        results: null,
        message: error as string,
      };
    }
  };
}
