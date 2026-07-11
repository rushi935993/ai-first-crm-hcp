from typing import Literal

from pydantic import BaseModel, Field


class AIAnalysis(BaseModel):
    """
    Structured output returned by the LLM.
    """

    summary: str = Field(
        description="Professional summary of the interaction."
    )

    sentiment: Literal[
        "Positive",
        "Neutral",
        "Negative",
    ]

    compliance_status: Literal[
        "Compliant",
        "Needs Review",
        "Non-Compliant",
    ]

    follow_up: str

    priority: Literal[
        "Low",
        "Medium",
        "High",
    ]

    missing_information: list[str]

    extracted_entities: list[str]