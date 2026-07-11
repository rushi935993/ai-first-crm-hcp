import { useQuery } from "@tanstack/react-query";

import { getInteractions } from "@/api/interaction";
import type { Interaction } from "@/types/interaction";

export function useInteractions() {
  return useQuery<Interaction[]>({
    queryKey: ["interactions"],
    queryFn: getInteractions,
  });
}