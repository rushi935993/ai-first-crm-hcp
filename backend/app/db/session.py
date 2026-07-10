from collections.abc import Generator

from sqlalchemy.orm import Session

from app.db.database import SessionLocal


def get_db() -> Generator[Session, None, None]:
    """
    Database dependency.

    Creates a new SQLAlchemy session
    for every request and closes it automatically.
    """
    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()