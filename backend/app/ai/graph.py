from langgraph.graph import END, START, StateGraph

from app.ai.nodes import analysis_node, validation_node
from app.ai.state import CRMState

workflow = StateGraph(CRMState)

workflow.add_node("validate", validation_node)
workflow.add_node("analyze", analysis_node)

workflow.add_edge(START, "validate")
workflow.add_edge("validate", "analyze")
workflow.add_edge("analyze", END)

crm_graph = workflow.compile()