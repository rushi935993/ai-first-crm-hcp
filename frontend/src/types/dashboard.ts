import type { HCP } from "./hcp";
import type { Interaction } from "@/types/interaction";


export interface MonthlyInteraction {
  month: string;
  interactions: number;
}

export interface ChartItem {
  name: string;
  value: number;
}

export interface SpecialtyChart {
  specialty: string;
  interactions: number;
}

export interface DashboardResponse {
  total_hcps: number;
  total_interactions: number;
  high_priority: number;
  compliance_rate: number;

  recent_hcps: HCP[];
  recent_interactions: Interaction[];
  priority_distribution: ChartItem[];

  monthly_interactions: MonthlyInteraction[];
  sentiment_distribution: ChartItem[];
  top_specialties: SpecialtyChart[];
}