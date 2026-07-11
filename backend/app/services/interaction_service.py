from sqlalchemy.orm import Session

from app.models.interaction import Interaction
from app.repositories.interaction_repository import InteractionRepository
from app.schemas.interaction import (
    InteractionCreate,
)
from app.services.ai_service import AIService
from app.services.hcp_service import HCPService

from uuid import UUID

from app.core.exceptions import InteractionNotFoundException
class InteractionService:

    def __init__(self):
        self.repository = InteractionRepository()
        self.ai_service = AIService()
        self.hcp_service = HCPService()

    def list_interactions(
        self,
        db: Session,
    ):
        return self.repository.get_all(db)

    def get_interaction(
        self,
        db: Session,
        interaction_id: UUID,
    ):
        interaction = self.repository.get_by_id(
            db,
            interaction_id,
        )

        if not interaction:
            raise InteractionNotFoundException(
                "Interaction not found."
            )

        return interaction

    def delete_interaction(
        self,
        db: Session,
        interaction_id: UUID,
    ):
        interaction = self.get_interaction(
            db,
            interaction_id,
        )

        self.repository.delete(
            db,
            interaction,
        )

    def process_interaction(
        self,
        db: Session,
        payload: InteractionCreate,
    ) -> Interaction:

        # Validate HCP exists
        self.hcp_service.get_or_raise(
            db,
            payload.hcp_id,
        )

        # Run AI
        analysis = self.ai_service.analyze_interaction(
            hcp_id=payload.hcp_id,
            interaction_type=payload.interaction_type.value,
            raw_input=payload.raw_input,
            notes=payload.notes,
        )

        interaction = Interaction(
            hcp_id=payload.hcp_id,
            interaction_type=payload.interaction_type,
            raw_input=payload.raw_input,
            notes=payload.notes,
            ai_summary=analysis.summary,
            sentiment=analysis.sentiment,
            compliance_status=analysis.compliance_status,
            follow_up=analysis.follow_up,
            priority=analysis.priority,
        )

        saved_interaction = self.repository.create(
            db,
            interaction,
        )

        return {
            "interaction": saved_interaction,
            "analysis": analysis,
        }