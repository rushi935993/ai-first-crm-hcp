import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteHCP } from "@/api/hcp";

export function useDeleteHCP() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteHCP(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["hcps"],
      });
    },
  });
}