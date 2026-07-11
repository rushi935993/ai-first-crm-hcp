from app.services.ai_service import AIService

service = AIService()

analysis = service.analyze_interaction(
    hcp_id="1",
    interaction_type="VISIT",
    raw_input="""
Visited Dr. Sharma.

Discussed hypertension medication.

Doctor requested efficacy comparison study.
"""
)

print(analysis)