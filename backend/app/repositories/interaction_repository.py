from app.models.interaction import Interaction
from app.repositories.base_repository import BaseRepository


class InteractionRepository(BaseRepository[Interaction]):
    def __init__(self):
        super().__init__(Interaction)