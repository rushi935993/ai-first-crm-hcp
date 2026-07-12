from app.db.init_db import init_db
from app.db.session import SessionLocal
from app.models.user import User
from app.auth.password import hash_password
init_db()
db = SessionLocal()

try:
    existing = (
        db.query(User)
        .filter(User.email == "admin@crm.com")
        .first()
    )

    if existing:
        print("Admin user already exists.")

    else:
        admin = User(
            name="Administrator",
            email="admin@crm.com",
            password_hash=hash_password("Admin@123"),
            role="admin",
        )

        db.add(admin)
        db.commit()

        print("Admin user created successfully.")

finally:
    db.close()