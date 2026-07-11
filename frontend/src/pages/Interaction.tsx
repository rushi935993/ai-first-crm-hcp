import { useState } from "react";

import InteractionForm from "@/features/interaction/components/InteractionForm";
import AIResultCard from "@/features/interaction/components/AIResultCard";

import { useProcessInteraction } from "@/features/interaction/hooks/useProcessInteraction";

import type {
  AIAnalysis,
  InteractionRequest,
} from "@/features/interaction/types";

export default function Interaction() {
  const mutation = useProcessInteraction();

  const [analysis, setAnalysis] =
    useState<AIAnalysis | null>(null);

  const handleSubmit = async (
    data: InteractionRequest
  ) => {
    try {
      const result = await mutation.mutateAsync(data);

      console.log("AI Response:", result);

      setAnalysis(result.analysis);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>

      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          AI Interaction Analysis
        </h1>

        <p className="text-gray-500 mt-2">
          Generate AI insights from doctor interactions
        </p>

      </div>

      <InteractionForm
        onSubmit={handleSubmit}
        isLoading={mutation.isPending}
      />

      {analysis && (
        <AIResultCard
          analysis={analysis}
        />
      )}

    </div>
  );
}