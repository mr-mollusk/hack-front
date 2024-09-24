import { mockInstance } from "../instances/mock";

export const getMockTodoes = async () => {
  return await mockInstance.get("/todo.json");
};
