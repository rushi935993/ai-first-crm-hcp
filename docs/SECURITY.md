# Security

## Authentication

JWT Bearer Token

---

## Passwords

Passwords are hashed using bcrypt before storage.

---

## Protected APIs

All APIs require JWT except login.

---

## CORS

Only trusted frontend origins are allowed.

---

## Environment Variables

Sensitive credentials are stored in environment variables.

---

## SQL Injection Protection

SQLAlchemy ORM prevents SQL injection through parameterized queries.

---

## Future Enhancements

- Refresh Tokens
- Role-Based Access Control
- Multi-Factor Authentication