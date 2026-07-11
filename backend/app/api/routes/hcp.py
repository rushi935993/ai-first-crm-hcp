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


@router.post(
    "",
    response_model=HCPResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_hcp(
    hcp: HCPCreate,
    db: Session = Depends(get_db),
):
    try:
        return service.create_hcp(db, hcp)

    except DuplicateHCPException as exc:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail=str(exc),
        )


@router.get(
    "",
    response_model=list[HCPResponse],
)
def list_hcps(
    skip: int = Query(0, ge=0),
    limit: int = Query(100, ge=1, le=100),
    db: Session = Depends(get_db),
):
    return service.list_hcps(
        db=db,
        skip=skip,
        limit=limit,
    )


@router.get(
    "/search",
    response_model=list[HCPResponse],
)
def search_hcps(
    query: str = Query(..., min_length=1),
    db: Session = Depends(get_db),
):
    return service.search_hcps(
        db=db,
        query=query,
    )


@router.get(
    "/{hcp_id}",
    response_model=HCPResponse,
)
def get_hcp(
    hcp_id: str,
    db: Session = Depends(get_db),
):
    hcp = service.get_hcp(
        db=db,
        hcp_id=hcp_id,
    )

    if not hcp:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="HCP not found",
        )

    return hcp


@router.put(
    "/{hcp_id}",
    response_model=HCPResponse,
)
def update_hcp(
    hcp_id: str,
    payload: HCPUpdate,
    db: Session = Depends(get_db),
):
    hcp = service.get_hcp(
        db=db,
        hcp_id=hcp_id,
    )

    if not hcp:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="HCP not found",
        )

    return service.update_hcp(
        db=db,
        hcp=hcp,
        update_data=payload,
    )


@router.delete(
    "/{hcp_id}",
    status_code=status.HTTP_204_NO_CONTENT,
)
def delete_hcp(
    hcp_id: str,
    db: Session = Depends(get_db),
):
    hcp = service.get_hcp(
        db=db,
        hcp_id=hcp_id,
    )

    if not hcp:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="HCP not found",
        )

    service.delete_hcp(
        db=db,
        hcp=hcp,
    )

    return None