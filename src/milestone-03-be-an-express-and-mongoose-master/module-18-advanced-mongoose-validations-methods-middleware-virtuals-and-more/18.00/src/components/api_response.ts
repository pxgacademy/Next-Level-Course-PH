import { Response } from "express";


interface ApiResponse<T = any> {
  isSuccess: boolean;
  message: string;
  data?: T | null;
}


export const apiResponse = <T>(
  res: Response,
  statusCode: number,
  isSuccess: boolean,
  message: string,
  data: T | null = null
) => {
  const response: ApiResponse<T> = {
    isSuccess,
    message,
    data,
  };

  return res.status(statusCode).json(response);
};
