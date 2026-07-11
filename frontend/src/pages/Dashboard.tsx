import {
  Users,
  MessageSquare,
  AlertTriangle,
  ShieldCheck,
} from "lucide-react";

import StatCard from "@/components/dashboard/StatCard";
import { useDashboard } from "@/features/dashboard/useDashboard";

export default function Dashboard() {
  const { data, isLoading } = useDashboard();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>

      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="text-gray-500">
          AI-powered Healthcare CRM
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6">

        <StatCard
          title="Total HCPs"
          value={data?.length ?? 0}
          icon={Users}
          color="bg-blue-600"
        />

        <StatCard
          title="Interactions"
          value="--"
          icon={MessageSquare}
          color="bg-green-600"
        />

        <StatCard
          title="High Priority"
          value="--"
          icon={AlertTriangle}
          color="bg-red-600"
        />

        <StatCard
          title="Compliance"
          value="--"
          icon={ShieldCheck}
          color="bg-purple-600"
        />

      </div>

    </div>
  );
}