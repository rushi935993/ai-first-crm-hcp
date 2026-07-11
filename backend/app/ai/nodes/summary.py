from app.ai.state import CRMState


def summary_node(state: CRMState) -> CRMState:
    """
    Placeholder.
    Later this node will call Groq/OpenAI.
    """

    state.analysis = "LLM summary placeholder"

    return state