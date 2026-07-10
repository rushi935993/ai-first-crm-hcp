from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column

from app.models.base_model import BaseModel


class HCP(BaseModel):
    __tablename__ = "hcps"

    doctor_name: Mapped[str] = mapped_column(String(150))
    specialty: Mapped[str] = mapped_column(String(100))
    hospital: Mapped[str] = mapped_column(String(150))
    city: Mapped[str] = mapped_column(String(100))