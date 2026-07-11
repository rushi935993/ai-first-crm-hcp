import { useQuery } from "@tanstack/react-query";
import { getHCPs } from "@/api/hcp";

export function useHCP() {
  return useQuery({
    queryKey: ["hcps"],
    queryFn: getHCPs,
  });
}