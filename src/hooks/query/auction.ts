"use client";

import { useQuery } from "@tanstack/react-query";
import { getAuctions } from "@/lib/api/auction";
import { auctionKeys } from "@/types";

export function useAuctions(filters?: any) {
  return useQuery({
    queryKey: auctionKeys.list(filters),
    queryFn: () => getAuctions(filters),
  });
}
