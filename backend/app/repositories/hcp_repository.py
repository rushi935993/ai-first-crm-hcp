from sqlalchemy import or_
from sqlalchemy.orm import Session

from app.models.hcp import HCP
from app.repositories.base_repository import BaseRepository


class HCPRepository(BaseRepository[HCP]):
    def __init__(self):
        super().__init__(HCP)

    def search(
        self,
        db: Session,
        query: str,
    ) -> list[HCP]:
        return (
            db.query(HCP)
            .filter(
                or_(
                    HCP.doctor_name.ilike(f"%{query}%"),
                    HCP.specialty.ilike(f"%{query}%"),
                    HCP.hospital.ilike(f"%{query}%"),
                )
            )
            .all()
        )

    def get_by_email(
        self,
        db: Session,
        email: str,
    ) -> HCP | None:
        return (
            db.query(HCP)
            .filter(HCP.email == email)
            .first()
        )