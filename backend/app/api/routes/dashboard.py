from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.auth.dependencies import get_current_user
from app.services.dashboard_service import DashboardService

dashboard_service = DashboardService()
router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"],
)

@router.get("")
def get_dashboard(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    return dashboard_service.get_dashboard(db)