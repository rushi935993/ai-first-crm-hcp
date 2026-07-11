export interface AIAnalysis {
  summary: string;
  sentiment: string;
  compliance_status: string;
  follow_up: string;
  priority: string;
  missing_information: string[];
  extracted_entities: string[];
}

export interface InteractionRequest {
  hcp_id: string;
  interaction_type: "VISIT" | "CALL" | "EMAIL" | "WHATSAPP";
  raw_input: string;
  notes?: string;
}

export interface InteractionResponse {
  id: string;
  hcp_id: string;
  interaction_type: string;
  raw_input: string;
  notes?: string;

  ai_summary?: string;
  sentiment?: string;
  compliance_status?: string;
  follow_up?: string;
  priority?: string;

  interaction_date: string;
  created_at: string;
}