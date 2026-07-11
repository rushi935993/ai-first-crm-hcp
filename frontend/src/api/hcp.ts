import { api } from "./axios";

export const getHCPs = async () => {
  const { data } = await api.get("/hcps");
  return data;
};

export const createHCP = async (payload: unknown) => {
  const { data } = await api.post("/hcps", payload);
  return data;
};