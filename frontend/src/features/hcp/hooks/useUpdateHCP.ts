import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateHCP } from "@/api/hcp";

export function useUpdateHCP() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: string;
      payload: any;
    }) =>
      updateHCP(id, payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["hcps"],
      });
    },
  });
}