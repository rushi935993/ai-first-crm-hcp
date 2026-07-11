import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

import type { Interaction } from "@/types/interaction";

interface Props {
  interaction: Interaction | null;
  onClose: () => void;
}

export default function ViewInteractionDialog({
  interaction,
  onClose,
}: Props) {
  if (!interaction) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <Card className="w-full max-w-3xl p-8">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold">
            AI Interaction Analysis
          </h2>

          <Button
            variant="secondary"
            onClick={onClose}
          >
            ✕
          </Button>

        </div>

        <div className="space-y-6">

          <div>
            <h3 className="font-semibold mb-2">
              Summary
            </h3>

            <p>{interaction.ai_summary}</p>
          </div>

          <div className="grid grid-cols-2 gap-6">

            <div>
              <strong>Sentiment</strong>
              <p>{interaction.sentiment}</p>
            </div>

            <div>
              <strong>Priority</strong>
              <p>{interaction.priority}</p>
            </div>

            <div>
              <strong>Compliance</strong>
              <p>{interaction.compliance_status}</p>
            </div>

            <div>
              <strong>Follow Up</strong>
              <p>{interaction.follow_up}</p>
            </div>

          </div>

          {interaction.notes && (
            <div>
              <strong>Notes</strong>

              <p>{interaction.notes}</p>
            </div>
          )}

        </div>

      </Card>

    </div>
  );
}