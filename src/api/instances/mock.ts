import axios from "axios";

export const mockInstance = axios.create({
  baseURL: "http://localhost:5173/mock",
});
