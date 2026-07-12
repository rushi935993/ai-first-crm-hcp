# API Documentation

## Overview

The AI-First CRM exposes RESTful APIs built using FastAPI. All endpoints return JSON responses and follow standard HTTP status codes.

Base URL

```
Production
https://YOUR_RENDER_URL/api/v1

Local
http://localhost:8000/api/v1
```

---

# Authentication

Authentication uses JWT Bearer Tokens.

Protected endpoints require:

```
Authorization: Bearer <JWT_TOKEN>
```

---

# Authentication APIs

## Login

### POST

```
/auth/login
```

Request

```json
{
  "email": "admin@crm.com",
  "password": "Admin@123"
}
```

Response

```json
{
  "access_token": "JWT_TOKEN",
  "token_type": "bearer"
}
```

Responses

| Code | Description |
|------|-------------|
|200|Login Successful|
|401|Invalid Credentials|

---

# Dashboard

## GET

```
/dashboard
```

Returns

- Total HCPs
- Total Interactions
- Compliance Rate
- High Priority Count
- Monthly Trend
- Recent HCPs
- Recent Interactions
- Sentiment Distribution
- Priority Distribution
- Top Specialties

---

# HCP APIs

## Get All HCPs

GET

```
/hcp
```

---

## Create HCP

POST

```
/hcp
```

Request

```json
{
  "doctor_name":"Dr. John",
  "specialty":"Cardiology",
  "hospital":"Apollo",
  "city":"Pune",
  "state":"Maharashtra",
  "email":"doctor@email.com",
  "phone":"9999999999",
  "territory":"West"
}
```

---

## Update HCP

PUT

```
/hcp/{id}
```

---

## Delete HCP

DELETE

```
/hcp/{id}
```

---

# Interaction APIs

## Get Interactions

GET

```
/interaction
```

---

## Create Interaction

POST

```
/interaction
```

Request

```json
{
  "hcp_id":"uuid",
  "interaction_notes":"Doctor requested additional clinical evidence."
}
```

AI automatically generates

- Summary
- Sentiment
- Priority
- Compliance
- Follow-up

---

# Analytics APIs

GET

```
/analytics
```

Returns

- Monthly Interactions
- Priority Distribution
- Sentiment Distribution
- Top Specialties

---

# Settings APIs

Future Scope

- User Profile
- Change Password
- Preferences

---

# Response Format

Success

```json
{
    "success": true,
    "data": {}
}
```

Error

```json
{
    "success": false,
    "message": "Something went wrong"
}
```

---

# Authentication Flow

```
Login

↓

JWT Generated

↓

Frontend Stores Token

↓

Authorization Header

↓

Protected APIs
```