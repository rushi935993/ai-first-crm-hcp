from pydantic import BaseModel

from app.ai.models import AIAnalysis


class CRMState(BaseModel):
    """
    Shared state passed through the LangGraph workflow.
    """

    hcp_id: str
    interaction_type: str
    raw_input: str
    notes: str | None = None

    analysis: AIAnalysis | None = None

    success: bool = True
    error: str | None = None