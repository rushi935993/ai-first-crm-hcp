import { useDashboard } from "@/hooks/useDashboard";

import StatCard from "@/components/dashboard/StatCard";
import RecentHCPTable from "@/components/dashboard/RecentHCPTable";
import RecentInteractionTable from "@/components/dashboard/RecentInteractionTable";
import AIInsights from "@/components/dashboard/AIInsights";

import PageHeader from "@/components/common/PageHeader";
import Spinner from "@/components/ui/Spinner";

export default function Dashboard() {
  const { data, isLoading, isError } = useDashboard();

  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        <Spinner />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="text-red-600">
        Failed to load dashboard.
      </div>
    );
  }

  return (
    <div>

      <PageHeader
        title="Dashboard"
        subtitle="AI First CRM Overview"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="Total HCPs"
          value={data.total_hcps}
        />

        <StatCard
          title="Interactions"
          value={data.total_interactions}
        />

        <StatCard
          title="High Priority"
          value={data.high_priority}
        />

        <StatCard
          title="Compliance %"
          value={`${data.compliance_rate}%`}
        />

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

        <RecentHCPTable
          hcps={data.recent_hcps}
        />

        <RecentInteractionTable
          interactions={data.recent_interactions}
        />

      </div>

      <div className="mt-8">

        <AIInsights
          dashboard={data}
        />

      </div>

    </div>
  );
}