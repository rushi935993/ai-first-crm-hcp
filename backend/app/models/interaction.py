from datetime import datetime
from enum import Enum

from sqlalchemy import DateTime, Enum as SQLEnum, ForeignKey, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.models.base_model import BaseModel


class InteractionType(str, Enum):
    VISIT = "VISIT"
    CALL = "CALL"
    EMAIL = "EMAIL"
    WHATSAPP = "WHATSAPP"


class Interaction(BaseModel):
    __tablename__ = "interactions"

    hcp_id: Mapped[str] = mapped_column(
        ForeignKey("hcps.id"),
        nullable=False,
        index=True,
    )

    interaction_type: Mapped[InteractionType] = mapped_column(
        SQLEnum(InteractionType),
        nullable=False,
    )

    raw_input: Mapped[str] = mapped_column(
        Text,
        nullable=False,
    )

    notes: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    ai_summary: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    sentiment: Mapped[str | None] = mapped_column(
        nullable=True,
    )

    compliance_status: Mapped[str | None] = mapped_column(
        nullable=True,
    )

    follow_up: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    priority: Mapped[str | None] = mapped_column(
        nullable=True,
    )

    interaction_date: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
    )

    hcp = relationship("HCP", back_populates="interactions")