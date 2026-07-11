import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createHCP } from "@/api/hcp";
import type { CreateHCPRequest } from "@/types/hcp";

export function useCreateHCP() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateHCPRequest) =>
      createHCP(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["hcps"],
      });
    },
  });
}