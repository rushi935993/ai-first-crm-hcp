import { useState } from "react";

import PageHeader from "@/components/common/PageHeader";
import Spinner from "@/components/ui/Spinner";

import InteractionTable from "@/features/interaction/components/InteractionTable";
import { useInteractions } from "@/features/interaction/hooks/useInteractions";

import type { Interaction } from "@/types/interaction";
import ViewInteractionDialog from "@/features/interaction/components/ViewInteractionDialog";
import { useMemo, useState } from "react";

import InteractionSearchBar from "@/features/interaction/components/InteractionSearchBar";

export default function InteractionHistory() {
  const {
    data = [],
    isLoading,
    isError,
  } = useInteractions();

  const [selected, setSelected] =
    useState<Interaction | null>(null);

  const [search, setSearch] =
  useState("");

  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        <Spinner />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-red-600">
        Failed to load interactions.
      </div>
    );
  }
  
  const filteredInteractions = useMemo(() => {
    return data.filter((interaction) =>
        interaction.raw_input
        .toLowerCase()
        .includes(search.toLowerCase())
    );
    }, [data, search]);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Interaction History"
        subtitle="View all AI analyzed interactions"
      />

      <InteractionSearchBar
        value={search}
        onChange={setSearch}
        />

      <InteractionTable
        interactions={filteredInteractions}
        onView={setSelected}
      />

      {/* Dialog will be added in the next step */}
      {selected && (
        <div className="text-sm text-gray-500">
          Selected Interaction ID: {selected.id}
        </div>
      )}
      <ViewInteractionDialog
        interaction={selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}