import { useMemo, useState } from "react";

import SearchBar from "@/features/hcp/components/SearchBar";
import HCPTable from "@/features/hcp/components/HCPTable";
import { useHCP } from "@/features/hcp/hooks/useHCP";
import AddHCPDialog from "@/features/hcp/components/AddHCPDialog";

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
      <div className="text-xl font-semibold">
        Loading HCPs...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-red-600">
        Failed to load HCPs.
      </div>
    );
  }

  return (
    <div>

      <div className="flex justify-between items-center mb-6">

        <div>
            <h1 className="text-3xl font-bold">
            HCP Management
            </h1>

            <p className="text-gray-500">
            Manage healthcare professionals
            </p>
        </div>

        <AddHCPDialog />

      </div>

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