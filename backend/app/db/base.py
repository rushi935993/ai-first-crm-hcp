from app.db.session import Base

# Import models so SQLAlchemy/Alembic discovers them.
from app.models.hcp import HCP

__all__ = ["Base", "HCP"]