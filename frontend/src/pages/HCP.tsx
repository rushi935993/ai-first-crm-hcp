import { useMemo, useState } from "react";

import SearchBar from "@/features/hcp/components/SearchBar";
import HCPTable from "@/features/hcp/components/HCPTable";
import AddHCPDialog from "@/features/hcp/components/AddHCPDialog";

import PageHeader from "@/components/common/PageHeader";
import ErrorState from "@/components/common/ErrorState";

import { useHCP } from "@/features/hcp/hooks/useHCP";
type HCP = {
  id: string;
  doctor_name: string;
  specialty: string;
  hospital: string;
  city: string;
};

export default function HCP() {
  const { data = [], isLoading, isError } = useHCP();

  const [search, setSearch] = useState("");

  const filteredHCPs = useMemo(() => {
    return data.filter((hcp: HCP) =>
      hcp.doctor_name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [data, search]);

  if (isLoading) {
    return (
        <div className="flex justify-center py-16">
        Loading...
        </div>
    );
  }

  if (isError) {
    return (
        <ErrorState
        message="Failed to load healthcare professionals."
        />
    );
  }

  return (
    <div>

      <PageHeader
        title="HCP Management"
        subtitle="Manage healthcare professionals"
        action={<AddHCPDialog />}
      />

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <HCPTable
        hcps={filteredHCPs}
      />

    </div>
  );
}