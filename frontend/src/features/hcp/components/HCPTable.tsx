import HCPRow from "./HCPRow";

type HCP = {
  id: string;
  doctor_name: string;
  specialty: string;
  hospital: string;
  city: string;
};

type HCPTableProps = {
  hcps: HCP[];
};

export default function HCPTable({ hcps }: HCPTableProps) {
  if (hcps.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm border p-8 text-center text-gray-500">
        No HCPs found.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="text-left p-4">Doctor</th>
            <th className="text-left">Specialty</th>
            <th className="text-left">Hospital</th>
            <th className="text-left">City</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {hcps.map((hcp) => (
            <HCPRow
              key={hcp.id}
              hcp={hcp}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}