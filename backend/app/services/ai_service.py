from app.ai.graph import crm_graph
from app.ai.state import CRMState
from app.ai.models import AIAnalysis


class AIService:
    """
    Service responsible for executing the LangGraph workflow.
    """

    def analyze_interaction(
        self,
        hcp_id: str,
        interaction_type: str,
        raw_input: str,
        notes: str | None = None,
    ) -> AIAnalysis:

        state = CRMState(
            hcp_id=hcp_id,
            interaction_type=interaction_type,
            raw_input=raw_input,
            notes=notes,
        )

        result = crm_graph.invoke(state)

        return result["analysis"]