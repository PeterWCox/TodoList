import { ApiResponse } from "./ApiBaseService";

export class LocalBaseStorageBaseService<T> {
  private _key: string = "";

  constructor(key: string) {
    this._key = key;
  }

  private errorMessage = (verb: string): string => {
    return `An unknown error occured while ${verb} data from local storage - maybe your browser doesn't support local storage?`;
  };

  public getFromLocalStorage = (): ApiResponse<T> => {
    try {
      const todos = localStorage.getItem(this._key);

      return {
        results: todos ? JSON.parse(todos) : null,
        message: todos ? "Success" : "No data found",
      };
    } catch (error) {
      console.error(error);
      return {
        results: null,
        message: this.errorMessage("getting"),
      };
    }
  };

  public setLocalStorage = (data: T): ApiResponse<T> => {
    try {
      localStorage.setItem(this._key, JSON.stringify(data));

      const todos = localStorage.getItem(this._key);
      return {
        results: todos ? JSON.parse(todos) : null,
        message: todos ? "Success" : "No data found",
      };
    } catch (error) {
      console.error(error);
      return {
        results: null,
        message: this.errorMessage("setting"),
      };
    }
  };
}
