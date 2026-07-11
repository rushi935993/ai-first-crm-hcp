from sqlalchemy import Boolean, String
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.models.base_model import BaseModel


class HCP(BaseModel):
    """
    Healthcare Professional model.
    """

    __tablename__ = "hcps"

    doctor_name: Mapped[str] = mapped_column(
        String(150),
        nullable=False,
        index=True,
    )

    specialty: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
        index=True,
    )

    hospital: Mapped[str] = mapped_column(
        String(150),
        nullable=False,
    )

    city: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
    )

    state: Mapped[str | None] = mapped_column(
        String(100),
        nullable=True,
    )

    email: Mapped[str | None] = mapped_column(
        String(150),
        nullable=True,
        unique=True,
    )

    phone: Mapped[str | None] = mapped_column(
        String(20),
        nullable=True,
    )

    territory: Mapped[str | None] = mapped_column(
        String(100),
        nullable=True,
    )

    is_active: Mapped[bool] = mapped_column(
        Boolean,
        default=True,
        nullable=False,
    )