from app.schemas.hcp import HCPResponse
from app.schemas.interaction import InteractionResponse
from pydantic import BaseModel


class DashboardResponse(BaseModel):
    total_hcps: int
    total_interactions: int
    high_priority: int
    compliance_rate: float

    recent_hcps: list[HCPResponse]
    recent_interactions: list[InteractionResponse]