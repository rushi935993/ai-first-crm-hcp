from sqlalchemy.orm import Session

from app.models.interaction import Interaction
from sqlalchemy import func
from app.models.hcp import HCP

class AnalyticsService:

    def monthly_interactions(
        self,
        db: Session,
    ):
        rows = (
            db.query(
                func.strftime(
                    "%Y-%m",
                    Interaction.created_at,
                ).label("month"),
                func.count(
                    Interaction.id
                ).label("count"),
            )
            .group_by("month")
            .all()
        )

        return [
            {
                "month": row.month,
                "interactions": row.count,
            }
            for row in rows
        ]
    
    def priority_distribution(
        self,
        db: Session,
    ):
        rows = (
            db.query(
                Interaction.priority,
                func.count(Interaction.id),
            )
            .group_by(Interaction.priority)
            .all()
        )

        return [
            {
                "name": priority,
                "value": count,
            }
            for priority, count in rows
        ]
    
    def sentiment_distribution(
        self,
        db: Session,
    ):
        rows = (
            db.query(
                Interaction.sentiment,
                func.count(Interaction.id),
            )
            .group_by(Interaction.sentiment)
            .all()
        )

        return [
            {
                "name": sentiment,
                "value": count,
            }
            for sentiment, count in rows
        ]
    
    def top_specialties(
        self,
        db: Session,
    ):
        rows = (
            db.query(
                HCP.specialty,
                func.count(Interaction.id),
            )
            .join(
                Interaction,
                Interaction.hcp_id == HCP.id,
            )
            .group_by(HCP.specialty)
            .order_by(
                func.count(Interaction.id).desc()
            )
            .limit(5)
            .all()
        )

        return [
            {
                "specialty": specialty,
                "interactions": count,
            }
            for specialty, count in rows
        ]