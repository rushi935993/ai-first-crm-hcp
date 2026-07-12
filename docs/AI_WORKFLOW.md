# AI Workflow Documentation

## Overview

The AI-First CRM integrates a Large Language Model (LLM) into the interaction management workflow to automatically analyze conversation notes entered by users. Instead of simply storing raw interaction data, the system generates structured insights that assist healthcare representatives in making informed decisions.

The AI workflow is orchestrated using **LangGraph**, enabling a modular, maintainable, and extensible pipeline.

---

# AI Workflow

```
User Creates Interaction
            │
            ▼
Interaction Form Submission
            │
            ▼
FastAPI Backend
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
            ├── Compliance Check
            ├── Missing Information
            ├── Follow-up Recommendation
            └── Extracted Entities
            │
            ▼
Structured JSON Response
            │
            ▼
Store in PostgreSQL
            │
            ▼
Dashboard & Analytics
```

---

# LangGraph Workflow

The application uses LangGraph to coordinate AI processing in a structured manner.

Each interaction passes through the following stages:

## 1. Validation

Input validation ensures that:

- Interaction notes are not empty
- Required fields are present
- HCP exists
- Input is properly formatted

---

## 2. Prompt Construction

A structured prompt is generated containing:

- HCP Information
- Interaction Notes
- Business Context
- Required Output Format

The prompt instructs the LLM to return structured JSON instead of free-form text.

---

## 3. AI Processing

The prompt is sent to the Groq LLM.

The model performs:

- Conversation understanding
- Medical interaction summarization
- Sentiment detection
- Compliance evaluation
- Priority assessment
- Follow-up recommendation

---

## 4. Structured Output

The AI returns structured information including:

```json
{
  "summary": "...",
  "sentiment": "Positive",
  "priority": "Medium",
  "compliance_status": "Compliant",
  "follow_up": "...",
  "missing_information": [],
  "entities": []
}
```

---

# AI Capabilities

## Interaction Summary

Automatically generates concise summaries of long interaction notes.

Example:

Before

```
Discussed new diabetes medication.
Doctor requested pricing information.
Interested in clinical trial results.
```

After

```
The HCP discussed the new diabetes medication, requested pricing details, and expressed interest in reviewing clinical trial outcomes.
```

---

## Sentiment Analysis

Possible outputs:

- Positive
- Neutral
- Negative

Used for dashboard analytics and relationship tracking.

---

## Priority Classification

Possible values:

- High
- Medium
- Low

Priority helps representatives identify interactions requiring immediate attention.

---

## Compliance Validation

Checks whether interaction notes satisfy required documentation standards.

Possible outputs:

- Compliant
- Needs Review

---

## Follow-up Recommendation

AI generates actionable recommendations.

Example:

```
Schedule a follow-up meeting within one week and share requested pricing documentation.
```

---

## Missing Information Detection

The AI identifies important missing details that may affect future interactions.

Examples:

- Product discussed not specified
- Follow-up date missing
- Clinical evidence not referenced

---

## Entity Extraction

The system identifies meaningful entities from interaction notes such as:

- Products
- Diseases
- Clinical Studies
- Organizations
- Healthcare Professionals

---

# Why LangGraph?

LangGraph was selected because it provides:

- Structured AI workflows
- Modular execution
- Easy future expansion
- State management
- Maintainable AI pipelines

Compared to calling an LLM directly, LangGraph enables reusable and scalable orchestration.

---

# Why Groq?

Groq provides:

- Low latency inference
- High throughput
- Llama model support
- Production-ready API
- Cost-effective AI inference

---

# Error Handling

The AI workflow includes safeguards for:

- Invalid input
- Empty interaction notes
- API failures
- LLM response validation
- JSON parsing failures

If AI processing fails, the application prevents corrupted or incomplete AI data from being stored.

---

# Benefits

The AI workflow transforms unstructured conversation notes into actionable business intelligence.

Key benefits include:

- Reduced manual effort
- Faster interaction analysis
- Consistent documentation
- Improved compliance
- Better follow-up planning
- Actionable dashboard insights

---

# Future Enhancements

Potential future improvements include:

- Multi-step LangGraph workflows
- Retrieval-Augmented Generation (RAG)
- Conversation memory
- Multi-model AI support
- Voice-to-text interaction capture
- AI-powered CRM assistant
- Automated email generation

---

# Summary

The AI workflow is the core differentiator of the AI-First CRM. By integrating LangGraph with Groq LLM, the system converts raw interaction notes into structured insights including summaries, sentiment, compliance status, priority levels, and follow-up recommendations. This enables healthcare representatives to make faster, more informed decisions while maintaining consistent documentation standards.