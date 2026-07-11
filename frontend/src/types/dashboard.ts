import type { HCP } from "./hcp";
import type { InteractionResponse } from "@/features/interaction/types";

export interface DashboardResponse {
  total_hcps: number;
  total_interactions: number;
  high_priority: number;
  compliance_rate: number;

  recent_hcps: HCP[];
  recent_interactions: InteractionResponse[];
}