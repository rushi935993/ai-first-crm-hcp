import Card from "@/components/ui/Card";

import InteractionRow from "./InteractionRow";

import type { Interaction } from "@/types/interaction";

interface Props {
  interactions: Interaction[];
  onView: (interaction: Interaction) => void;
}

export default function InteractionTable({
  interactions,
  onView,
}: Props) {
  return (
    <Card>

      <table className="w-full">

        <thead>

          <tr className="border-b text-left">

            <th>Type</th>

            <th>Priority</th>

            <th>Sentiment</th>

            <th>Compliance</th>

            <th>Date</th>

            <th></th>

          </tr>

        </thead>

        <tbody>

          {interactions.map((interaction) => (
            <InteractionRow
              key={interaction.id}
              interaction={interaction}
              onView={onView}
            />
          ))}

        </tbody>

      </table>

    </Card>
  );
}