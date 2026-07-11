export interface HCP {
  id: string;
  doctor_name: string;
  specialty: string;
  hospital: string;
  city: string;
  state: string;
  email: string;
  phone: string;
  territory: string;
  created_at: string;
  updated_at: string;
}

export interface CreateHCPRequest {
  doctor_name: string;
  specialty: string;
  hospital: string;
  city: string;
  state: string;
  email: string;
  phone: string;
  territory: string;
}