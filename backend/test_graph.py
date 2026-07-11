from app.ai.graph import crm_graph
from app.ai.state import CRMState
from app.core.config import settings
from pprint import pprint


print(settings.GROQ_API_KEY[:10])
state = CRMState(
    hcp_id="1",
    interaction_type="VISIT",
    raw_input="""
Visited Dr. Sharma today.

Discussed hypertension medication.

Doctor requested efficacy comparison data and agreed to another meeting next week.
""",
)

result = crm_graph.invoke(state)


pprint(result)