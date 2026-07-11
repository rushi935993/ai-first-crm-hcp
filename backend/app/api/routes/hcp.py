from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from app.core.exceptions import (
    DuplicateHCPException,
    HCPNotFoundException,
)
from app.db.session import get_db
from app.schemas.hcp import (
    HCPCreate,
    HCPResponse,
    HCPUpdate,
)
from app.services.hcp_service import HCPService

router = APIRouter(
    prefix="/hcps",
    tags=["HCP"],
)

service = HCPService()