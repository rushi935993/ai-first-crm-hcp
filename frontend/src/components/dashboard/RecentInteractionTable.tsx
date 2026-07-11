import Card from "@/components/ui/Card";

interface Interaction {
  id: string;
  interaction_type: string;
  priority?: string;
  ai_summary?: string;
}

interface Props {
  interactions: Interaction[];
}

export default function RecentInteractionTable({
  interactions,
}: Props) {
  return (
    <Card>
      <h2 className="text-xl font-semibold mb-4">
        Recent Interactions
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b text-left">
            <th className="pb-2">Type</th>
            <th className="pb-2">Priority</th>
          </tr>
        </thead>

        <tbody>
          {interactions.length === 0 ? (
            <tr>
              <td
                colSpan={2}
                className="py-4 text-center text-gray-500"
              >
                No interactions found
              </td>
            </tr>
          ) : (
            interactions.map((interaction) => (
              <tr
                key={interaction.id}
                className="border-b"
              >
                <td className="py-3">
                  {interaction.interaction_type}
                </td>

                <td>
                  {interaction.priority ?? "-"}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </Card>
  );
}