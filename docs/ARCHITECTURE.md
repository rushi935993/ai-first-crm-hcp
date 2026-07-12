# System Architecture

## Overview

The AI-First CRM for Healthcare Professionals (HCP) is a full-stack web application designed to intelligently manage healthcare professional interactions using Artificial Intelligence. The application follows a modular architecture with clear separation between the frontend, backend, AI workflow, and database layers.

---

# High-Level Architecture

```
                         User
                          │
                          ▼
               React + TypeScript Frontend
                          │
                     REST API (HTTPS)
                          │
                          ▼
                  FastAPI Backend
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
        ▼                 ▼                 ▼
 JWT Authentication   Business Logic    LangGraph Workflow
        │                 │                 │
        └─────────────────┼─────────────────┘
                          │
                          ▼
                     Groq LLM API
                          │
                          ▼
                  SQLAlchemy ORM
                          │
                          ▼
                 PostgreSQL (Neon)
```

---

# Frontend Architecture

The frontend is built using React with TypeScript following a component-based architecture.

```
Pages
   │
   ▼
Layouts
   │
   ▼
Components
   │
   ▼
Custom Hooks
   │
   ▼
API Layer (Axios)
   │
   ▼
FastAPI Backend
```

### Main Frontend Modules

- Authentication
- Dashboard
- HCP Management
- Interaction Management
- Analytics
- Settings

---

# Backend Architecture

The backend follows a layered architecture to maintain scalability and separation of concerns.

```
API Routes
     │
     ▼
Schemas (Pydantic)
     │
     ▼
Services
     │
     ▼
Models (SQLAlchemy)
     │
     ▼
Database
```

### Backend Layers

## API Layer

Responsible for exposing REST endpoints.

Examples:

- Authentication
- Dashboard
- HCP
- Interaction
- Analytics

---

## Service Layer

Contains business logic.

Examples:

- DashboardService
- AnalyticsService
- HCPService
- InteractionService
- AIService

---

## Database Layer

Implemented using SQLAlchemy ORM with PostgreSQL.

Handles

- CRUD Operations
- Relationships
- Queries
- Transactions

---

# AI Workflow

The AI pipeline processes every interaction before storing it in the database.

```
User submits interaction
            │
            ▼
Input Validation
            │
            ▼
LangGraph Workflow
            │
            ▼
Groq LLM
            │
            ▼
AI Analysis
            │
            ├── Summary
            ├── Sentiment
            ├── Priority
            ├── Compliance Status
            └── Follow-up Recommendation
            │
            ▼
Store Results
            │
            ▼
Dashboard & Analytics
```

---

# Database Architecture

```
Users
   │
   │
   ├──────────────┐
                  │
                  ▼
            Interactions
                  ▲
                  │
                  │
                HCP
```

### Main Tables

- Users
- Healthcare Professionals (HCP)
- Interactions

---

# Authentication Flow

```
User Login
      │
      ▼
Email + Password
      │
      ▼
JWT Token Generated
      │
      ▼
Frontend Stores Token
      │
      ▼
Protected API Requests
      │
      ▼
JWT Verification
```

---

# Deployment Architecture

```
                User
                  │
                  ▼
          Vercel (Frontend)
                  │
             REST API
                  │
                  ▼
          Render (Backend)
                  │
                  ▼
      PostgreSQL (Neon Database)
                  │
                  ▼
            Groq LLM API
```

---

# Design Decisions

## React + TypeScript

Chosen for type safety, reusable components, and scalable frontend architecture.

## FastAPI

Chosen for high performance, automatic OpenAPI documentation, and excellent Python ecosystem support.

## PostgreSQL

Chosen for production-grade relational data storage.

## SQLAlchemy

Provides ORM support and database abstraction.

## LangGraph

Used to orchestrate the AI workflow and ensure structured execution.

## Groq LLM

Provides high-speed inference for AI-powered interaction analysis.

## JWT Authentication

Provides stateless and secure authentication for protected API access.

---

# Scalability Considerations

- Modular service architecture
- Layered backend design
- Reusable frontend components
- Stateless JWT authentication
- Production-ready PostgreSQL database
- AI workflow isolated from business logic
- Easily extendable API architecture

---

# Summary

The application follows modern software engineering principles including modularity, separation of concerns, reusable components, service-based architecture, and AI-first workflow integration. The overall design supports maintainability, scalability, and future enhancements while demonstrating production-ready full-stack development practices.