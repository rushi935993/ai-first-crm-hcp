import Card from "@/components/ui/Card";
import type { DashboardResponse } from "@/types/dashboard";

interface Props {
  dashboard: DashboardResponse;
}

export default function AIInsights({
  dashboard,
}: Props) {
  return (
    <Card>
      <h2 className="text-xl font-semibold mb-4">
        AI Insights
      </h2>

      <div className="space-y-3">

        <p>
          👨‍⚕️ Total HCPs:
          <strong> {dashboard.total_hcps}</strong>
        </p>

        <p>
          💬 Total Interactions:
          <strong> {dashboard.total_interactions}</strong>
        </p>

        <p>
          ⚠️ High Priority Cases:
          <strong> {dashboard.high_priority}</strong>
        </p>

        <p>
          ✅ Compliance Rate:
          <strong> {dashboard.compliance_rate}%</strong>
        </p>

      </div>
    </Card>
  );
}