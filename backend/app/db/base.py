from app.db.session import Base

from app.models.hcp import HCP
from app.models.interaction import Interaction

__all__ = [
    "Base",
    "HCP",
    "Interaction",
]