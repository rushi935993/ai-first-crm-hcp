from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.schemas.interaction import (
    InteractionCreate,
    InteractionResponse,
)
from app.services.interaction_service import InteractionService

router = APIRouter(
    prefix="/interactions",
    tags=["Interactions"],
)

service = InteractionService()


@router.post(
    "/process",
    response_model=InteractionResponse,
    status_code=status.HTTP_201_CREATED,
)
def process_interaction(
    payload: InteractionCreate,
    db: Session = Depends(get_db),
):
    return service.process_interaction(
        db,
        payload,
    )