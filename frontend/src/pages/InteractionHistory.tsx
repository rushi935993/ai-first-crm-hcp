import { useInteractions } from "@/features/interaction/hooks/useInteractions";

import PageHeader from "@/components/common/PageHeader";
import Spinner from "@/components/ui/Spinner";

export default function InteractionHistory() {
  const {
    data = [],
    isLoading,
    isError,
  } = useInteractions();

  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        <Spinner />
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        Failed to load interactions.
      </div>
    );
  }

  return (
    <div>

      <PageHeader
        title="Interaction History"
        subtitle="View all AI analyzed interactions"
      />

      <pre className="bg-gray-100 p-4 rounded">
        {JSON.stringify(data, null, 2)}
      </pre>

    </div>
  );
}