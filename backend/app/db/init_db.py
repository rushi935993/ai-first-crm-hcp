from app.db.base import Base
from app.db.session import engine


def init_db() -> None:
    """
    Creates database tables during development.

    Later Alembic migrations will replace this.
    """
    Base.metadata.create_all(bind=engine)