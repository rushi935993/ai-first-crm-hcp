from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, ConfigDict, EmailStr, Field


class HCPBase(BaseModel):
    doctor_name: str = Field(..., min_length=2, max_length=150)
    specialty: str = Field(..., min_length=2, max_length=100)
    hospital: str = Field(..., min_length=2, max_length=150)
    city: str = Field(..., min_length=2, max_length=100)

    state: str | None = Field(default=None, max_length=100)
    email: EmailStr | None = None
    phone: str | None = Field(default=None, max_length=20)
    territory: str | None = Field(default=None, max_length=100)


class HCPCreate(HCPBase):
    """Schema used when creating an HCP."""
    pass


class HCPUpdate(BaseModel):
    doctor_name: str | None = Field(default=None, min_length=2, max_length=150)
    specialty: str | None = Field(default=None, min_length=2, max_length=100)
    hospital: str | None = Field(default=None, min_length=2, max_length=150)
    city: str | None = Field(default=None, min_length=2, max_length=100)

    state: str | None = Field(default=None, max_length=100)
    email: EmailStr | None = None
    phone: str | None = Field(default=None, max_length=20)
    territory: str | None = Field(default=None, max_length=100)

    is_active: bool | None = None


class HCPResponse(HCPBase):
    id: UUID
    is_active: bool
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)


class HCPListResponse(BaseModel):
    total: int
    items: list[HCPResponse]