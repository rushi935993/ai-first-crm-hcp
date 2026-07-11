from app.schemas.hcp import HCPResponse
from app.schemas.interaction import InteractionResponse
from pydantic import BaseModel

from pydantic import BaseModel

class MonthlyInteraction(BaseModel):
    month: str
    interactions: int

class ChartItem(BaseModel):
    name: str
    value: int

class SpecialtyChart(BaseModel):
    specialty: str
    interactions: int

class DashboardResponse(BaseModel):
    total_hcps: int
    total_interactions: int
    high_priority: int
    compliance_rate: float

    recent_hcps: list[HCPResponse]
    recent_interactions: list[InteractionResponse]

    monthly_interactions: list[MonthlyInteraction]
    priority_distribution: list[ChartItem]
    sentiment_distribution: list[ChartItem]
    top_specialties: list[SpecialtyChart]