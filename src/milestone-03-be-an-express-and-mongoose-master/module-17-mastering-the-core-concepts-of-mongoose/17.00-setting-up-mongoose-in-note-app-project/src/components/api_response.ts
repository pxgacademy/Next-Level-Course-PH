import { Response } from "express";

export const api_response = (
  res: Response,
  status: number,
  isSuccess: boolean,
  message: string,
  data: any = null
) => {
  return res.status(status).json({ isSuccess, message, data });
};
