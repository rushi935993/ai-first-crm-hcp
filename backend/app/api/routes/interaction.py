from app.core.exceptions import InteractionNotFoundException
from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from uuid import UUID

from fastapi import HTTPException

from app.db.session import get_db
from app.schemas.interaction import (
    InteractionCreate,
    InteractionResponse,
    ProcessInteractionResponse,
)
from app.services.interaction_service import InteractionService

router = APIRouter(
    prefix="/interactions",
    tags=["Interactions"],
)

service = InteractionService()

@router.get(
    "",
    response_model=list[InteractionResponse],
)
def list_interactions(
    db: Session = Depends(get_db),
):
    return service.list_interactions(db)

@router.get(
    "/{interaction_id}",
    response_model=InteractionResponse,
)
def get_interaction(
    interaction_id: UUID,
    db: Session = Depends(get_db),
):
    try:
        return service.get_interaction(
            db,
            interaction_id,
        )

    except InteractionNotFoundException as exc:
        raise HTTPException(
            status_code=404,
            detail=str(exc),
        )
    
@router.delete(
    "/{interaction_id}",
    status_code=status.HTTP_204_NO_CONTENT,
)
def delete_interaction(
    interaction_id: UUID,
    db: Session = Depends(get_db),
):
    service.delete_interaction(
        db,
        interaction_id,
    )

@router.post(
    "/process",
    response_model=ProcessInteractionResponse,
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