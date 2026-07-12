# Database Schema

## Overview

The application uses PostgreSQL hosted on Neon.

---

# Users

| Field | Type |
|------|------|
|id|UUID|
|name|String|
|email|String|
|password_hash|String|
|role|String|
|created_at|Timestamp|

---

# HCP

| Field | Type |
|------|------|
|id|UUID|
|doctor_name|String|
|specialty|String|
|hospital|String|
|city|String|
|state|String|
|email|String|
|phone|String|
|territory|String|
|is_active|Boolean|
|created_at|Timestamp|

---

# Interaction

| Field | Type |
|------|------|
|id|UUID|
|hcp_id|UUID|
|interaction_notes|Text|
|summary|Text|
|sentiment|String|
|priority|String|
|compliance_status|String|
|follow_up|Text|
|created_at|Timestamp|

---

# Relationships

```

HCP
│
│ 1
│
│
▼
Interactions

```

One HCP can have multiple interactions.

---

# ER Diagram

```

+-------------+
| USERS |
+-------------+

|

+-------------+
| HCP |
+-------------+

|

| 1

|

| *

▼

+------------------+
| INTERACTIONS |
+------------------+

```

---

# Database Choice

PostgreSQL was selected because it provides

- ACID Compliance
- High Performance
- Scalability
- Production Readiness
- SQL Support