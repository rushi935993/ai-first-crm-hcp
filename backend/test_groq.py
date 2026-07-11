from langchain_groq import ChatGroq
from app.core.config import settings

llm = ChatGroq(
    api_key=settings.GROQ_API_KEY,
    model=settings.MODEL_NAME,
)

response = llm.invoke("Say hello.")

print(response.content)