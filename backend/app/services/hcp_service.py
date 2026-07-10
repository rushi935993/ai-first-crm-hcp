from sqlalchemy.orm import Session

from app.models.hcp import HCP
from app.repositories.hcp_repository import HCPRepository
from app.schemas.hcp import HCPCreate, HCPUpdate


class HCPService:
    """
    Business logic for Healthcare Professionals.
    """

    def __init__(self):
        self.repository = HCPRepository()

    def create_hcp(
        self,
        db: Session,
        hcp_data: HCPCreate,
    ) -> HCP:
        """
        Create a new HCP after validating business rules.
        """

        # Check duplicate email
        if hcp_data.email:
            existing = self.repository.get_by_email(
                db,
                hcp_data.email,
            )

            if existing:
                raise ValueError("HCP with this email already exists.")

        hcp = HCP(
            doctor_name=hcp_data.doctor_name,
            specialty=hcp_data.specialty,
            hospital=hcp_data.hospital,
            city=hcp_data.city,
            state=hcp_data.state,
            email=hcp_data.email,
            phone=hcp_data.phone,
            territory=hcp_data.territory,
        )

        return self.repository.create(db, hcp)

    def get_hcp(
        self,
        db: Session,
        hcp_id: str,
    ) -> HCP | None:
        return self.repository.get_by_id(db, hcp_id)

    def list_hcps(
        self,
        db: Session,
        skip: int = 0,
        limit: int = 100,
    ) -> list[HCP]:
        return self.repository.get_all(db, skip, limit)

    def search_hcps(
        self,
        db: Session,
        query: str,
    ) -> list[HCP]:
        return self.repository.search(db, query)

    def update_hcp(
        self,
        db: Session,
        hcp: HCP,
        update_data: HCPUpdate,
    ) -> HCP:
        data = update_data.model_dump(exclude_unset=True)

        for field, value in data.items():
            setattr(hcp, field, value)

        return self.repository.update(db, hcp)

    def delete_hcp(
        self,
        db: Session,
        hcp: HCP,
    ) -> None:
        self.repository.delete(db, hcp)