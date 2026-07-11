import { api } from "./axios";
import type { CreateInteractionRequest } from "@/types/interaction";

// Existing function
export async function processInteraction(
  payload: CreateInteractionRequest
) {
  const { data } = await api.post(
    "/interactions/process",
    payload
  );

  return data;
}

// New function
export async function getInteractions() {
  const { data } = await api.get("/interactions");
  return data;
}