import { Trash2 } from "lucide-react";

import EditHCPDialog from "./EditHCPDialog";
import type { HCP } from "@/types/hcp";
import DeleteHCPDialog from "./DeleteHCPDialog";
type HCPRowProps = {
  hcp: HCP;
};

export default function HCPRow({ hcp }: HCPRowProps) {
  return (
    <tr className="border-b hover:bg-gray-50 transition-colors">
      <td className="p-4 font-medium">
        {hcp.doctor_name}
      </td>

      <td>{hcp.specialty}</td>

      <td>{hcp.hospital}</td>

      <td>{hcp.city}</td>

      <td>
        <div className="flex gap-3">
            <EditHCPDialog
              hcp={hcp}
            />

          <DeleteHCPDialog
            id={hcp.id}
            doctorName={hcp.doctor_name}
            />
        </div>
      </td>
    </tr>
  );
}