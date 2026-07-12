# Deployment Guide

## Frontend

Platform

- Vercel

Build

```
npm run build
```

Environment Variable

```
VITE_API_BASE_URL=
```

---

## Backend

Platform

- Render

Build Command

```
pip install -r requirements.txt
```

Start Command

```
uvicorn app.main:app --host 0.0.0.0 --port $PORT
```

---

## Database

Platform

Neon PostgreSQL

Connection

```
DATABASE_URL=
```

---

## Deployment Flow

```
GitHub

↓

Render

↓

Neon

↓

Vercel
```