import { api } from "./axios";

export const getHCPs = async () => {
  const { data } = await api.get("/hcps");
  return data;
};

export const createHCP = async (payload: unknown) => {
  const { data } = await api.post("/hcps", payload);
  return data;
};

export async function updateHCP(
  id: string,
  payload: any,
) {
  const { data } = await api.put(
    `/hcps/${id}`,
    payload,
  );

  return data;
}

export async function deleteHCP(id: string) {
  await api.delete(`/hcps/${id}`);
}