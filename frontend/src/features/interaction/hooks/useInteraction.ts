import { useQuery } from "@tanstack/react-query";

import { getInteractions } from "@/api/interaction";

export function useInteractions() {
  return useQuery({
    queryKey: ["interactions"],
    queryFn: getInteractions,
  });
}