from fastapi import APIRouter

from app.api.routes import hcp, interaction, dashboard
from app.auth import auth_router
api_router = APIRouter()

api_router.include_router(
    hcp.router,
    prefix="/v1",
)

api_router.include_router(
    interaction.router,
    prefix="/v1",
)

api_router.include_router(
    dashboard.router,
    prefix="/v1",
)

api_router.include_router(
    auth_router.router,
    prefix="/v1",
)