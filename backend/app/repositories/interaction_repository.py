from uuid import UUID

from sqlalchemy.orm import Session

from app.models.interaction import Interaction
from app.repositories.base_repository import BaseRepository


class InteractionRepository(BaseRepository[Interaction]):
    def __init__(self):
        super().__init__(Interaction)

    def create(
        self,
        db: Session,
        interaction: Interaction,
    ) -> Interaction:
        db.add(interaction)
        db.commit()
        db.refresh(interaction)
        return interaction

    def get_all(
        self,
        db: Session,
    ) -> list[Interaction]:
        return (
            db.query(Interaction)
            .order_by(Interaction.created_at.desc())
            .all()
        )

    def get_by_id(
        self,
        db: Session,
        interaction_id: UUID,
    ) -> Interaction | None:
        return (
            db.query(Interaction)
            .filter(Interaction.id == interaction_id)
            .first()
        )

    def delete(
        self,
        db: Session,
        interaction: Interaction,
    ) -> None:
        db.delete(interaction)
        db.commit()