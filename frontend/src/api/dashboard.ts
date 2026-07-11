import { api } from "./axios";
import type { DashboardResponse } from "@/types/dashboard";

export async function getDashboard() {
  const { data } = await api.get<DashboardResponse>(
    "/dashboard"
  );

  return data;
}