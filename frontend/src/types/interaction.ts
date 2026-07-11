export interface Interaction {
  id: string;
  hcp_id: string;

  interaction_type: string;

  raw_input: string;

  notes: string | null;

  ai_summary: string;

  sentiment: string;

  compliance_status: string;

  follow_up: string;

  priority: string;

  interaction_date: string;

  created_at: string;

  updated_at: string;
}

export interface CreateInteractionRequest {
  hcp_id: string;
  interaction_type: string;
  raw_input: string;
  notes?: string | null;
}

export interface UpdateInteractionRequest {
  interaction_type: string;
  raw_input: string;
  notes?: string | null;
}