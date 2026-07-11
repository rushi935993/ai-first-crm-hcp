import Card from "@/components/ui/Card";

interface HCP {
  id: string;
  doctor_name: string;
  specialty: string;
  hospital: string;
  city: string;
}

interface Props {
  hcps: HCP[];
}

export default function RecentHCPTable({
  hcps,
}: Props) {
  return (
    <Card>
      <h2 className="text-xl font-semibold mb-4">
        Recent HCPs
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b text-left">
            <th className="pb-2">Doctor</th>
            <th className="pb-2">Specialty</th>
            <th className="pb-2">City</th>
          </tr>
        </thead>

        <tbody>
          {hcps.length === 0 ? (
            <tr>
              <td
                colSpan={3}
                className="py-4 text-center text-gray-500"
              >
                No HCPs found
              </td>
            </tr>
          ) : (
            hcps.map((hcp) => (
              <tr
                key={hcp.id}
                className="border-b"
              >
                <td className="py-3">
                  {hcp.doctor_name}
                </td>

                <td>{hcp.specialty}</td>

                <td>{hcp.city}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </Card>
  );
}