from datetime import datetime
from typing import Optional
from uuid import UUID

from pydantic import BaseModel, ConfigDict

from app.models.interaction import InteractionType


class InteractionCreate(BaseModel):
    hcp_id: str
    interaction_type: InteractionType
    raw_input: str
    notes: Optional[str] = None


class InteractionUpdate(BaseModel):
    notes: Optional[str] = None


class InteractionResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: UUID

    hcp_id: str

    interaction_type: InteractionType

    raw_input: str

    notes: Optional[str] = None

    ai_summary: Optional[str] = None

    sentiment: Optional[str] = None

    compliance_status: Optional[str] = None

    follow_up: Optional[str] = None

    priority: Optional[str] = None

    interaction_date: datetime

    created_at: datetime

    updated_at: datetime

from app.ai.models import AIAnalysis


class ProcessInteractionResponse(BaseModel):
    interaction: InteractionResponse
    analysis: AIAnalysis