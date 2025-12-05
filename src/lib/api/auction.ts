import { http } from "@/lib/http";
import { AuctionType, AuctionFilters } from "@/types";

export async function getAuctions(
  filters: AuctionFilters = {}
): Promise<AuctionType[]> {
  const res = await http.get("/api/auctions", { params: filters });
  return res.data;
}
