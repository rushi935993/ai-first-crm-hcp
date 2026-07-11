import PageHeader from "@/components/common/PageHeader";
import { useDashboard } from "@/hooks/useDashboard";

import InteractionTrendChart from "@/components/dashboard/InteractionTrendChart";
import PriorityPieChart from "@/components/dashboard/PriorityPieChart";
import SentimentPieChart from "@/components/dashboard/SentimentPieChart";
import TopSpecialtyChart from "@/components/dashboard/TopSpecialtyChart";

import Spinner from "@/components/ui/Spinner";

export default function Analytics() {
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
                Failed to load analytics.
            </div>
        );
    }

    return (
        <div>

            <PageHeader
                title="Analytics"
                subtitle="Detailed CRM Analytics"
            />

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                <InteractionTrendChart
                    data={data.monthly_interactions}
                />

                <TopSpecialtyChart
                    data={data.top_specialties}
                />

            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

                <PriorityPieChart
                    data={data.priority_distribution}
                />

                <SentimentPieChart
                    data={data.sentiment_distribution}
                />

            </div>

        </div>
    );
}