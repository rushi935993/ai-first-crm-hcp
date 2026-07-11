import { Pencil, Trash2 } from "lucide-react";

type HCP = {
  id: string;
  doctor_name: string;
  specialty: string;
  hospital: string;
  city: string;
};

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
          <button
            className="text-blue-600 hover:text-blue-800"
            title="Edit"
          >
            <Pencil size={18} />
          </button>

          <button
            className="text-red-600 hover:text-red-800"
            title="Delete"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
}