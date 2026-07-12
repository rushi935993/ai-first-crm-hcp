# Local Setup

## Clone Repository

```
git clone <repository>
```

---

## Backend

```
cd backend

python -m venv venv

pip install -r requirements.txt

uvicorn app.main:app --reload
```

---

## Frontend

```
cd frontend

npm install

npm run dev
```

---

## Environment Variables

Backend

```
DATABASE_URL=

SECRET_KEY=

JWT_ALGORITHM=

ACCESS_TOKEN_EXPIRE_MINUTES=

GROQ_API_KEY=
```

Frontend

```
VITE_API_BASE_URL=
```