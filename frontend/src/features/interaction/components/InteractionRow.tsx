import Button from "@/components/ui/Button";
import type { Interaction } from "@/types/interaction";

interface Props {
  interaction: Interaction;
  onView: (interaction: Interaction) => void;
}

export default function InteractionRow({
  interaction,
  onView,
}: Props) {
  return (
    <tr className="border-b">
      <td className="py-3">
        {interaction.interaction_type}
      </td>

      <td>{interaction.priority}</td>

      <td>{interaction.sentiment}</td>

      <td>{interaction.compliance_status}</td>

      <td>
        {new Date(
          interaction.created_at
        ).toLocaleDateString()}
      </td>

      <td>
        <Button
          variant="secondary"
          onClick={() => onView(interaction)}
        >
          View
        </Button>
      </td>
    </tr>
  );
}