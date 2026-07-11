import { useMutation, useQueryClient } from "@tanstack/react-query";

import { processInteraction } from "@/api/interaction";

export function useProcessInteraction() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: processInteraction,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["interactions"],
      });
    },
  });
}