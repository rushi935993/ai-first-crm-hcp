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