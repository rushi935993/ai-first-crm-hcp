from sqlalchemy.orm import Session

from app.models.hcp import HCP
from app.models.interaction import Interaction


class DashboardService:

    def get_dashboard(
        self,
        db: Session,
    ):
        total_hcps = db.query(HCP).count()

        total_interactions = (
            db.query(Interaction).count()
        )

        high_priority = (
            db.query(Interaction)
            .filter(
                Interaction.priority == "High"
            )
            .count()
        )

        compliant = (
            db.query(Interaction)
            .filter(
                Interaction.compliance_status == "Compliant"
            )
            .count()
        )

        compliance_rate = (
            round(
                compliant / total_interactions * 100,
                2,
            )
            if total_interactions
            else 0
        )

        recent_hcps = (
            db.query(HCP)
            .order_by(HCP.created_at.desc())
            .limit(5)
            .all()
        )

        recent_interactions = (
            db.query(Interaction)
            .order_by(
                Interaction.created_at.desc()
            )
            .limit(5)
            .all()
        )

        return {
            "total_hcps": total_hcps,
            "total_interactions": total_interactions,
            "high_priority": high_priority,
            "compliance_rate": compliance_rate,
            "recent_hcps": recent_hcps,
            "recent_interactions": recent_interactions,
        }