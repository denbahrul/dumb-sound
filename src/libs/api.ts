import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

export const apiV1 = axios.create({
  baseURL: `${baseUrl}/api/v1`,
});
