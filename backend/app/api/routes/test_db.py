from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.session import get_db

router = APIRouter(prefix="/test", tags=["Database"])


@router.get("/")
def test_database(db: Session = Depends(get_db)):
    return {
        "message": "Database session created successfully"
    }