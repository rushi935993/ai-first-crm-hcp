from app.ai.state import CRMState


def validation_node(state: CRMState) -> CRMState:
    """
    Validate user input before AI processing.
    """

    if not state.raw_input.strip():
        state.success = False
        state.error = "Interaction text cannot be empty."
        return state

    state.success = True
    return state