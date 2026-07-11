from langchain_core.messages import HumanMessage, SystemMessage

from app.ai.llm import llm
from app.ai.models import AIAnalysis
from app.ai.prompts import SYSTEM_PROMPT
from app.ai.state import CRMState


structured_llm = llm.with_structured_output(AIAnalysis)


def analysis_node(state: CRMState) -> CRMState:
    """
    Calls the LLM once and returns structured CRM analysis.
    """

    response = structured_llm.invoke(
        [
            SystemMessage(content=SYSTEM_PROMPT),
            HumanMessage(content=state.raw_input),
        ]
    )

    state.analysis = response
    return state