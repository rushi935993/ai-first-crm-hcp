from fastapi import APIRouter

from app.api.routes import hcp
from app.api.routes import interaction

api_router = APIRouter(prefix="/api/v1")

api_router.include_router(hcp.router)
api_router.include_router(interaction.router)