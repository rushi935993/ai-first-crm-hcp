import { useForm } from "react-hook-form";

import { useHCP } from "@/features/hcp/hooks/useHCP";
import type { InteractionRequest } from "../types";

type Props = {
  onSubmit: (data: InteractionRequest) => void;
  isLoading: boolean;
};

export default function InteractionForm({
  onSubmit,
  isLoading,
}: Props) {
  const { data: hcps = [] } = useHCP();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<InteractionRequest>({
    defaultValues: {
      interaction_type: "VISIT",
    },
  });

  const submit = (data: InteractionRequest) => {
    onSubmit(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="space-y-5"
    >
      <div>
        <label className="block mb-2 font-medium">
          Healthcare Professional
        </label>

        <select
          {...register("hcp_id")}
          className="w-full border rounded-lg p-3"
        >
          <option value="">
            Select HCP
          </option>

          {hcps.map((hcp: any) => (
            <option
              key={hcp.id}
              value={hcp.id}
            >
              {hcp.doctor_name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Interaction Type
        </label>

        <select
          {...register("interaction_type")}
          className="w-full border rounded-lg p-3"
        >
          <option value="VISIT">Visit</option>
          <option value="CALL">Call</option>
          <option value="EMAIL">Email</option>
          <option value="WHATSAPP">WhatsApp</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Visit Notes
        </label>

        <textarea
          rows={8}
          {...register("raw_input")}
          placeholder="Describe the interaction..."
          className="w-full border rounded-lg p-3"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
      >
        {isLoading
          ? "Generating..."
          : "🤖 Generate AI Analysis"}
      </button>
    </form>
  );
}