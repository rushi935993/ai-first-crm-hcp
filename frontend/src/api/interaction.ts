import { api } from "./axios";

export const processInteraction = async (payload: unknown) => {
  const { data } = await api.post(
    "/interactions/process",
    payload,
  );

  return data;
};