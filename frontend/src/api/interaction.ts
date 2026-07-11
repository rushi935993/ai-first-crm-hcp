import { api } from "./axios";

import type { InteractionRequest } from "@/features/interaction/types";

export const processInteraction = async (
  payload: InteractionRequest
) => {
  const { data } = await api.post(
    "/interactions/process",
    payload
  );

  return data;
};

export const getInteractions = async () => {
  const { data } = await api.get("/interactions");

  return data;
};