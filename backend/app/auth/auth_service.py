from sqlalchemy.orm import Session

from app.auth.password import verify_password
from app.auth.jwt_handler import create_access_token

from app.models.user import User


class AuthService:

    def login(
        self,
        db: Session,
        email: str,
        password: str,
    ):
        user = (
            db.query(User)
            .filter(User.email == email)
            .first()
        )

        if not user:
            return None

        if not verify_password(
            password,
            user.password_hash,
        ):
            return None

        token = create_access_token(
            {
                "sub": user.email,
                "role": user.role,
            }
        )

        return {
            "access_token": token,
            "token_type": "bearer",
        }